FROM node:16-alpine

# Create a directory for the app inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install


COPY . .

CMD ["node", "app.js"]
