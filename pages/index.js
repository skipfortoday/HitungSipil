import React, { useEffect } from "react";
import Admin from "../src/layouts/admin";
import Increment from "../src/components/increment";

const Dashboard = () => {
  return (
    <>
      <Increment />
    </>
  );
};
Dashboard.layout = Admin;
export default Dashboard;
