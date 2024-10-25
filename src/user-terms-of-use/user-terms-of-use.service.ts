import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserTermsOfUseDto } from './dto/create-user-terms-of-use.dto';
import { UpdateUserTermsOfUseDto } from './dto/update-user-terms-of-use.dto';
import { Repository } from 'typeorm';
import { UserTermsOfUse } from './entities/user-terms-of-use.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserTermsOfUseService {
  constructor(
    @InjectRepository(UserTermsOfUse)
    private userTermsOfUseRepository: Repository<UserTermsOfUse>,
  ) {}

  async create(createUserTermsOfUseDto: CreateUserTermsOfUseDto) {
    try {
      await this.userTermsOfUseRepository.save(createUserTermsOfUseDto);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return `This action returns all userTermsOfUse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTermsOfUse`;
  }

  update(id: number, updateUserTermsOfUseDto: UpdateUserTermsOfUseDto) {
    return `This action updates a #${id} userTermsOfUse`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTermsOfUse`;
  }
}
