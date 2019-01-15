const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling get in products"
    });
});

router.post("/", (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: "Handling post in products",
        product
    });

});

router.patch("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling patch in products"
    });
});

router.delete("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling delete in products"
    });

});

router.get("/:productId", (req, res, next) => {
    res.status(200).json({
        message: "Handling get in products/productid",
        id: req.params.productId
    });
});

router.post("/:productId", (req, res, next) => {
    res.status(201).json({
        message: "Handling post in products/productid",
        id: req.params.productId
    });
});


module.exports = router;