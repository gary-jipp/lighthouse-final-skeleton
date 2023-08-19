# Shell-React-Express

This React-Express-PG app is built for node deployment to cloud platforms.  React and Express code are separate mini-projects and build/deployment is handled by the top level package.json.   The React and Node apps are designed to start as a unit as a single node deployment.

When the React App starts, it makes a single API call to the API server for the version number and renders that, or an error if API call was unsucessful

### Built for node 16+

Copy `env.example` to `.env` to override the default env values

### Prerequisites
- Postgres server running available
- Postgres database exists & seeded
- Environment variables set (or .env file exists)

### Starting as a Single App (for Production)
```
npm install
npm run build
npm start
```

### Starting as Individual Apps (for Development)
```
cd server-express
npm install
npm run local

cd client-react
npm install
npm start
```