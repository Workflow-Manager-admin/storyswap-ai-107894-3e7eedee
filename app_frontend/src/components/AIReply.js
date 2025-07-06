import React from "react";

/**
 * Returns a short, playful, AI-character cheeky reply
 * based on user correctness (agrees/disagrees with their real/fake guess).
 * @param {'agree'|'disagree'} mode - Whether to agree or playfully disagree
 * @param {'real'|'fake'} userGuess - What the user guessed
 * @returns {string} Response
 *
 * PUBLIC_INTERFACE
 */
function getAIReply(mode, userGuess) {
  // Playful, random, short one-liner replies.
  // Example: "Hmm… you're good at this! That one was fake but totally believable."
  // Example: "Gotcha! That was actually 100% real – even the part with the talking dog."
  const agreeReplies = {
    real: [
      "Correctamundo! That one was as real as pizza cheese.",
      "Brainpower unlocked! You sniffed out the real deal.",
      "Oh yes! Reality can be stranger than fiction, huh?",
      "Nice detective work. This story? Totally real.",
      "Yep, real as my digital circuits!",
    ],
    fake: [
      "Cheeky guess—and correct! The AI takes a bow.",
      "Nailedit! This one’s all pixels and giggles.",
      "That’s right! I spun a yarn, and you saw right through it.",
      "Fake as a unicorn in flip-flops. You caught me.",
      "Bingo! All made up… or is it?",
    ]
  };
  const disagreeReplies = {
    real: [
      "Whoops, not quite! That was totally real—even the odd bits.",
      "Surprise! This wild tale actually happened (ask my database).",
      "Nope! The real world is weirder than fiction.",
      "Guess again! It's real, pinky promise.",
      "Fooled ya! 100% real—my digital hand to yours.",
    ],
    fake: [
      "Eh-eh! Fooled you—this one was all fiction, friend.",
      "Gotcha! Not real, just creative code mischief.",
      "Nope! This was pure AI mischief—made up and proud.",
      "Tricked you! Fake, fake, fake. My circuits giggle.",
      "Hehe, not real—silly but not true!",
    ]
  };

  // Pick response set depending on agree/disagree and what user guessed
  const pool = mode === "agree"
    ? agreeReplies[userGuess]
    : disagreeReplies[userGuess];

  // Random choice
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * AIReply React component that renders a random AI response
 * @param {{mode: 'agree'|'disagree', userGuess: 'real'|'fake'}} props
 * @returns {JSX.Element}
 * PUBLIC_INTERFACE
 */
function AIReply({ mode = "agree", userGuess = "real" }) {
  return (
    <div
      className="ai-reply"
      style={{
        marginTop: 22,
        fontWeight: 500,
        fontStyle: "italic",
        color: "var(--text-secondary)"
      }}
      data-testid="ai-reply"
    >
      {getAIReply(mode, userGuess)}
    </div>
  );
}

export { getAIReply };
export default AIReply;
