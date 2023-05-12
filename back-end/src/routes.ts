import {Router, Request, Response} from 'express'
import CreateUserController from './controllers/user/CreateUserController'
import AuthUserController from './controllers/user/AuthUserController'

const router = Router()

router.get('/teste', (req: Request, res: Response) => {
  return res.json({nome: "Pizza do Thu"})
  // throw new Error('Erro ao fazer essa requisição')
})

// Rotas user
router.post('/users', CreateUserController.handle)
router.post('/session', AuthUserController.handle)

export {router}