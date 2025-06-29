import { CustomException } from "./app.custom.exception";

export class DocumentAlreadyExistsException extends CustomException {

    constructor(erro: string, status: number, detail: any){
        super(erro,status,detail);
    }

    static create(erro: string, status: number, detail: any){
        throw new DocumentAlreadyExistsException(erro, status, detail);
    }

}