# Copilot Instructions for AWS Test Backend

## Project Overview
A Node.js Express backend server running on port 4000 (see `index.js`). This is an early-stage AWS integration project using ES modules, Nodemon for development, and dotenv for configuration management.

## Architecture & File Organization

### Directory Structure
```
backend/
├── index.js              # Entry point: Express server initialization on port 4000
├── package.json          # Dependencies: express, dotenv, nodemon
└── APIs/
    ├── controller.js/    # Business logic handlers (request processors)
    └── route.js/         # Route definitions (endpoint mappings)
```

### Pattern: MVC-Style Separation
- **Routes** (`APIs/route.js/`): Define HTTP endpoints and map them to controllers
- **Controllers** (`APIs/controller.js/`): Handle request/response logic and business operations
- Example: `userRegister.js` exists in both directories for user registration feature

## Key Technologies & Stack
- **Runtime**: Node.js with ES modules (`"type": "module"` in package.json)
- **Framework**: Express.js ^5.1.0
- **Dev Environment**: Nodemon for auto-restart on file changes
- **Configuration**: dotenv ^17.2.3 for environment variables (`.env` expected)

## Development Workflow

### Running the Server
```bash
npm start
```
Starts Nodemon which watches for file changes and automatically restarts the server on port 4000.

### Adding New Features
1. Create route file: `APIs/route.js/featureName.js`
2. Create controller file: `APIs/controller.js/featureName.js`
3. Import and register routes in `index.js` (not yet implemented)
4. Add middleware/configuration as needed in `index.js`

## Critical Implementation Notes

- **Server Setup**: Minimal - `index.js` only initializes Express and listens on port 4000. Middleware, body parsers, and route registration are not yet configured.
- **Controller Pattern**: Controllers should export request handlers (e.g., `export const userRegister = (req, res) => { ... }`)
- **Route Pattern**: Routes should use Express Router and import controller functions
- **Environment Variables**: Access via `process.env.VARIABLE_NAME` after dotenv loads

## Common Tasks

### Add a New API Endpoint
1. Create handler in `APIs/controller.js/newFeature.js`
2. Create routes in `APIs/route.js/newFeature.js` using Express Router
3. Import and use router in `index.js`: `app.use('/api/newFeature', newFeatureRouter)`

### Debug Server Issues
- Check port 4000 is not in use
- Verify `.env` file exists and has required variables
- Check Nodemon logs for file watch issues
- Confirm ES module imports use `.js` extensions

## AWS Integration Notes
Project structure suggests AWS integration is in planning/development phase. No AWS SDK dependencies currently installed. When adding AWS services, follow the same `controller.js` / `route.js` separation pattern.
