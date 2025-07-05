import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AtheleteContract } from "src/application/services/athlete/app.athlete.contract";
import { Athlete, PageAthlete } from "../entity/app.athlete.entity";
import { ILike, Repository } from "typeorm";
import { AthleteDomain } from "src/domain/athlete/app.athlete.domain";
import { GetAthleteInput } from "src/infraestructure/rest/athlete/inputs/app.get-athlete.input";
import { DocumentAlreadyExistsException } from "src/exceptions/app.document-already-exists.exception";
import { Link } from "src/infraestructure/rest/athlete/outputs/app.link.output";

@Injectable()
export class AthleteRepository implements AtheleteContract {

    constructor(
        @InjectRepository(Athlete)
        public athleteRepository: Repository<Athlete>,
    ) { }


    async delete(code: string): Promise<void> {
        await this.athleteRepository.delete({
            code
        })
    }


    async getByCode(code: string): Promise<Athlete> {
        const athlete = await this.athleteRepository.findOne({
            where: { code }
        })

        if (athlete == null) {
            throw new NotFoundException(`Athlete with code ${code} not found`);
        }

        return athlete;
    }


    async create(athlete: AthleteDomain): Promise<Athlete> {
        const document = athlete.document;
        const athleteExists = await this.athleteRepository.findOne({
            where: { document }
        })

        if (athleteExists) {
            DocumentAlreadyExistsException.create(
                "DocumentAlreadyExistsException",
                HttpStatus.CONFLICT,
                {
                    message: `O CPF: ${document} já existe na base. Atleta já cadastrado`
                }
            )
        }

        const newAthelete = this.athleteRepository.create({
            name: athlete.name,
            surname: athlete.surname,
            document: athlete.document,
            code: athlete.code
        });
        return this.athleteRepository.save(newAthelete);
    }

    async getAll(input: GetAthleteInput): Promise<PageAthlete> {
        const where = input.filter
            ? [
                { name: ILike(`%${input.filter}%`) },
                { surname: ILike(`%${input.filter}%`) }
            ]
            : {};

        const [athletes, total] = await this.athleteRepository.findAndCount({
            where,
            skip: (input.page - 1) * input.size,
            take: input.size,
            order: { name: 'ASC' }
        });

        return PageAthlete.create(athletes, total, input.page, input.size, this.createLinks(input, total));
    }

    private createLinks(input: GetAthleteInput, total: number) {
        const totalPages = Math.ceil(total / input.size);
        const hasNext = input.page < totalPages;
        const hasPrevious = input.page > 1;
        const links: Link[] = [];
        const nextPageNumber = Number(input.page) + Number(1);
        const previousPageNumber = Number(input.page) - Number(1); 
 
        if (hasNext) {
            links.push({
                rel: 'next',
                href: `/athlete?page=${nextPageNumber}&size=${input.size}`
            });
        }

        if (hasPrevious) {
            links.push({
                rel: 'prev',
                href: `/athlete?page=${previousPageNumber}&size=${input.size}`
            });
        }
        return links;
    }
}