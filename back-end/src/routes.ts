import {Router, Request, Response} from 'express'
import { CreateUserController } from './controllers/user/CreateUserController'

const router = Router()

router.get('/teste', (req: Request, res: Response) => {
  return res.json({nome: "Pizza do Thu"})
  // throw new Error('Erro ao fazer essa requisição')
})

// Rotas user
router.post('/users', new CreateUserController().handle)

export {router}