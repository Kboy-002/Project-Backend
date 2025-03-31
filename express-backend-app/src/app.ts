import express from 'express';
import { setRoutes } from './routes/index';
import { securityMiddleware } from './middlewares/security';

const app = express();

// Middleware
app.use(express.json());
app.use(securityMiddleware);

// Routes
setRoutes(app);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});