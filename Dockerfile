# Multi-stage build for production Plant Farming App
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package descriptors
COPY package*.json ./

# Install all dependencies (including devDependencies if needed for build)
RUN npm ci

# Copy application files
COPY . .

# Runner stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Create non-root node user directory
USER node

# Copy files from builder with correct permissions
COPY --chown=node:node --from=builder /app/package*.json ./
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/server ./server
COPY --chown=node:node --from=builder /app/public ./public

EXPOSE 8080

CMD ["node", "server/server.js"]
