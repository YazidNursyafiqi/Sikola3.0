import express from "express";
import login_handler from "../controllers/loginHandler.js";

const handle_login = express.Router();

handle_login.post('/login',login_handler);

export default handle_login;