import "../styles/input.css";

const EmotionInput = ({ text, setText, analyzeEmotion }) => {
  return (
    <div className="input-card">
      <textarea
        className="text-box"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type how you're feeling..."
      />

      <button className="analyze-btn" onClick={analyzeEmotion}>
        Analyze Emotion
      </button>
    </div>
  );
};

export default EmotionInput;
