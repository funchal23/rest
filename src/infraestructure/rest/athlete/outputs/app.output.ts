export class Output<T> {
    data: T;
    meta: any;

    constructor(data: T, meta: any){
        this.data = data;
        this.meta = meta;
    }

    static create(data, meta){
        return new Output(data, meta)
    }
}