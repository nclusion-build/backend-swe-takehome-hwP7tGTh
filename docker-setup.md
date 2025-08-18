# Docker Setup Guide for L1.5

This guide will help you get your application running in Docker containers. Docker is a tool that packages your application and its dependencies into containers, making it easy to run consistently across different environments.

## Prerequisites

- Docker Desktop installed and running
- Basic understanding of command line operations

## Quick Start

### 1. Build the Docker Image

```bash
# Build the application container
docker build -t ts-app .
```

### 2. Run with Docker Compose

```bash
# Start all services (app + health check)
docker-compose up --build

# Or run in background
docker-compose up -d --build
```

### 3. Verify It's Working

```bash
# Check if the container is running
docker ps

# Test the health endpoint
curl http://localhost:3000/health

# View logs
docker-compose logs -f app
```

## Understanding the Setup

### Dockerfile
- **Multi-stage build**: Uses a builder stage to compile/build, then a runtime stage for the final image
- **Health checks**: Automatically monitors if your app is responding
- **Port exposure**: Makes your app accessible from outside the container

### Docker Compose
- **Service definition**: Defines how your app should run
- **Port mapping**: Maps container ports to your host machine
- **Volume mounting**: Keeps your source code in sync during development
- **Health check service**: Ensures your app is ready before marking it healthy

### Environment Variables
- **PORT**: The port your application listens on
- **NODE_ENV**: Set to 'development' for debugging

## Common Commands

```bash
# Stop all services
docker-compose down

# Rebuild and restart
docker-compose up --build

# View running containers
docker ps

# Execute commands in running container
docker-compose exec app sh

# View logs for specific service
docker-compose logs app

# Clean up unused images
docker system prune
```

## Troubleshooting

### Container won't start?
- Check if the port is already in use: `lsof -i :3000`
- Verify Docker is running: `docker info`
- Check logs: `docker-compose logs app`

### Health check failing?
- Ensure your `/health` endpoint is implemented
- Check if the app is listening on the correct port
- Verify the health check URL in the Dockerfile

### Build errors?
- Clear Docker cache: `docker system prune -a`
- Check if all required files are present
- Verify the Dockerfile syntax

## Next Steps

Once your container is running:
1. Test all your API endpoints
2. Verify the health check is working
3. Try stopping and restarting the container
4. Test with different environment variables

## Learning Resources

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Compose Overview](https://docs.docker.com/compose/)
- [Best Practices for Writing Dockerfiles](https://docs.docker.com/develop/dev-best-practices/)
