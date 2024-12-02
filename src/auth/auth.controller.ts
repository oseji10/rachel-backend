import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './LoginDto';
import { Roles } from 'src/users/roles.entity';
import { RolesService } from './roles.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    // private readonly rolesService: RolesService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  // @Post('roles')
  // create(@Body() role: Roles) {
  //   return this.rolesService.create(role);
  // }
}
