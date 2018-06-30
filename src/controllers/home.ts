import { Request, Response } from 'express';

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'message': 'hello world' }));
};