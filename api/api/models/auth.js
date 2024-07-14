
import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";
const app = express();


export const register = async (req, res) => {
  try {
    
    const userCountQuery = "SELECT COUNT(*) AS count FROM users";
    db.query(userCountQuery, async (countErr, countResults) => {
      if (countErr) {
        console.error("Error checking user count:", countErr);
        return res.status(500).json({ error: "Server error" });
      } else {
        const userCount = countResults[0].count;
        if (userCount >= 1) {
          return res.status(403).json({ error: "User registration is currently closed" });
        } else {
          // Get user details from request body
          const { username, email, password } = req.body;

          // Hash the password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

          // Insert the user into the database
          const insertQuery =
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
          db.query(
            insertQuery,
            [username, email, hashedPassword],
            (insertErr, insertResults) => {
              if (insertErr) {
                console.error("Error registering user:", insertErr);
                return res.status(500).json({ error: "Server error" });
              } else {
                return res.status(200).json({ message: "User registered successfully" });
              }
            }
          );
        }
      }
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Server error" });
  }
}

// Login route
export const login = (req, res) => {
  // Check user credentials
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong username or password!");
    }

    // Generate JWT token
    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    // Set JWT token in a secure HTTP-only cookie
    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "none", // Adjust as needed
        secure: true // Adjust as needed
      })
      .status(200)
      .json(other);
  });
};

// Logout route
export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
};