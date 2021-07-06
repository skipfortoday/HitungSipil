import React, { useEffect } from "react";
import Admin from "../src/layouts/admin";
import CardStatus from "../src/components/cardStatus";

const Dashboard = () => {
  return (
    <>
      <CardStatus />
    </>
  );
};
Dashboard.layout = Admin;
export default Dashboard;
