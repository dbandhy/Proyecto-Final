import express from "express"
import passport from "passport";
import { Strategy as LocalStrategy } from "passport";
import dotenv from "dotenv"

const app = express()

app.use(express.json()),
app.use(express.urlencoded({ extended: true }))

app.post("/", (req, res) => {
    sendStatus.json({})
})


app.get("/", (req, res) => {
    senStatus.json({})
})

