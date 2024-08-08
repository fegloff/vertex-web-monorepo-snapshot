# Use an official Node runtime as the base image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache libc6-compat

# Copy package.json files and other necessary files
# The .dockerignore file will prevent copying of unnecessary files
COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile

# Build the trade application
RUN yarn workspace trade build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Set environment variables
ENV NODE_ENV staging
ENV NEXT_TELEMETRY_DISABLED 1

# Copy necessary files from the base stage
COPY --from=base /app/package.json /app/yarn.lock ./
COPY --from=base /app/apps/trade/package.json ./apps/trade/
COPY --from=base /app/apps/trade/.next ./apps/trade/.next
COPY --from=base /app/apps/trade/public ./apps/trade/public
COPY --from=base /app/packages ./packages

# Install production dependencies
RUN yarn install --frozen-lockfile --production

# Expose the port the app runs on
EXPOSE 3002

# Start the application
CMD ["yarn", "workspace", "trade", "start"]