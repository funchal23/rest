import { HttpException } from "@nestjs/common";

export class CustomException extends HttpException {

    constructor(erro: string, status: number, detail: any) {
        super({
            erro,
            status,
            detail
        },
            status
        )
    }

}