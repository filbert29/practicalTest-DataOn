const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/UserModel");
const CatalogModel = require("./models/CatalogModel");
const DistributorModel = require("./models/DistributorModel");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());

app.post("/SignIn", async (req, res) => {
    const { userId, password } = req.body;
    const user = await UserModel.findOne({ userId });

    if (!user) {
        return res.json({
            messageTitle: "User Not Found!",
            status: '403',
        });
    }

    if (!password == user.password) {
        return res.json({
            messageTitle: "Wrong Password!",
            status: '403',
        });
    }

    const token = jwt.sign({ id: user._id }, "SECRET");
    res.json({ token, userId: user.userId, status: 'success' });
});

app.get("/fetchCatalog", async (req, res) => {
    try {
        const result = await CatalogModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.get("/fetchDistributor", async (req, res) => {
    try {
        const result = await DistributorModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.post("/addDistributor", async (req, res) => {
    const { distributorName, city, stateRegion, country, email, phone } = req.body;
    try {
        const newDistributor = new DistributorModel({
            distributorName,
            city,
            stateRegion,
            country,
            phone,
            email,
        });
        await newDistributor.save();
        res.json({
            status: 'success',
            messageTitle: "Success Add Distributor!",
        });
    } catch (err) {
        res.json(err);
    }
});

app.post("/singleDistributor", async (req, res) => {
    try {
        const result = await DistributorModel.findOne({ _id: req.body.idDistributor });
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.put("/changeDistributor", async (req, res) => {
    try {
        const result = await DistributorModel.findOneAndUpdate(
            { _id: req.body.idDistributor },
            {
                $set: req.body,
            },
            {
                new: true,
            }
        );
        res.json({
            status: 'success',
            messageTitle: "Success Edit Distributor!",
        });
    } catch (err) {
        res.json(err);
    }
});

mongoose.connect(
    "mongodb+srv://fkhouwira70:8DtuqyTaasmiqbtY@cluster0.gmxoh2p.mongodb.net/coffeeValley?retryWrites=true&w=majority"
);

app.listen(3001, () => {
    console.log("SERVER RUN!");
});