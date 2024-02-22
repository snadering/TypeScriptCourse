import mongoose from "mongoose"
import { Club } from "./model/Club";
import { ObjectId } from "mongodb";
import { Shirt } from "./model/Shirt";
import { Seller } from "./model/Seller";

const uri: string = 'mongodb+srv://snadering:6p3W5Lc3PeLtrpsz@cluster0.qnlxhan.mongodb.net/webshop'

async function main() {
    await mongoose.connect(uri).then(() => console.log("Connected!"));

    // To create a new seller in the collection
    // await Seller.create({
    //     _id: new ObjectId(),
    //     username: "Snadering",
    //     email: "snader@gmail.com",
    //     shirts: [],
    // })
    
    const foundClub = await Club.findOne({ name: {$eq: "Chelsea"} }).exec()
    
    const newClub = new Club({
        _id: new ObjectId(),
        name: "Liverpool",
        country: "England",
        league: "Premier League",
    })
    console.log(newClub.allInfo)
    
    const foundSeller = await Seller.findOne({ username: {$eq: "Sander"} }).exec()

    await Shirt.create({
        name: "Chelsea Home Kit 2024",
        club: foundClub?._id,
        seller: foundSeller?._id,
        playerName: "Carney Chukwuemeka",
        number: 17,
    })
    .then(() => console.log("Shirt persisted"))
    .catch(err => console.error(err));

    const sellers = await Seller.getSellerByShirtCount(2);
    console.log(sellers);
}

main().catch(err => console.error(err));