const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/leetcode-stats', async (req, res) => {
  try {
    const response = await axios.post('https://leetcode.com/graphql', {
      query: `
        {
          matchedUser(username: "goat8136") {
            username
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }
      `,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    res.status(500).json({ error: 'Failed to fetch LeetCode stats' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
