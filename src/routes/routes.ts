import { Express, Request, Response } from 'express';
import { HomeController } from '../controllers/home';
import { Controller } from 'tsoa';

export let registerRoutes = (app: Express) => {
    app.get('/', (request: Request, response: Response, next: any)  => {
        response.setHeader('Content-Type', 'application/json');

        const controller = new HomeController();

        promiseHandler(controller.index(), controller, response, next);
    });

    function promiseHandler(promise: Promise<any>, controller: Controller, response: Response, next: any) {
        return promise
            .then((data: any) => {
                const statusCode = controller.getStatus();

                if (data) {
                    response.json(data);
                    response.status(statusCode || 200);
                } else {
                    response.status(statusCode || 204);
                    response.end();
                }
            })
            .catch((error: any) => next(error));
    }
};

export default registerRoutes;