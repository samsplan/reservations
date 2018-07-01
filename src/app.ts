import express from 'express';
import RegisterRoutes from './routes/routes';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swagger/swagger.json';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/swagger.json', express.static(`${__dirname}/swagger/swagger.json`));

// Route definitions
RegisterRoutes(app);

export default app;
