import express from "express";
const app = express();
app.get("/Signin", (req, res) => {
  let name = req.body;
  let email = req.body;
  let password = req.body;
  console.log(name, email, password);
  console.log("user visited");
});
app.listen(5173, () => {
  console.log("server listning at port 5173");
});
