import { useState } from "react";
import EmotionInput from "../components/EmotionInput";
import EmotionDashboard from "../components/EmotionDashboard";
import "../styles/layout.css";

const Home = () => {
  const [text, setText] = useState("");
  const [emotionData, setEmotionData] = useState(null);

  const analyzeEmotion = async () => {
    if (!text.trim()) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      const result = {
        emotion: data.emotion,
        confidence: data.confidence,
        text: text,
        word_importance: data.word_importance,
        probabilities: data.probabilities,
      };

      setEmotionData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app-layout">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h1 className="app-title">
          Emotion <span>Analyzer</span>
        </h1>

        <p className="subtitle">Enter text to detect emotional content</p>

        <EmotionInput
          text={text}
          setText={setText}
          analyzeEmotion={analyzeEmotion}
        />
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        {!emotionData ? (
          <div className="placeholder">
            <div className="brain">🧠</div>

            <h2>Ready to Analyze</h2>

            <p>
              Enter some text on the left and click "Analyze" to detect emotions
            </p>
          </div>
        ) : (
          <EmotionDashboard emotionData={emotionData} />
        )}
      </div>
    </div>
  );
};

export default Home;
