import express from 'express';

// Controllers (route handlers)
import * as homeController from './controllers/home';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);

// Route definitions
app.get('/', homeController.index);

export default app;