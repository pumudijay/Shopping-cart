import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { LoggingCredentialDto } from './dto/logging-credential.tdo';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ){}

    async signUp(authCredentialDto:AuthCredentialDto): Promise<void> {
        return this.userRepository.signUp(authCredentialDto);
    }

    async signIn(loggingCredentialDto: LoggingCredentialDto): Promise<{accessToken: string}> {
        const username = await this.userRepository.validateUserPassword(loggingCredentialDto);
        
        if( !username ) {
            throw new UnauthorizedException('Invalied User Credentials');
        }
        const payload: JwtPayload = { username };
        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
    }
}
