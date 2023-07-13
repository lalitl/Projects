import React, { useEffect, useState } from "react";
// import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const saveToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000);

    return () => clearInterval(timeOut)
  }, [alert])
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hexColor}` }}
      onClick={saveToClipboard}
    >
      <p className="color-value">{weight}%</p>
      <p className="percent-value">#{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
