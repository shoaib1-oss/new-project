# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the application's port
EXPOSE 3000

# Define the command to run the application
CMD ["node", "dist/main.js"]
