import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ---------------- MongoDB Atlas Connection ----------------
const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("MongoDB Atlas connection error:", err);
  }
}
connectDB();

// ---------------- Entrepreneur Routes ----------------

// Wallet
app.get("/entrepreneur/wallet", (req, res) => {
  res.json({ balance: 0, transactions: [] });
});

// My proposals
app.get("/entrepreneur/my-proposals", (req, res) => {
  res.json([]);
});

// Submit proposal
app.post("/entrepreneur/proposals", (req, res) => {
  const { title, description } = req.body;
  res.json({ id: null, title, description, status: "Pending" });
});

// Dashboard
app.get("/entrepreneur/dashboard", (req, res) => {
  res.json({
    totalProposals: 0,
    activeProposals: 0,
    fundedProposals: 0
  });
});

// Profile
app.get("/entrepreneur/profile", (req, res) => {
  res.json({ name: "", email: "", joined: "", company: "" });
});

// Analytics
app.get("/entrepreneur/analytics", (req, res) => {
  res.json({
    fundingTrend: [],
    categories: []
  });
});

// Notifications
app.get("/entrepreneur/notifications", (req, res) => {
  res.json([]);
});

// Investor Routes 

// Wallet
app.get("/investor/wallet", (req, res) => {
  res.json({ balance: 0, transactions: [] });
});

// Investments
app.get("/investor/investments", (req, res) => {
  res.json([]);
});

// Browse proposals
app.get("/investor/browse-proposals", (req, res) => {
  res.json([]);
});

// Dashboard
app.get("/investor/dashboard", (req, res) => {
  res.json({
    totalInvested: 0,
    activeInvestments: 0,
    completedInvestments: 0
  });
});

// Profile
app.get("/investor/profile", (req, res) => {
  res.json({ name: "", email: "", joined: "", preferences: {} });
});

// Analytics
app.get("/investor/analytics", (req, res) => {
  res.json({
    roiTrend: [],
    sectors: []
  });
});

// Notifications
app.get("/investor/notifications", (req, res) => {
  res.json([]);
});

// ---------------- Health Check ----------------
app.get("/", (req, res) => {
  res.send("Server is running smoothly!");
});
// Connect wallet (Investor)
app.post("/investor/wallet/connect", (req, res) => {
  const { type, address } = req.body;
  // Later: save to MongoDB Atlas
  res.json({ success: true, type, address, balance: 0, transactions: [] });
});

// Connect wallet (Entrepreneur)
app.post("/entrepreneur/wallet/connect", (req, res) => {
  const { type, address } = req.body;
  // Later: save to MongoDB Atlas
  res.json({ success: true, type, address, balance: 0, transactions: [] });
});


//  Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

});
