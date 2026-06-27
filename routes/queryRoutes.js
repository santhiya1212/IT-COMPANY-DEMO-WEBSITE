import express from "express";

import {createQuery} from "../controllers/queryController.js";

const router = express.Router();

router.post("/",createQuery);

export default router;