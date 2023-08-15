import { pool } from "../config/database/db.js";
import message from "../config/message.js";

export const createUser = async (req, res) => {
    try {
        const name = req.body.name;
        const result = await pool.query(`INSERT INTO user (name) VALUES ('${name}')`)
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const findAllUser = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM user`);
        res.json(rows);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const findOneUser = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await pool.query(`SELECT id, name FROM user WHERE id = ${id}`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const pingUser = async (req, res) =>  {
    try {
        const [result] = await pool.query(`SELECT "hello world" as RESULT`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const result = await pool.query(`UPDATE user SET name = ('${name}') WHERE id = ${id}`);
        res.send(result);
    } catch (error){
        message(error.message, "danger");
        res.status(500);
    }
}

export const deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await pool.query(`DELETE FROM user WHERE id = ${id}`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}