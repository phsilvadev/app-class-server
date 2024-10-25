import { CreateTermsOfUseDto } from './dto/create-terms-of-use.dto';
import { UpdateTermsOfUseDto } from './dto/update-terms-of-use.dto';
import { TermsOfUse } from './entities/terms-of-use.entity';
import { Repository } from 'typeorm';
export declare class TermsOfUseService {
    private termsOfUseRepository;
    constructor(termsOfUseRepository: Repository<TermsOfUse>);
    create(createTermsOfUseDto: CreateTermsOfUseDto): Promise<void>;
    findAll(): Promise<TermsOfUse[]>;
    findLast(): Promise<TermsOfUse>;
    findOne(id: number): string;
    update(id: number, updateTermsOfUseDto: UpdateTermsOfUseDto): string;
    remove(id: number): string;
}
