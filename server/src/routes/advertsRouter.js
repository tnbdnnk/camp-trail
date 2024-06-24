import express from "express";
import {
    getAdvert,
    getAdverts,
    updateAdvert
} from "../controllers/advertsController.js";

const advertsRouter = express.Router();

advertsRouter.get("/", getAdverts);
advertsRouter.get("/:_id", getAdvert);
advertsRouter.patch("/:_id", updateAdvert);

export default advertsRouter;