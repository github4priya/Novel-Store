import express from 'express'
import cors from "cors"
import asyncHandler from 'express-async-handler'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import Book from './Models/bookModel.js'
import userRoutes from './routes/userRoutes.js'
import BooksRoutes from './routes/booksRoutes.js'

const app = express();
dotenv.config();
connectDB();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())  //Cross-Origin Resource Sharing. All web applications have a front end & a back end and they communicate with each other via API's. In most cases, both the front end and the back end are hosted on the same origin. CORS in node.js helps to get resources from external servers.


//routes
app.get("/", (req, res) => {
    res.send("my api")
})

app.use('/api/users', userRoutes)
app.use('/home', BooksRoutes)



// server running on port 9002
const PORT = process.env.PORT || 9002
app.listen(PORT, () => {
    console.log("started port at 9002")
})