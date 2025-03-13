# TypeScript Node.js API Boilerplate

A production-ready backend boilerplate with Express, MongoDB, and TypeScript featuring JWT authentication.

## Features
- Strict TypeScript configuration
- JWT authentication flow
- MongoDB integration with Mongoose
- Environment configuration
- REST API best practices
- Pre-configured development workflow

## Installation

1. Clone repository:
```bash
git clone https://github.com/debugrror/Typescript-nodejs-api-boilerplate.git
cd Typescript-nodejs-api-boilerplate
```
2. Install dependencies:
```bash
npm install
 ```

3. Configure environment:
```bash
cp .env.example .env
 ```

4. Start development server:
```bash
npm run dev
 ```

## Project Structure
```plaintext
/Users/debugrror/Developer/code/blog/
├── src/
│   ├── config/         # Environment configuration
│   ├── controllers/    # Business logic handlers
│   ├── interfaces/     # TypeScript interfaces
│   ├── middleware/     # Express middleware
│   ├── models/         # MongoDB models
│   ├── routes/         # API endpoints
│   ├── services/       # Business logic services
│   ├── utils/          # Helper functions
│   └── server.ts       # Application entry point
├── .env.example        # Environment template
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependency management
 ```

## Key Files File Purpose
`server.ts`  Main application configuration 

`user.model.ts`  User schema definition 

`auth.controller.ts`  Authentication handlers

`auth.middleware.ts`  JWT verification middleware 

## Workflow
- Development (Hot reload):
  
  ```bash
  npm run dev
   ```
- Production build :
  
  ```bash
  npm run build
   ```
- Production start :
  
  ```bash
  npm start
   ```

## API Endpoints
### Authentication
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/auth/me - Get current user (protected)

## Environment Variables
```plaintext
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blog
JWT_SECRET=your_jwt_secret_here
 ```

## Testing API

```bash
# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'

# Protected route
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
 ```

## License
MIT

```plaintext

This README provides:
1. Clear installation instructions
2. Visual project structure
3. Development workflow
4. API documentation
5. Environment setup guidance
6. Testing examples
7. Git configuration help
8. Symbol references to key components

The structure matches your current implementation while being generic enough for future expansion.
 ```
