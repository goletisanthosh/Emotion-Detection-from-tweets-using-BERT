const ExplainableHeatmap = ({ text, importance }) => {
  if (!text) return null;

  const words = text.split(" ");

  const getColor = (score) => {
    if (score > 0.3) return "rgba(255,0,0,0.55)";
    if (score > 0.2) return "rgba(255,140,0,0.55)";
    if (score > 0.1) return "rgba(255,215,0,0.45)";
    return "transparent";
  };

  return (
    <div className="heatmap-container">
      {words.map((word, index) => {
        const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");

        const score = importance?.[cleanWord] || 0;

        return (
          <span
            key={index}
            className="heatmap-word"
            style={{
              backgroundColor: getColor(score),
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default ExplainableHeatmap;
