import { Router } from "express";
import { getDashboardMetrices } from "../controllers/dashboardController";

const router = Router();

router.get("/", getDashboardMetrices);

export default router;
