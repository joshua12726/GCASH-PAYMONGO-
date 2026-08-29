import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/api", (req, res) => {
    res.json({
        status: "PayMongo backend is running"
    });
});

app.post("/api/gcash-checkout", (req, res) => {
    console.log("POST BODY:", req.body);

    res.json({
        success: true,
        message: "GCASH CHECKOUT ROUTE WORKS",
        received: req.body
    });
});

export default app;