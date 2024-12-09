const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getInventoryController,
  createInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
//add inventory || post
router.post("/create-inventory", authMiddleware, createInventoryController);

//get all blood record
router.get("/get-inventory", authMiddleware, getInventoryController);

//get all donar record
router.get("/get-donars", authMiddleware, getDonarsController);

//get all hospital record
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get all organisation record
router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);

//get all organisation-hospital record
router.get(
  "/get-orgnaisation-for-hospital",
  authMiddleware,
  getOrgnaisationForHospitalController
);

//get hospital blood recod record
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//get recent blood record
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

module.exports = router;
