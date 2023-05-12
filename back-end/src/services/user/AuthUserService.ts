import prismaClient from '../../prisma';
import { compare } from 'bcryptjs';
import {sign} from 'jsonwebtoken'

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
    
    // verificar se a senha que ele mandou está correta.
    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch) {
      throw new Error("User/password incorrect!")
    }

    // Se deu tudo certo, vamos gerar um token JWT para o usuário.

    const token = sign(
      {
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      subject: user.id,
      expiresIn: '30d'
    }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    }
  }
}

export {AuthUserService}