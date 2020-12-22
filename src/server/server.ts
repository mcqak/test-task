import { Request, Response } from "express";
const express = require('express');
const cors = require('cors');
const parser = require('body-parser');

const app = express();

app.use(parser.json())
app.use(cors())

app.post("/calculate", (req: Request, res: Response) => {
    const numberX: number = req.body.numberX;
    const numberY: number = req.body.numberY;
    const calc = numberX + numberY;
    
    res.json({calc})
})

app.listen(8000, () => {
    console.log('server running at port 8000');
})


export {}