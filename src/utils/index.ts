export const logError = (error: Error): void => {
    console.error(`[ERROR] ${new Date().toISOString()}: ${error.message}`);
};

export const handleResponse = (res: any, data: any, statusCode: number = 200): void => {
    res.status(statusCode).json(data);
};

export const handleNotFound = (res: any): void => {
    res.status(404).json({ message: 'Resource not found' });
};