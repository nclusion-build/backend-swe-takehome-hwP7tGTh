import request from 'supertest'
import express from 'express'

// Create a simple test app
const app = express()
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'L1.5 Backend API'
  })
})

describe('Health Check Endpoint', () => {
  it('should return healthy status', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200)
    
    expect(response.body.status).toBe('healthy')
    expect(response.body.service).toBe('L1.5 Backend API')
    expect(response.body.timestamp).toBeDefined()
  })

  it('should return JSON content type', async () => {
    await request(app)
      .get('/health')
      .expect('Content-Type', /json/)
  })
})

// TODO: Add more tests for your endpoints [test-coverage]
// Test the game creation endpoint
// Test the game status endpoint  
// Test the move endpoint
// Test error handling for invalid inputs
