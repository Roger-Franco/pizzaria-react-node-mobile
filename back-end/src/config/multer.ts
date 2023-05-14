import crypto from 'crypto' // ja vem no NodeJs
import multer from 'multer'

import {extname, resolve} from 'path' // ja vem no NodeJs


export default {
  upload(folder: string){
    return{
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder), // local para salvar img
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString('hex') // para nao deixar repetir nomes de img
          const fileName = `${fileHash}-${file.originalname}`

          return callback(null, fileName)
        }
      })
    }
  }
}