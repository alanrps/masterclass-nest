// Contrato

import { createMemberDto } from 'src/dto/create-member';

export abstract class MembersRepository {
  abstract create(
    name: string,
    memberFunction: string,
  ): Promise<createMemberDto>;

  abstract get(id: string): Promise<createMemberDto | null>;
}
