import express, { Request, Response } from "express";
import * as dotenv from 'dotenv'
import Deck from "./Models/Deck"
import mongoose from 'mongoose';




const port = 5000
const app = express()
dotenv.config()
app.use(express.json())

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
      title: req.body.title
    })
    const createdDeck = await newDeck.save()
    res.json(createdDeck)
})

mongoose.connect(process.env.MONGO_URL!)
.then(() => app.listen(port, () => (console.log(`DB connected`), console.log(`server running on port ${port}`))));
 
