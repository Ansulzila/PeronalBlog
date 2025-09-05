import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

// Middleware
app.use(cors());          // allow frontend to connect
app.use(express.json());  // parse JSON body

// Signup route
app.post("/signup", (req, res) => {
  console.log("📩 Incoming body:", req.body);

  const { username, useremail, userpassword, confirmpassword } = req.body;

  if (!username || !useremail || !userpassword || !confirmpassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (userpassword !== confirmpassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  res.status(201).json({
    message: "User registered successfully!",
    data: { username, useremail },
  });
});

app.post("/login", (req, res) => {
  const { useremail, userpassword } = req.body;
  if (!useremail || !userpassword) {
    return res.status(400).json({ error: "All fields are required" });
  }
  console.log("📩 Incoming body:", req.body)
  res.status(201).json({
    
    message: "User logged in successfully!",
    data: { useremail , userpassword},
  });
});


app.listen(port, () => console.log(`🚀 Server started at port ${port}`));
