// Contrato

import { createMemberDto } from 'src/infra/http/dto/create-member';

export abstract class MembersRepository {
  abstract create(
    name: string,
    memberFunction: string,
  ): Promise<createMemberDto>;

  abstract get(id: string): Promise<createMemberDto | null>;
}
