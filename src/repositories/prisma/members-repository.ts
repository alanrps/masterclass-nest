import { createMemberDto } from 'src/dto/create-member';
import { MembersRepository } from '../members-repository';
import { PrismaService } from 'src/database/prisma.service';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaMembersRepository implements MembersRepository {
  constructor(private prisma: PrismaService) {}
  async get(id: string): Promise<createMemberDto | null> {
    const memberResult = await this.prisma.member.findUnique({
      where: {
        id,
      },
    });

    return memberResult;
  }

  async create(name: string, memberFunction: string): Promise<createMemberDto> {
    const memberResult = await this.prisma.member.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });

    return memberResult;
  }
}
