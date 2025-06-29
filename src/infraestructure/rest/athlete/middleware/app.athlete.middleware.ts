import { HttpStatus, Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { Request, Response } from 'express';


@Injectable()
export class AthleteMiddleware implements NestMiddleware {


    use(req: Request, res: Response, next: NextFunction) {
        Logger.log("Init request athlete endpoints")
        const content = req.headers['content-type'];
        const accept = req.headers['accept'];

        if(content && !content.includes('application/json')){
            return res.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).send({
                erro: "UnsupportedMediaType",
                status: HttpStatus.UNSUPPORTED_MEDIA_TYPE,
                detail: {
                    message: "Media type informado não é suportado na aplicação. É esperado application/json"
                }
            });
        }


        if(accept && !accept.includes('application/json')){
            return res.status(HttpStatus.NOT_ACCEPTABLE).send({
                erro: "NotAcceptable",
                status: HttpStatus.NOT_ACCEPTABLE,
                detail: {
                    message: "Accept informado não é suportado na aplicação. É esperado application/json"
                }
            });
        }

        next();
    }

}