import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { Roles } from 'src/users/roles.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    // @InjectRepository(RolesService)
    // private rolesRepository: Repository<RolesService>,
  ) {}

 

// create(role: Roles): Promise<Roles> {
//   return this.rolesRepository.save(role);
// }


}
