const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Define the endpoint
app.get('/api', (req, res) => {
  // Parse query parameters
  const slackName = req.query.slackName;
  const track = req.query.track;

  // Get the current UTC time
  const now = new Date();
  const utcTime = now.toISOString().slice(0, 19) + 'Z';

  // Determine the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[now.getUTCDay()];

  // Construct the JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: 'https://github.com/Ezeah/api-endpoint/blob/main/app.js',
    github_repo_url: 'https://github.com/Ezeah/api-endpoint/tree/main',
    status_code: 200
  };

  // Send the JSON response
  res.status(200).json(jsonResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
