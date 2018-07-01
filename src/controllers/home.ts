import { Get, Route, Controller } from 'tsoa';

@Route('')
export class HomeController extends Controller {
    @Get()
    public index(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            resolve('Hello to another world');
        });
    }
}