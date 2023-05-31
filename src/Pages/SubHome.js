import React, { useState } from "react";

const SubHome = () => {
  const [data, setdata] = useState('');

  return (
    <div style={{display:"flex", justifyContent: "center", alignItems: "center", padding: "10px"}}>
      <button className="btn btn-outline-primary" onClick={() => {
        setdata("subhome change")
      }}>Click</button>{data}
    </div>
  );
}

export default SubHome;
