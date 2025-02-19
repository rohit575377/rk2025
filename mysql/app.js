import mysql from "mysql2/promise";

// Using inline values (not recommended)
// Using prepared statements (best practice)

//* 1: to connect to mysql database
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mysql_db"
});
console.log("MySQL Connected Successfully");

//* 2: we need to create a db
// await db.execute("create database mysql_db");
// console.log(await db.execute("show databases"));

// 3: then we need to create a table
// await db.execute(`
//   CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
//   );
// `);

//* 4: is to perform CRUD operation
//! insert
// await db.execute(`insert into users(username, email) values ('rohit', 'rk@example.com');`);
// await db.execute(`insert into users(username, email) values (?, ?)`, [
//   "neeraj",
//   "nj@example"
// ]);

// const values = [
//   ["lokesh", "lk@example.com"],
//   ["pradeep", "pr@example.com"],
// ];
// await db.query("insert into users(username, email) values ?", [values]);

// read
// const [rows] = await db.execute(`select * from users`);
// const [rows] = await db.execute(`select * from users where username="rohit"`);
// console.log(rows);

//! update
//? Syntax
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

// try {
//   const [rows] = await db.execute(
//     "update users set username='rohit kumar' where email='rk@example.com'"
//   );
//   console.log("All users: ", rows)
// } catch (error) {
//   console.log(error);
// }

// try {
//   const [rows] = await db.execute(
//     "update users set username = ? where email = ? ", [
//       "rohit kumar",
//       "rk@example.com"
//     ]
//   );
//   console.log("All users: ", rows)
// } catch (error) {
//   console.log(error);
// }

//! delete
//? syntax
// DELETE FROM table_name
// WHERE condition;

// try {
//   const [rows] = await db.execute(
//     "delete from users where where email='rk@example.com'"
//   );
//   console.log("All users: ", rows)
// } catch (error) {
//   console.log(error);
// }

// try {
//   const [rows] = await db.execute(
//     "delete from users where where email = ?", ["rk@example.com"]
//   );
//   console.log("All users: ", rows)
// } catch (error) {
//   console.log(error);
// }