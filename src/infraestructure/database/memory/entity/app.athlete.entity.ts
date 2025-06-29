import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Athlete {

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    document: string;

    @Column()
    code: string;
}

export class PageAthlete {
    data: Athlete[];
    total: number;
    page: number;
    size: number;

    constructor(data: Athlete[], total: number, page:number, size:number){
        this.data = data,
        this.total = total,
        this.page = page,
        this.size = size
    }

    static create(data: Athlete[], total: number, page:number, size:number){
        return new PageAthlete(data, total, page, size);
    }
}