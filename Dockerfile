# Use an official Node runtime as the base image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy root package.json and yarn.lock
COPY package.json yarn.lock ./

# Copy the trade app package.json
COPY apps/trade/package.json ./apps/trade/

# Copy the packages directory
COPY packages ./packages

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the entire trade app directory
COPY apps/trade ./apps/trade

# Build shared packages
RUN yarn workspaces run build

# Build the trade application
RUN yarn workspace trade build

# Create a production-ready image
FROM node:18-alpine AS production

WORKDIR /app

# Copy built assets and necessary files from the base stage
COPY --from=base /app/apps/trade/.next ./apps/trade/.next
COPY --from=base /app/apps/trade/public ./apps/trade/public
COPY --from=base /app/apps/trade/package.json ./apps/trade/
COPY --from=base /app/packages ./packages
COPY --from=base /app/package.json ./
COPY --from=base /app/yarn.lock ./

# Install production dependencies
RUN yarn install --frozen-lockfile --production

# Set environment variables
ENV NODE_ENV staging
# ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Expose the port the app runs on
EXPOSE 3002

# Start the application
CMD ["yarn", "workspace", "trade", "start"]