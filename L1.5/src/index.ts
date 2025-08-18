import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'L1.5 Backend API'
  })
})

// TODO: Add basic game creation endpoint [basic-game-creation]
// This should accept a POST request to /games with a player name
// and return a new game ID

// TODO: Add basic game status endpoint [basic-game-status]
// This should accept a GET request to /games/:id and return the game state

// TODO: Add basic move endpoint [basic-move]
// This should accept a POST request to /games/:id/move with position data

// TODO: Add input validation [input-validation]
// Validate that player names are not empty and moves are within valid range

// TODO: Add error handling [error-handling]
// Return proper HTTP status codes and error messages for invalid requests

// TODO: Add Docker health check support [docker-health-check]
// Ensure the health endpoint works properly in Docker containers

// Basic error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' })
})

app.listen(PORT, () => {
  console.log(`🚀 L1.5 Backend API running on port ${PORT}`)
  console.log(`📊 Health check available at http://localhost:${PORT}/health`)
  console.log(`🐳 Docker container ready for deployment`)
})
