const express = require('express');
const router = express.Router()
const loginInfoSchema = require('../models/login_info_schema')


router.get("", async (req, res) => {
    const user = await loginInfoSchema.find({});
    return res.json(user);
});
router.get("/:id", async (req, res) => {
    const user = await loginInfoSchema.findById(req.params.id);
    return res.json(user);
});
router.post("/", async (req, res) => {
    const result = await loginInfoSchema.create(req.body);
    return res.json(result);
});
router.patch("", async (req, res) => {
    const result = await loginInfoSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(result);
});
router.delete("", async (req, res) => {
    const result = await loginInfoSchema.findByIdAndDelete(req.params.id);
    return;
});