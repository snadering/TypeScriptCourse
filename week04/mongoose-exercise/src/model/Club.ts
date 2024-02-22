import mongoose, { Schema } from 'mongoose';

interface IClub {
    _id: string,
    name: string,
    league: string,
    country: string,
    shirts: any[],
    createdAt?: Date,
}

const schema = new mongoose.Schema<IClub>({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, "A club must have a name"],
        minlength: [1, "Club name cannot be empty."],
        trim: true,
        unique: true,
    },
    league: {
        type: String,
        required: [true, "A Club must have a league associated"],
        minlength: [1, "Club league cannot be empty."],
        trim: true,
    },
    country: {
        type: String,
        required: [true, "A club must have a country"],
        minlength: [1, "Club country cannot be empty."],
        trim: true,
    },
    shirts: [
        {type: Schema.Types.ObjectId, ref: 'Shirt'}
    ],
    createdAt: {
        type: Date,
    },
}, {
    virtuals: {
        allInfo: {
            get() {
                return `${this.name}, ${this.league}, ${this.country}`;
            }
        }
    },
});

schema.pre('save', function(next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }

    next();
})

schema.post('save', async function(doc, next) {
    await doc.populate("shirts");
    next();
})

export const Club = mongoose.model("Club", schema)