import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/dashboard.css";
import ExplainableHeatmap from "./ExplainableHeatmap";

const emotionEmojis = {
  joy: "😊",
  sadness: "😢",
  anger: "😡",
  fear: "😨",
  surprise: "😲",
  disgust: "🤢",
  neutral: "😐",
};

const EmotionDashboard = ({ emotionData }) => {
  const { emotion, confidence, probabilities } = emotionData;

  const emoji = emotionEmojis[emotion] || "🙂";

  const chartData = Object.entries(probabilities || {}).map(([key, value]) => ({
    emotion: key,
    score: Math.round(value * 100),
  }));

  return (
    <div className="dashboard-container">
      {/* Emotion Card */}
      <div className="emotion-card">
        <div className="emoji">{emoji}</div>
        <h2>{emotion}</h2>
        <p>Predicted Emotion</p>
      </div>

      {/* Confidence Score */}
      <div className="confidence-card">
        <div className="confidence-header">
          <span>Confidence Score</span>
          <span>{Math.round(confidence * 100)}%</span>
        </div>

        <div className="confidence-bar">
          <div
            className="confidence-fill"
            style={{ width: `${confidence * 100}%` }}
          />
        </div>
      </div>

      {/* Emotion Probability Chart */}
      <div className="chart-card">
        <h3>Emotion Probabilities</h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <XAxis dataKey="emotion" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#7c3aed" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Explainable AI */}
      <div className="explain-card">
        <h3>Why this emotion?</h3>

        <p>
          The model detected strong indicators of <b>{emotion} </b>
          based on contextual word importance in the sentence.
        </p>

        <ExplainableHeatmap
          text={emotionData.text}
          importance={emotionData.word_importance}
        />
      </div>
    </div>
  );
};

export default EmotionDashboard;
