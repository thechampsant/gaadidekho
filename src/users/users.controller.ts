import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from "./dtos/create-user.dto";

@Controller('auth')
export class UsersController {
    @Post('/signup')
    creatUser(@Body() body: CreateUserDto){
        console.log(body);
    }

    findUser(){

    }
}
