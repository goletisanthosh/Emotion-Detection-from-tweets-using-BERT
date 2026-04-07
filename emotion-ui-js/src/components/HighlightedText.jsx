const HighlightedText = ({ text, importance }) => {
  const words = text.split(" ");

  return (
    <div style={{ marginTop: "25px", lineHeight: "2", color: "white" }}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,!?]/g, "").toLowerCase();
        const score = importance[cleanWord] || 0;

        let color = "transparent";

        if (score > 0.3) color = "rgba(255,0,0,0.5)";
        else if (score > 0.15) color = "rgba(255,165,0,0.5)";
        else if (score > 0.05) color = "rgba(255,255,0,0.3)";

        return (
          <span
            key={index}
            style={{
              backgroundColor: color,
              padding: "2px 4px",
              borderRadius: "4px",
              marginRight: "4px",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default HighlightedText;
