import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import uploadRoutes from './routes/upload.js';


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/upload', uploadRoutes);

app.get('/', (req, res) => {
    res.send('Hello Image Uploader API');
})



const PORT = process.env.PORT || 5000 ;

mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`) ))
.catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);