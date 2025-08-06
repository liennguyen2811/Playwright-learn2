import express from 'express';
import { Server } from 'http';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// MCP Server routes
app.post('/v1/complete', async (req, res) => {
  try {
    // Handle completion request
    const { prompt } = req.body;
    // Add your completion logic here
    res.json({ 
      completion: "Sample response",
      status: "success" 
    });
  } catch (error) {
    res.status(500).json({ 
      error: "Internal server error",
      status: "error" 
    });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

const server: Server = app.listen(port, () => {
  console.log(`MCP Server running at http://localhost:${port}`);
});
