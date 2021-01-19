import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { LoggingCredentialDto } from "./dto/logging-credential.tdo";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialDto: AuthCredentialDto) {
        const { username, email, password, mobile } = authCredentialDto;

        const salt = await bcrypt.genSalt();

        const user = new User();
        user.username = username;
        user.email = email;
        user.mobile = mobile;
        user.salt = salt;
        user.password = await this.hashPassword(password, user.salt);

        try {
            await user.save(); 
        }catch(error) {
            if(error.code === '23505') {
                throw new ConflictException('Username already exits');
            }
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(loggingCredentialDto:LoggingCredentialDto): Promise<string>{
        const { username, password } = loggingCredentialDto;
        const user = await this.findOne({ username });

        if(user && await user.validatePassword(password)) {
            return user.username;
        }
        else{
            return null;
        }
    }

    private async hashPassword(password:string, salt:string):Promise<string> {
        return bcrypt.hash(password,salt);
    }
}