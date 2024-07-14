  import express from "express";
  import {db} from "./db.js"
  import bcrypt from "bcryptjs"
  import authRoute from "./routes/auth.js";
  import userRoute from "./routes/Users.js";
  import postRoute from "./routes/posts.js";
  import cookieParser from "cookie-parser";
  import multer from "multer";
  import cors from "cors";
  import path from "path";
  import { fileURLToPath } from 'url';
  import { dirname } from 'path';
  import  sgMail from '@sendgrid/mail';
  import dotenv from 'dotenv';


  dotenv.config();
  // Get the directory name of the current module
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const app = express();
  
  app.use(cors({
    origin: [
      "https://ewuqet.com",
    ]
  }));
  app.use(express.json());
  app.use(cookieParser());


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadDir = path.join(__dirname, "../uploads");
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+"_"+file.originalname)
    },
  });

  const upload = multer({ storage });

  app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;

  if (!file) {
    // No file was uploaded
    res.status(400).json({ error: "No file uploaded" });
    return;
  }

  // File was uploaded successfully
  res.status(200).json({ filename: file.filename });
  console.log(file.filename);
});
  app.get("/api/download/:filename", (req, res) => {
    const {filename}  = req.params;
    const filePath = path.join(__dirname, "../uploads", filename);

    
    res.download(filePath, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
        res.status(500).send("Error downloading file");
      }
    });
  });
   // Define the /api/change-password endpoint
   app.post("/api/change-password", async (req, res) => {
    const { username, currentPassword, newPassword } = req.body;
  
    try {
      // Retrieve the user from the database
      const query = "SELECT * FROM users WHERE username = ?";
      db.query(query, [username], async (err, results, fields) => {
        if (err) {
          console.error("Error retrieving user:", err);
          res.status(500).json({ error: "Server error" });
        } else {
          if (results.length === 0) {
            // User not found
            res.status(404).json({ error: "User not found" });
          } else {
            const user = results[0];
  
            // Compare the current password with the stored hashed password
            const passwordMatch = await bcrypt.compare(currentPassword, user.password);
  
            if (passwordMatch) {
              // Hash the new password
              const salt = await bcrypt.genSalt(10);
              const hashedNewPassword = await bcrypt.hash(newPassword, salt);
  
              // Update the user's password in the database
              const updateQuery = "UPDATE users SET password = ? WHERE id = ?";
              db.query(updateQuery, [hashedNewPassword, user.id], (updateErr, updateResults, updateFields) => {
                if (updateErr) {
                  console.error("Error updating password:", updateErr);
                  res.status(500).json({ error: "Server error" });
                } else {
                  res.status(200).json({ message: "Password changed successfully" });
                }
              });
            } else {
              // Current password does not match
              res.status(401).json({ error: "Invalid current password" });
            }
          }
        }
      });
    } catch (error) {
      console.error("Error changing password:", error);
      res.status(500).json({ error: "Server error" });
    }
  });



// Set SendGrid API key
const sendgridApiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridApiKey);// Replace with your SendGrid API key

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  // Save the email address in the database
  const insertQuery = 'INSERT INTO subscribers (email) VALUES (?)';
  db.query(insertQuery, [email], (err, results) => {
    if (err) {
      console.error('Error saving email:', err);
      res.status(500).json({ message: 'An error occurred' });
    } else {
      // Send a confirmation email to the subscriber
      const msg = {
        to: email,
        from: 'biniamzerihunell@gmail.com',
        subject: 'Subscription Confirmation',
        text: `Thank you for subscribing. Keep in touch እዉቀት ቤት!
        EWUQET BET TEAM,`,
      };

      sgMail
        .send(msg)
        .then(() => {
          res.status(200).json({ message: 'Subscription successful' });
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          res.status(500).json({ message: 'An error occurred' });
        });
    }
  });
});
//Get email
app.get('/api/subscribers', (req, res) => {
  const selectQuery = 'SELECT email FROM subscribers';

  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error fetching subscribers:', err);
      res.status(500).json({ message: 'An error occurred' });
    } else {
      const subscribers = results.map((row) => row.email);
      res.status(200).json(subscribers);
    }
  });
});


  app.use("/api/auth", authRoute);
  app.use("/api/user", userRoute);
  app.use("/api/post", postRoute);

  app.get("/install", (req, res) => {
    let msg = 'TABLE CREATED SUCCESSFULLY';

    let userSchema = `
        CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;
  let postSchema = `
      CREATE TABLE IF NOT EXISTS posts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(20000)  NULL,
        linkone VARCHAR(255)  NULL,
        linktwo VARCHAR(255)  NULL,
        linkthree VARCHAR(255)  NULL,
        linkfour VARCHAR(255)  NULL,
        linkfive VARCHAR(255)  NULL,
        uploadedFile VARCHAR(255)  NULL,
        uid INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (uid) REFERENCES users(id)
      )`;
      let emailSubscribtionSchema = `
      CREATE TABLE IF NOT EXISTS subscribers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;
      db.query(userSchema, (err, results, fields) => {
      if (err) throw err;
    });

    db.query(postSchema, (err, results, fields) => {
      if (err) throw err;
    });
    db.query(emailSubscribtionSchema, (err, results, fields) => {
      if (err) throw err;
    });
    res.send(msg);
    
  });
 app.get('/', (req, res) => {
  res.send('Hello, World!');
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});