import express from 'express';
import RegisterRoutes from './routes/routes';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);

// Route definitions
RegisterRoutes(app);

export default app;