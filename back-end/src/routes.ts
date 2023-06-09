import {Router, Request, Response} from 'express'
import multer from 'multer'

import CreateUserController from './controllers/user/CreateUserController'
import AuthUserController from './controllers/user/AuthUserController'
import DetailUserController from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import CreateCategoryController from './controllers/category/CreateCategoryController'
import ListCategoryController from './controllers/category/ListCategoryController'
import CreateProductController from './controllers/product/CreateProductController'
import ListByCategoryController from './controllers/product/ListByCategoryController'

import uploadConfig from './config/multer'
import CreateOrderController from './controllers/order/CreateOrderController'
import RemoveOrderController from './controllers/order/RemoveOrderController'
import AddItemController from './controllers/order/AddItemController'
import RemoveItemController from './controllers/order/RemoveItemController'
import SendOrderController from './controllers/order/SendOrderController'
import ListOrderController from './controllers/order/ListOrderController'
import DetailOrderController from './controllers/order/DetailOrderController'
import FinishOrderController from './controllers/order/FinishOrderController'

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

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
// O nome do campo que será enviado a foto, precisará ser aquele colocado como string no single()
router.post('/product', isAuthenticated, upload.single('file'), CreateProductController.handle)
router.get('/category/product', isAuthenticated, ListByCategoryController.handle)

// Rotas order
router.post('/order', isAuthenticated, CreateOrderController.handle)
router.delete('/order', isAuthenticated, RemoveOrderController.handle)
router.post('/order/add', isAuthenticated, AddItemController.handle)
router.delete('/order/remove', isAuthenticated, RemoveItemController.handle)
router.put('/order/send', isAuthenticated, SendOrderController.handle)
router.get('/orders', isAuthenticated, ListOrderController.handle)
router.get('/order/detail', isAuthenticated, DetailOrderController.handle)
router.put('/order/finish', isAuthenticated, FinishOrderController.handle)

export {router}