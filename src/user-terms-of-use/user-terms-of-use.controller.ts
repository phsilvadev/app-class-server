import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTermsOfUseService } from './user-terms-of-use.service';
import { CreateUserTermsOfUseDto } from './dto/create-user-terms-of-use.dto';
import { UpdateUserTermsOfUseDto } from './dto/update-user-terms-of-use.dto';

@Controller('user-terms-of-use')
export class UserTermsOfUseController {
  constructor(private readonly userTermsOfUseService: UserTermsOfUseService) {}

  @Post()
  create(@Body() createUserTermsOfUseDto: CreateUserTermsOfUseDto) {
    return this.userTermsOfUseService.create(createUserTermsOfUseDto);
  }

  @Get()
  findAll() {
    return this.userTermsOfUseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTermsOfUseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTermsOfUseDto: UpdateUserTermsOfUseDto) {
    return this.userTermsOfUseService.update(+id, updateUserTermsOfUseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTermsOfUseService.remove(+id);
  }
}
