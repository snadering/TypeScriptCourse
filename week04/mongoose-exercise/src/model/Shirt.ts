import mongoose, { Document, Schema } from "mongoose";

interface IShirt extends Document {
    _id: string,
    name: string,
    club: any,
    seller: any,
    playerName: string,
    number: number,
    createdAt?: Date,
}

const schema = new mongoose.Schema<IShirt>({
    name: {
        type: String,
        required: [true, "A shirt must have a name"],
        minlength: [1, "Shirt name cannot be empty."],
        trim: true,
    },
    club: {type: Schema.Types.ObjectId, ref: "Club"},
    seller: {type: Schema.Types.ObjectId, ref: "Seller"},
    playerName: {
        type: String,
        trim: true,
    },
    number: {
        type: Number,
    },
    createdAt: {
        type: Date,
        immutable: true,
    },
});

schema.pre('save', async function(next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
})

schema.post('save', async function(doc, next) {
    try {
        const sellerId = this.seller;
        const shirtId = this._id;
        const clubId = this.club;

        if (sellerId && clubId && shirtId) {
            const seller = await mongoose.model('Seller').findById(sellerId);
            const club = await mongoose.model('Club').findById(clubId);

            if (seller) {
                seller.shirts.push(shirtId);
                await seller.save();
            }
            if (club) {
                club.shirts.push(shirtId);
                await club.save();
            }
        }

        next();
    } catch (error) {
        next(error);
    }
})

export const Shirt = mongoose.model("Shirt", schema);