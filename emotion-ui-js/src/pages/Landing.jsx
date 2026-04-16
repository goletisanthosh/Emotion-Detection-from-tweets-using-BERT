import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">EmotionAI</div>

        <div className="nav-links">
          <span onClick={() => scrollToSection("home")}>Home</span>
          <span onClick={() => scrollToSection("features")}>Features</span>
          <span onClick={() => scrollToSection("how")}>How It Works</span>
        </div>

        <button className="primary-btn" onClick={() => navigate("/analyze")}>
          try free
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="badge">⚡ Powered by Deep Learning & NLP</div>

          <h1>
            Understand Human <span>Emotions</span> Using Artificial Intelligence
          </h1>

          <p>
            Real-time emotion analysis powered by NLP and Deep Learning. Detect
            sentiment, mood, and emotional tone with industry-leading accuracy.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/analyze")}
            >
              <b> Analyze Now → </b>
            </button>

            <button className="secondary-btn">Learn More</button>
          </div>

          <div className="stats">
            <div>
              <b>92.5%</b>
              <span>Accuracy</span>
            </div>
            <div>
              <b>50ms</b>
              <span>Response</span>
            </div>
            <div>
              <b>27+</b>
              <span>Emotions</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="hero-right">
          <div className="dashboard-card">
            <h3>Emotion Analysis</h3>

            <div className="emotion-box">
              😊 Joy Detected
              <span>Confidence: 94.2%</span>
            </div>

            <div className="mini-stats">
              <div>
                Predictions
                <br />
                <b>1,284</b>
              </div>
              <div>
                Accuracy
                <br />
                <b>92.5%</b>
              </div>
            </div>

            <div className="bars">
              <div className="bar">
                <span>Joy</span>
                <div className="fill joy"></div>
              </div>
              <div className="bar">
                <span>Sadness</span>
                <div className="fill sad"></div>
              </div>
              <div className="bar">
                <span>Anger</span>
                <div className="fill anger"></div>
              </div>
              <div className="bar">
                <span>Fear</span>
                <div className="fill fear"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>
          Powerful <span>Features</span>
        </h2>
        <p>Everything you need to understand human emotions at scale</p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>Real-Time Detection</h3>
            <p>Analyze emotions instantly with sub-50ms response times.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🧠</div>
            <h3>BERT-Based Deep Learning</h3>
            <p>Powered by transformer models trained on emotion datasets.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🎯</div>
            <h3>High Accuracy</h3>
            <p>Achieve 92%+ accuracy across multiple emotion classes.</p>
          </div>

          <div className="feature-card">
            <div className="icon">💻</div>
            <h3>User-Friendly UI</h3>
            <p>Clean and intuitive interface for smooth experience.</p>
          </div>

          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Data Visualization</h3>
            <p>Interactive charts to explore emotional insights.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🔒</div>
            <h3>Privacy First</h3>
            <p>Your data is processed securely and never stored.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how">
        <h2>
          How It <span>Works</span>
        </h2>
        <p>From input to insight in seconds</p>

        <div className="steps">
          <div className="step-card">
            <div className="step-icon">📥</div>
            <span className="step-number">01</span>
            <h3>Input Text</h3>
            <p>Paste or type any text to analyze emotional content.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">🧠</div>
            <span className="step-number">02</span>
            <h3>AI Processing</h3>
            <p>BERT model processes text using transformer layers.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">📊</div>
            <span className="step-number">03</span>
            <h3>Get Results</h3>
            <p>View emotions with confidence scores and charts.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">✅</div>
            <span className="step-number">04</span>
            <h3>Take Action</h3>
            <p>Use insights to improve communication and decisions.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <div className="footer-logo">EmotionAI</div>
        </div>

        <div className="footer-center">
          © 2026 EmotionAI. Built for Final Year Project Presentation.
        </div>

        <div className="footer-right">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
