import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('create')
    async createUser(
        @Body() createUserDto: CreateUserDto,
    ): Promise<{ message: string; user: User }> {
        const user = await this.userService.createUser(createUserDto);
        return {
            message: 'User created successfully',
            user,
        };
    }
}
