import React, { useEffect, useState } from "react";

function Cleaneup() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Thingy />}
    </div>
  );
}
function Thingy() {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => setSize(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <h1>Window</h1>
      <h2>Size: {size}</h2>
    </>
  );
}

export default Cleaneup;
