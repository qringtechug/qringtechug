// Q-Ring Backend Example
// Event ingestion endpoint
// Node.js + Express

const express = require('express');
const app = express();
app.use(express.json());

// In-memory store for demo
let events = [];

/**
 * POST /devices/:id/events
 * Body example:
 * {
 *   "emotion_signal": { "joy": 0.72, "stress": 0.18 },
 *   "biometrics": { "hr": 82, "gsr": 0.44, "temp": 36.5 },
 *   "energy_state": "stable",
 *   "timestamp": 1738429842
 * }
 */
app.post('/devices/:id/events', (req, res) => {
  const deviceId = req.params.id;
  const payload = req.body;

  // Basic validation
  if (!payload.emotion_signal || !payload.biometrics) {
    return res.status(400).json({
      error: "Invalid payload: emotion_signal and biometrics are required"
    });
  }

  const event = {
    deviceId,
    ...payload,
    received_at: Date.now()
  };

  // Save to memory
  events.push(event);

  return res.status(201).json({
    message: "Event accepted",
    event
  });
});

// Start server
app.listen(4000, () => {
  console.log("Q-Ring demo backend running on http://localhost:4000");
});
