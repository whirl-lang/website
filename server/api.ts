import express from "express";
import { auth } from "./lucia"

const app = express();

app.listen(8000, () => {
    console.log("connected");
})

app.get("auth", async (req, res) => {
    const authRequest = auth.handleRequest(req.body);
    const session = await authRequest.validate();
    if (session){
        res.send("Logged in")
    }
    else {
        res.send("not Logged in")
    }
})