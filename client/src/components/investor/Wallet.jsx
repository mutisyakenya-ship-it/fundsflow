import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function InvestorWallet() {
  const [wallet, setWallet] = useState(null);
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Metamask");

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const res = await api.get("/investor/wallet");
        setWallet(res.data);
      } catch (err) {
        console.error("Failed to load wallet", err);
      }
    };
    fetchWallet();
  }, []);

  const connectWallet = async () => {
    try {
      const res = await api.post("/investor/wallet/connect", { type, address });
      setWallet(res.data);
    } catch (err) {
      console.error("Failed to connect wallet", err);
    }
  };

  return (
    <div className="wallet-page">
      <div className="wallet-container">
        <h1>Wallet</h1>
        <p className="text-muted">Manage your funds</p>

        {/* Balance */}
        <div className="wallet-card">
          <p className="text-gray">Available Balance</p>
          <h2>KES {wallet ? wallet.balance || 0 : 0}</h2>
        </div>

        {/* Connect Wallet */}
        <div className="wallet-card">
          <h2>Connect Wallet</h2>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="wallet-select"
          >
            <option value="Metamask">Metamask</option>
            <option value="WalletConnect">WalletConnect</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Wallet Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="wallet-input"
          />
          <button onClick={connectWallet} className="wallet-button">
            Connect
          </button>
        </div>

        {/* Deposit / Withdraw */}
        <div className="wallet-actions">
          <button className="wallet-button">Deposit</button>
          <button className="wallet-button gold">Withdraw</button>
        </div>

        {/* Transactions */}
        <div className="wallet-card">
          <h2>Recent Transactions</h2>
          {wallet && wallet.transactions && wallet.transactions.length > 0 ? (
            <div className="wallet-transactions">
              {wallet.transactions.map((t, i) => (
                <p key={i}>
                  {t.type} {t.amount} — {t.date}
                </p>
              ))}
            </div>
          ) : (
            <p className="wallet-empty">No transactions yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
