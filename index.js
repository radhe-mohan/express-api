import express from 'express'
import mongoose from 'mongoose';
const app = express();

import env from 'dotenv';
env.config();

const PORT = process.env.PORT || 4000;

//mongoose connection
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to MongoDB database");
}).catch((error) => {
    console.error("Error connecting to MongoDB database:", error);
});


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('public/uploads'));
//import routers
// user routes
import userRoutes from './APIs/route/userRegister.js';



app.use('/api/user', userRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on ${"http://localhost:" + PORT}`);
});