const express = require("express");

const router = express.Router();
const SalesSchema = require("../models/sales.schema.js");

router.get("", async (req, res) => {
  const sales = await SalesSchema.find({});
  return res.json(sales);
});
router.get("/:id", async (req, res) => {
  const sale = await SalesSchema.findById(req.params.id);
  return res.json(sale);
});
router.post("/", async (req, res) => {
  const result = await SalesSchema.create(req.body);
  return res.json(result);
});
router.patch("", async (req, res) => {
  const result = await SalesSchema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(result);
});
router.delete("", async (req, res) => {
  const result = await SalesSchema.findByIdAndDelete(req.params.id);
  return;
});
