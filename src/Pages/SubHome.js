import React, { useState, useEffect } from "react";

const SubHome = ({ data, setData }) => {
  const [subData, setSubData] = useState("");

  useEffect(() => {
    // componentDidMount and componentDidUpdate
    console.log("SubHome component updated:", data);

    return () => {
      // componentWillUnmount
      console.log("SubHome component unmounted");
    };
  }, [data]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
      <button className="btn btn-outline-primary" onClick={() => setSubData("subhome change")}>Click</button>
      {subData}
    </div>
  );
};

export default SubHome;
