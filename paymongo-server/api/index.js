import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.json({
        status: "PayMongo backend is running"
    });
});

app.post("/api/gcash-checkout", (req, res) => {
    res.status(200).json({
        success: true,
        message: "POST route is working"
    });
});

export default app;