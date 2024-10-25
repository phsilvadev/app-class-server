import { TermsOfUseService } from './terms-of-use.service';
import { CreateTermsOfUseDto } from './dto/create-terms-of-use.dto';
import { UpdateTermsOfUseDto } from './dto/update-terms-of-use.dto';
export declare class TermsOfUseController {
    private readonly termsOfUseService;
    constructor(termsOfUseService: TermsOfUseService);
    create(createTermsOfUseDto: CreateTermsOfUseDto): Promise<void>;
    findAll(): Promise<import("./entities/terms-of-use.entity").TermsOfUse[]>;
    findOne(id: string): string;
    update(id: string, updateTermsOfUseDto: UpdateTermsOfUseDto): string;
    remove(id: string): string;
}
