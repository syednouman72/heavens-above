# Use the official Node.js image as base
FROM node:21


# Set the working directory inside the container
WORKDIR /app


# Copy package.json and package-lock.json to the working directory
COPY . .


# Install dependencies
RUN npm install


# Expose the port your app runs on
EXPOSE 3000


# Command to run the application
CMD ["npm", "start"]