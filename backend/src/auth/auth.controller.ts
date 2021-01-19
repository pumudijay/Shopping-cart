import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { LoggingCredentialDto } from './dto/logging-credential.tdo';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ){}

    @Post('/register')
    signUp(@Body(ValidationPipe) authCredentialDto:AuthCredentialDto): Promise<void> {
        return this.authService.signUp(authCredentialDto);
    }

    @Post('/login')
    signIn(@Body(ValidationPipe) loggingCredentialDto:LoggingCredentialDto): Promise<{accessToken: string}> {
        return this.authService.signIn(loggingCredentialDto);
    }
}
