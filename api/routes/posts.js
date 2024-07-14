import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../models/Post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;





// import mysql from "mysql";

// const router = Router();

// // Create MySQL Connection
// const connection = mysql.createConnection({
//   user:"root",
//     password: "",
//     host:"localhost",
// 	database: "agency",
// });

// // Connect to MySQL
// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err);
//   } else {
//     console.log("Connected to MySQL");
//   }
// });

// // CREATE POST
// router.post("/", (req, res) => {
//   const { title, description } = req.body;
//   const query = "INSERT INTO posts (title, content) VALUES (?, ?)";
//   const values = [title, description];
//   connection.query(query, values, (err, result) => {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

// // UPDATE POST
// router.put("/:id", (req, res) => {
//   const postId = req.params.id;
//   const { title, description } = req.body;
//   const query = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
//   const values = [title, description, postId];
//   connection.query(query, values, (err, result) => {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

// // DELETE POST
// router.delete("/:id", (req, res) => {
//   const postId = req.params.id;
//   const query = "DELETE FROM posts WHERE id = ?";
//   connection.query(query, [postId], (err, result) => {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

// // GET POST BY ID
// router.get("/:id", (req, res) => {
//   const postId = req.params.id;
//   const query = "SELECT * FROM posts WHERE id = ?";
//   connection.query(query, [postId], (err, result) => {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

// // GET ALL POSTS
// router.get("/", (req, res) => {
//   const query = "SELECT * FROM posts";
//   connection.query(query, (err, result) => {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

// export default router;