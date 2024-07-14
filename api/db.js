import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",   
  database: "ethiocheckcom_agency"
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    // Handle the error appropriately
  } else {
    console.log('Connected to the database');
    // Start the server or perform any other operations  host: "localhost",
  // user: "ethiocheckcom_agency",
  // password: "rvXU~QB0steZ",   
  // database: "ethiocheckcom_agency"
  }
});
