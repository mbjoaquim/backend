import express from "express"
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import router from "./Routes/deckRoute"


const port = 5000
const app = express()

dotenv.config()
app.use(express.json())

app.use("/decks", router)

mongoose.connect(process.env.MONGO_URL!)
.then(() => app.listen(port, () => (console.log(`DB connected`), console.log(`server running on port ${port}`))));
 
