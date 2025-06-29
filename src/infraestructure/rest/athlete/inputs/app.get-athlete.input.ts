export class GetAthleteInput {
    filter?: string;
    page: number;
    size: number;

    constructor(filter: string, page: number, size: number) {
        this.filter = filter;
        this.page = page && page > 0 ? page : 1;
        this.size = size && size > 0 ? size : 10;
    }

    static create(filter: string, page: number, size: number): GetAthleteInput {
        return new GetAthleteInput(filter, page, size);
    }
}