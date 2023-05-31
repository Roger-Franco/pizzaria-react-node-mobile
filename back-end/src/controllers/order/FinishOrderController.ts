import { Request, Response } from 'express';
import { FinishOrderService } from '../../services/order/FinishOrderService';

class FinishOrderController{
  async handle(req: Request ,res: Response ){
    const {order_id} = req.body
    // console.log(order_id, 'order_id');
    

    const finishOrderService = new FinishOrderService()

    const order = await finishOrderService.execute({order_id})

    return res.json(order)
  }
}

export default new FinishOrderController()