# Getting Started with App Store Reviews Viewer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and designed to fetch and display reviews from the Apple App Store for specific applications. It features a backend that interacts with the App Store's RSS feed and a React frontend that presents these reviews in a user-friendly paginated format.

## Features

- Fetching Reviews: Backend server fetches reviews from the App Store's RSS feed.
- Pagination: Reviews are displayed in a paginated format using Material-UI components.
- Responsive Design: Adapts to screen size for a good user experience on both desktop and mobile devices.

## Project Setup

### Prerequisites

- Node.js and npm (Download from [nodejs.org](https://nodejs.org/))

### Installation

Clone the repository and install dependencies:

```bash
git clone
cd ios-reviews-app
npm install
```

### Running the Application

Start the Backend Server
Run the following command to start the backend server which fetches and serves the app reviews:

```
cd ios-reviews-app/backend
nodemon server.js
```

Start the Frontend Application

```
cd ios-reviews-app/frontend
npm start
```

Opens the application in development mode at http://localhost:3001.
