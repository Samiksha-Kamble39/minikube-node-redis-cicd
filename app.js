const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({
    url: `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:6379`
});

client.connect()
.then(() => console.log("Redis connected"))
.catch(err => console.log(err));

app.get("/", async (req, res) => {

    try {

        await client.ping();

        res.json({
            message: "Application working successfully",
            redis: "connected"
        });

    } catch (err) {

        res.status(500).json({
            error: "Redis connection failed"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
