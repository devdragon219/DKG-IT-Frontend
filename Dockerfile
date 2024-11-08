# Use a Node.js base image
FROM node:19-bullseye

# Set the working directory
WORKDIR /app/frontend

RUN apt-get update && apt-get install -y \
    xdg-utils

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . /app/frontend/

# Expose the port the app runs on
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]