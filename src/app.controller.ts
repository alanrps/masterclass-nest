import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMemberDto } from './dto/create-member';
import { MembersRepository } from './repositories/members-repository';

@Controller('members')
export class AppController {
  constructor(private readonly membersRepository: MembersRepository) {}

  @Post()
  async createMember(@Body() body: createMemberDto) {
    const { name, function: memberFunction } = body;

    const createdMember = await this.membersRepository.create(
      name,
      memberFunction,
    );

    return createdMember;
  }

  @Get(':id')
  async getMember(@Param() params) {
    const id = params.id;

    const queryMember = await this.membersRepository.get(id);

    return queryMember;
  }
}
