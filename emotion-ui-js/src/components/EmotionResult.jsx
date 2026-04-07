import "../styles/result.css";
// import { motion } from "framer-motion";
import HighlightedText from "./HighlightedText";

const emotionEmojis = {
  sadness: "😢",
  joy: "😊",
  anger: "😡",
  fear: "😨",
  surprise: "😲",
  disgust: "🤢",
  neutral: "😐",
};

const EmotionResult = ({ emotionData }) => {
  const { emotion, confidence } = emotionData;

  const emoji = emotionEmojis[emotion] || "🙂";

  return (
    <motion.div
      className="result-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="result-title">Detected Emotion</h2>

      <div
        style={{ textAlign: "center", fontSize: "40px", marginBottom: "10px" }}
      >
        {emoji}
      </div>

      <div className="result-row">
        <span style={{ textTransform: "capitalize" }}>{emotion}</span>
        <span>{confidence}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${confidence}%` }}
        ></div>
      </div>
      <HighlightedText
        text={emotionData.text || ""}
        importance={emotionData.word_importance || {}}
      />
    </motion.div>
  );
};

export default EmotionResult;
