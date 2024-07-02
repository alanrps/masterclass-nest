import { IsNotEmpty } from 'class-validator';

export class createMemberDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  function: string;
}
