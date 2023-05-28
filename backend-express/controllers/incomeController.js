const Model = require("../models/Income");

const getAll = async (req, res) => {
  try {
    const items = await Model.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createOne = async (req, res) => {
  try {
    const { name, amount, source, passive, currencyType } = req.body;
    const it = new Model({ name, amount, source, passive, currencyType });
    const item = await it.save();
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateOne = async (req, res) => {
  try {
    const { name, amount, source, passive, currencyType } = req.body;
    const item = await Model.findByIdAndUpdate(
      req.params.id,
      { name, amount, source, passive, currencyType },
      { new: true }
    );
    if (!item) {
      res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) {
      res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };
