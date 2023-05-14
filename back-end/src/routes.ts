import {Router, Request, Response} from 'express'
import CreateUserController from './controllers/user/CreateUserController'
import AuthUserController from './controllers/user/AuthUserController'
import DetailUserController from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import CreateCategoryController from './controllers/category/CreateCategoryController'
import ListCategoryController from './controllers/category/ListCategoryController'
import CreateProductController from './controllers/product/CreateProductController'

const router = Router()

router.get('/teste', (req: Request, res: Response) => {
  return res.json({nome: "Pizza do Thu"})
  // throw new Error('Erro ao fazer essa requisição')
})

// Rotas user
router.post('/users', CreateUserController.handle)
router.post('/session', AuthUserController.handle)
router.get('/me', isAuthenticated, DetailUserController.handle)

// Rotas category
router.post('/category', isAuthenticated, CreateCategoryController.handle)
router.get('/category', isAuthenticated, ListCategoryController.handle)

// Rotas product
router.post('/product', isAuthenticated, CreateProductController.handle)

export {router}