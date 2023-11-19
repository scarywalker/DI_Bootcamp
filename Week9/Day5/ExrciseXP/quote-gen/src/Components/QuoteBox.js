import React, { useState } from "react";
import quotesData from "./Quotes";

const QuoteBox = () => {
  const [quoteIndex, setQuoteIndex] = useState(getRandomIndex());
  const [colors, setColors] = useState({
    background: getRandomColor(),
    header: getRandomColor(),
    button: getRandomColor(),
  });

  function getRandomIndex() {
    return Math.floor(Math.random() * quotesData.length);
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const changeQuote = () => {
    let newIndex;
    do {
      newIndex = getRandomIndex();
    } while (newIndex === quoteIndex);

    setQuoteIndex(newIndex);
    setColors({
      background: getRandomColor(),
      header: getRandomColor(),
      button: getRandomColor(),
    });
  };

  const currentQuote = quotesData[quoteIndex];

  return (
    <div
      style={{
        backgroundColor: colors.background,
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: colors.header }}>{currentQuote.quote}</h1>
      <p style={{ color: colors.header, fontStyle: "italic" }}>
        - {currentQuote.author}
      </p>
      <button
        onClick={changeQuote}
        style={{
          backgroundColor: colors.button,
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Next Quote
      </button>
    </div>
  );
};

export default QuoteBox;
