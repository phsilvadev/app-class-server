import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user';
import { SingUpAuthDto } from '../auth/dto/sing-up-auth.dto';
import * as bcrypt from 'bcrypt';
import { RoleService } from '../role/role.service';
import { UserTermsOfUseService } from 'src/user-terms-of-use/user-terms-of-use.service';
import { TermsOfUseService } from 'src/terms-of-use/terms-of-use.service';
import { Cref } from './entities/cref';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Cref)
    private crefRepository: Repository<Cref>,

    private roleService: RoleService,
    private userTermsOfUseService: UserTermsOfUseService,
    private termsOfUseService: TermsOfUseService,
  ) {}

  findOneEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email: email },
      relations: { role: true },
    });
  }

  async createUser(singUpAuthDto: SingUpAuthDto): Promise<void> {
    if (!singUpAuthDto.terms_accepted) {
      throw new BadRequestException('You must accept the terms to sign up.');
    }

    const group = await this.roleService.findOneName(
      singUpAuthDto.cref ? 'teacher' : 'user',
    );

    try {
      const user: User = {
        name: singUpAuthDto.name,
        email: singUpAuthDto.email,
        password: await bcrypt.hash(singUpAuthDto.password, 10),
        role: group,
      };
      const userSaver = await this.userRepository.save(user);
      const terms = await this.termsOfUseService.findLast();

      this.userTermsOfUseService.create({
        terms_of_use_id: terms.id,
        userId: userSaver.id,
      });

      if (singUpAuthDto.cref) {
        const cref: Cref = {
          cref: singUpAuthDto.cref,
          user: userSaver,
        };

        this.crefRepository.save(cref);
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('');
    }
  }

  // async createAdmin(singUpAuthDto: SingUpAuthDto): Promise<void> {
  //   const group = await this.roleService.findOneName('admin');

  //   try {
  //     const user: User = {
  //       name: singUpAuthDto.name,
  //       email: singUpAuthDto.email,
  //       password: await bcrypt.hash(singUpAuthDto.password, 10),
  //       role: group,
  //       cip: singUpAuthDto.cip,
  //     };
  //     await this.userRepository.save(user);
  //   } catch (error) {
  //     throw new InternalServerErrorException();
  //   }
  // }

  // async create(singUpAuthDto: SingUpAuthDto): Promise<void> {
  //   const group = await this.roleService.findOneName('superAdmin');

  //   try {
  //     const user: User = {
  //       name: singUpAuthDto.name,
  //       email: singUpAuthDto.email,
  //       password: await bcrypt.hash(singUpAuthDto.password, 10),
  //       role: group,
  //       cip: singUpAuthDto.cip,
  //     };
  //     await this.userRepository.save(user);
  //   } catch (error) {
  //     throw new InternalServerErrorException();
  //   }
  // }

  findOneById(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id: id },
      select: ['id', 'name', 'email', 'role'],
    });
  }
}
