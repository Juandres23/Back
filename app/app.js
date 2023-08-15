import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import enviroments from "./config/enviroments";
import AllRoutes from "./routes/user.routes";
const app = express();

//settings
app.set("PORT", process.env.PORT);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(morgan('dev'));


//Routes
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to my application'});
});

app.use('/api', AllRoutes);

export default app;