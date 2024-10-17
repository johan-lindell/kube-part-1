FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy local code to the container image.
COPY . .

# Create the files directory
RUN mkdir -p /usr/src/app/files

# Run the web service on container startup.
CMD [ "node", "app.js" ]
