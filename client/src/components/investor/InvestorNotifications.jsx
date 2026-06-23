import React, { useEffect, useState } from "react";
import api from "../../services/api";

const InvestorNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await api.get("/investor/notifications");
        setNotifications(res.data);
      } catch (err) {
        setError("Failed to load notifications.");
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  if (loading) return <p className="text-gray">Loading notifications...</p>;
  if (error) return <p className="text-gray">{error}</p>;

  return (
    <div className="panel-page">
      <div className="profile-card">
        <h2 className="profile-header-title">Investor Notifications</h2>

        {notifications.length === 0 ? (
          <p className="text-gray text-center">No notifications yet.</p>
        ) : (
          <ul className="text-gray">
            {notifications.map((note, index) => (
              <li key={index}>{note.message}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InvestorNotifications;
