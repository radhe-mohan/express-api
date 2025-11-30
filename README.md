# AWS Test Backend

Minimal Node.js + Express backend skeleton for early-stage AWS integration testing.

## Overview
This project is a lightweight Express server (ES modules) intended as a starting point for integrating AWS services. It intentionally keeps a minimal surface area so AWS work and feature development can be added iteratively.

- Server runs on port 4000
- Uses ES modules (`"type": "module"`)
- Development via Nodemon
- Configuration via dotenv

## Key Technologies
- Node.js
- Express ^5.x
- nodemon
- dotenv

## Project Structure
```
backend/
├── index.js              # Entry: start server on port 4000
├── package.json
└── APIs/
    ├── controller.js/    # Business logic handlers
    └── route.js/         # Express route modules
```

Controllers and routes follow an MVC-style separation:
- Controllers export request handlers (e.g., `export const userRegister = (req, res) => { ... }`)
- Routes use express.Router() and map endpoints to controllers

## Getting Started

1. Install dependencies
   npm install

2. Create a .env file with any required environment variables.

3. Start development server
   npm start

The server uses nodemon for automatic restarts while developing.

## Adding a New API Endpoint
1. Add a controller: `APIs/controller.js/yourFeature.js`
2. Add matching routes: `APIs/route.js/yourFeature.js`
3. Register the router in `index.js`:
   app.use('/api/yourFeature', yourFeatureRouter)

## Debugging Tips
- Ensure port 4000 is free
- Verify `.env` exists and variables are set
- Confirm imports use `.js` extensions (ES modules)
- Check nodemon logs for file watch errors

## AWS Integration
The repository is prepared for future AWS additions. When integrating AWS services, follow the existing controller/route separation and add SDK dependencies and environment configuration as needed.

## Contributing
Follow the established pattern for routes and controllers. Keep controllers focused on request/response and business logic separate from route definitions.
