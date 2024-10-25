import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTermsOfUseDto } from './dto/create-terms-of-use.dto';
import { UpdateTermsOfUseDto } from './dto/update-terms-of-use.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TermsOfUse } from './entities/terms-of-use.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TermsOfUseService {
  constructor(
    @InjectRepository(TermsOfUse)
    private termsOfUseRepository: Repository<TermsOfUse>,
  ) {}

  async create(createTermsOfUseDto: CreateTermsOfUseDto) {
    try {
      await this.termsOfUseRepository.save(createTermsOfUseDto);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findAll(): Promise<TermsOfUse[]> {
    return this.termsOfUseRepository.find();
  }

  findLast(): Promise<TermsOfUse> {
    return this.termsOfUseRepository.findOne({
      where: {},
      order: {
        id: 'DESC', // ou outra coluna como 'createdAt'
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} termsOfUse`;
  }

  update(id: number, updateTermsOfUseDto: UpdateTermsOfUseDto) {
    return `This action updates a #${id} termsOfUse`;
  }

  remove(id: number) {
    return `This action removes a #${id} termsOfUse`;
  }
}
