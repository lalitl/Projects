import React from "react";

const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h2>Hello, {user?.name}</h2>
    </section>
  );
};

export default Dashboard;
