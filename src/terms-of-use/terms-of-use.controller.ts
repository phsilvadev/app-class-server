import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TermsOfUseService } from './terms-of-use.service';
import { CreateTermsOfUseDto } from './dto/create-terms-of-use.dto';
import { UpdateTermsOfUseDto } from './dto/update-terms-of-use.dto';

@Controller('terms-of-use')
export class TermsOfUseController {
  constructor(private readonly termsOfUseService: TermsOfUseService) {}

  @Post()
  create(@Body() createTermsOfUseDto: CreateTermsOfUseDto) {
    return this.termsOfUseService.create(createTermsOfUseDto);
  }

  @Get()
  findAll() {
    return this.termsOfUseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.termsOfUseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTermsOfUseDto: UpdateTermsOfUseDto) {
    return this.termsOfUseService.update(+id, updateTermsOfUseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.termsOfUseService.remove(+id);
  }
}
