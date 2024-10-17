# Use the official Node.js image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port, not strictly required for Kubernetes
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
