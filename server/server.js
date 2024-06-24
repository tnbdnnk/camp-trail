import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from 'morgan';
import 'dotenv/config';

import advertsRouter from './src/routes/advertsRouter.js';

const app = express();
const PORT = process.env.PORT || 5000; 
const formatsLogger = (app.get('env') === 'development') ? 'dev' : 'combined';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/adverts", advertsRouter);

mongoose.set('strictQuery', true);

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DataBase Connection Success");
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((error) => console.log(error.message));

app.use((err, req, res, next) => {
    if (typeof err.status !== "undefined" && typeof err.message !== "undefined") {
        res.status(err.status).json({ message: err.message });
    } else {
        console.error(err.stack);
        res.status(500).json({ message: "Internal Server Error" });
    };
});
