
import express from 'express'

import { routerPersonas } from './routerPersonas.js'

const app = express()

app.use('/api/personas', routerPersonas)

app.use((err, req, res, next) => {
    res.status(401).json(err) 
})

export function conectar() { app.listen(8080) }

// import express from "express"
// import passport from "passport";
// import { Strategy as LocalStrategy } from "passport";
// import dotenv from "dotenv"

// const app = express()

// app.use(express.json()),
// app.use(express.urlencoded({ extended: true }))

// app.post("/", (req, res) => {
//     sendStatus.json({})
// })


// app.get("/", (req, res) => {
//     senStatus.json({})
// })

