const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling get in orders"
    });
});

router.post("/", (req, res, next) => {
    res.status(201).json({
        message: "Handling post in orders"
    });

});
router.patch("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling patch in orders"
    });
});

router.delete("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling delete in orders"
    });

});

router.get("/:orderId", (req, res, next) => {
    res.status(200).json({
        message: "Handling get in oreders/ordersid",
        id: req.params.orderId
    });
});

router.post("/:orderId", (req, res, next) => {
    res.status(201).json({
        message: "Handling post in orders/orderid",
        id: req.params.orderId
    });
});

module.exports = router;