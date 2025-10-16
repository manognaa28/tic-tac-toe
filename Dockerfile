# Use a slightly older Node.js image (contains known CVEs)
FROM node:16-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (no audit fix – keep vulnerable deps for demo)
RUN npm install

# (Optional) Install a known vulnerable package for demonstration
# ⚠️ This is just for demo. Remove later.
RUN npm install lodash@4.17.19

# Copy the rest of the app
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to start app
CMD ["npm", "start"]
