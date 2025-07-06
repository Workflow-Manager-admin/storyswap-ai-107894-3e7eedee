import React, { useState } from 'react';
import AIReply, { getAIReply } from '../components/AIReply';

// PUBLIC_INTERFACE
function StoryExchange() {
  /**
   * Exchanged stories view: shows received stories powered by AI narration.
   * Adds a mood selection UI (radio buttons) that must be picked before displaying the AI-generated story.
   */
  const [mood, setMood] = useState('');
  const [storyAvailable, setStoryAvailable] = useState(false);

  // Simulate generated story content. In future, this would come from API call using mood.
  const generatedStory = {
    Funny: "Once upon a dime, a chicken tried to cross a quantum road, but got stuck in a long calculation.",
    Dramatic: "Thunder crashed as the detective realized the truth was far more dangerous than the lie.",
    Chill: "Under the lazy sun, Leo napped while the world moved gently by in a soft breeze.",
    Fantasy: "In the hidden glen, dragons soared with elves weaving magic into the morning mist.",
  };

  const handleMoodSelect = (e) => {
    setMood(e.target.value);
    setStoryAvailable(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood) {
      // In real app, call story-generation API here.
      setStoryAvailable(true);
    }
  };

  return (
    <main className="page page-exchange">
      <h1>Story Exchange</h1>
      {!mood || !storyAvailable ? (
        <form onSubmit={handleSubmit} className="mood-form" style={{
            margin: "2rem auto",
            padding: "1.5rem",
            background: "var(--bg-secondary)",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            maxWidth: 360
        }}>
          <p style={{ fontWeight: 500, marginBottom: 12 }}>
            Pick the mood for your story exchange:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "start" }}>
            {["Funny", "Dramatic", "Chill", "Fantasy"].map(option => (
              <label key={option} style={{ fontWeight: 400, cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="mood"
                  value={option}
                  checked={mood === option}
                  onChange={handleMoodSelect}
                  style={{ marginRight: 8 }}
                />
                {option}
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="btn"
            style={{
              marginTop: 20,
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              background: "var(--button-bg)",
              color: "var(--button-text)",
              fontWeight: 600,
              fontSize: 16,
              cursor: mood ? "pointer" : "not-allowed",
              opacity: mood ? 1 : 0.6
            }}
            disabled={!mood}
          >
            Generate My Story
          </button>
        </form>
      ) : (
        <section className="ai-story-reveal" style={{
          margin: "2.5rem auto",
          padding: "1.75rem",
          maxWidth: 500,
          background: "var(--bg-secondary)",
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)"
        }}>
          <h2 style={{ marginBottom: 10 }}>
            Your {mood} Story 🎭
          </h2>
          <p style={{
            fontSize: 18,
            lineHeight: 1.6,
            margin: 0,
            color: "var(--text-primary)"
          }}>
            {generatedStory[mood] || "A mysterious mood was chosen... but the AI is pondering."}
          </p>
          {/* --- Cheeky Real/Fake Guess Demo UI --- */}
          <div style={{ margin: "2rem 0 1.5rem 0", textAlign: "left" }}>
            <hr style={{ margin: "20px 0", border: "none", borderTop: "1px solid var(--border-color)" }} />
            <span style={{ fontSize: 16 }}>
              <strong>Mini-Game:</strong> Was that story <u>real</u> or <u>fake</u>? (Pick a guess!)
            </span>
            <div style={{ marginTop: 10, display: "flex", gap: 14 }}>
              {/* For demo, manage local state to pick True/False */}
              <GuessSection />
            </div>
            <hr style={{ margin: "20px 0 0 0", border: "none", borderTop: "1px solid var(--border-color)" }} />
          </div>
          <button
            className="btn"
            style={{
              marginTop: 12,
              padding: "10px 22px",
              borderRadius: "6px",
              border: "none",
              background: "var(--button-bg)",
              color: "var(--button-text)",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer"
            }}
            onClick={() => { setMood(''); setStoryAvailable(false); }}
          >
            Pick a Different Mood
          </button>
        </section>
      )}
    </main>
  );
}

/**
 * Demo subcomponent for "real/fake" guessing game with playful AI reply.
 */
function GuessSection() {
  const [guess, setGuess] = useState(null); // 'real' or 'fake'
  const [answer] = useState(Math.random() > 0.5 ? "real" : "fake"); // Simulate answer each reveal for fun
  const [responded, setResponded] = useState(false);

  // For pedagogic demo: if guess === answer, agree; else, disagree
  let mode = guess === answer ? "agree" : "disagree";

  return (
    <div>
      {!responded ? (
        <>
          <button
            className="btn"
            style={{
              background: guess === "real" ? "var(--color-primary,#4F46E5)" : undefined,
              color: guess === "real" ? "#fff" : undefined,
              marginRight: 10
            }}
            onClick={() => { setGuess("real"); setResponded(true); }}
          >Real</button>
          <button
            className="btn"
            style={{
              background: guess === "fake" ? "var(--color-accent,#A78BFA)" : undefined,
              color: guess === "fake" ? "#fff" : undefined
            }}
            onClick={() => { setGuess("fake"); setResponded(true); }}
          >Fake</button>
        </>
      ) : (
        <>
          {guess && (
            <AIReply mode={mode} userGuess={guess} />
          )}
          <div style={{ marginTop: 12, fontSize: 13, color: "var(--text-secondary)" }}>
            <span>
              (Psst... {`Answer: ${answer.toUpperCase()}`})
              <button
                style={{
                  marginLeft: 16,
                  background: "none",
                  color: "var(--color-secondary,#22D3EE)",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
                onClick={() => { setGuess(null); setResponded(false); }}
              >Play again</button>
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default StoryExchange;
