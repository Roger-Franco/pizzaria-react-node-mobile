import prismaClient from '../../prisma';
import { compare } from 'bcryptjs';

interface AuthRequest{
  email: string;
  password: string;
}

class AuthUserService{
  async execute({email, password}: AuthRequest){
    // verificar se esse email já está cadastrado
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })
    
    if(!user) {
      throw new Error("User/password incorrect")
    }
    
    // verificar se a senha que ele mandou está coreta.
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("User/password incorrect!")
    }

    return {ok: true}
  }
}

export {AuthUserService}