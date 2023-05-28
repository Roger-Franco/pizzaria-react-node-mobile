/* eslint-disable @next/next/no-img-element */
import { Header } from '@/components/Header';
import Head from 'next/head';
import styles from './styles.module.scss'
import { ChangeEvent, FormEvent, useState } from 'react';
import { api } from '@/services/apiClient';
import { toast } from 'react-toastify';
import { canSSRAuth } from '@/utils/canSSRAuth';
import {FiUpload} from 'react-icons/fi'
import { setupAPIClient } from '@/services/api';

type ItemProps = {
  id: string;
  name: string;
}

interface CategoryList {
  categoryList: ItemProps[]
}

export default function Product({categoryList}: CategoryList){

// console.log(categoryList);
const [name, setName] = useState('')
const [price, setPrice] = useState('')
const [description, setDescription] = useState('')

const [avatarUrl, setAvatarUrl] = useState('')
const [imageAvatar, setImageAvatar] = useState(null)
const [categories, setCategories] = useState(categoryList || [])
const [categorySelected, setCategorySelected] = useState(0)

function handleFile(e: ChangeEvent<HTMLInputElement>){
  if(!e.target.files) {
    return
  }

  const image = e.target.files[0]

  if(!image) {
    return
  }

  if(image.type === 'image/jpeg' || image.type === 'image/png'){
    setImageAvatar(image)
    setAvatarUrl(URL.createObjectURL(e.target.files[0]))
  }
}

// QUando voce seleciona uma nova categoria na lista
function handleChangeCategory(e){
// console.log(e.target.value);
// console.log(categories[e.target.value].name);
setCategorySelected(e.target.value)

}

async function handleRegister(event: FormEvent){
  event.preventDefault()

  try {
    const data = new FormData()

    if(name === '' || price === '' || description === '' || imageAvatar === null){
      toast.error('Preencha todos os campos!')    
      return
    }

    // Primeiro parametro são os nomes que o back espera receber e o segundo parametro são os valores deles;
    data.append('name', name)
    data.append('price', price)
    data.append('description', description)
    data.append('category_id', categories[categorySelected].id)
    data.append('file', imageAvatar)

    const apiClient = setupAPIClient()

    await apiClient.post('/product', data)
    
    toast.success('Cadastrado com sucesso!')    
  } catch (err) {
    console.log(err.message);
    toast.error('Ops... Erro ao cadastrar!')    
  }
  setName('')
  setPrice('')
  setDescription('')
  setImageAvatar(null)
  setAvatarUrl('')

}
  

  return(
    <>
      <Head>
        <title>Novo Produto - Pizzaria do Thuthu</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar novo produto</h1>

          <form className={styles.form} onSubmit={handleRegister}>

            <label className={styles.labelAvatar}>
              <span>
              <FiUpload size={30} color='#fff' />
              </span>
              <input type="file" accept='image/png image/jpeg' onChange={handleFile} />
              {avatarUrl && (
                <img 
                className={styles.preview}
                src={avatarUrl} 
                alt="Foto do produto" 
                width={250} 
                height={250}
                />
              )}
            </label>


            <select value={categorySelected} onChange={handleChangeCategory}>
              {categories.map((item, index) => {
                return (
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                )
              })}
            </select>
            
            <input 
            type="text"
            placeholder='Digite o nome do produto'
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input 
            type="text"
            placeholder='Preço do produto'
            className={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />

            <textarea
            placeholder='Descreva seu produto...'
            className={styles.input}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

            <button className={styles.buttonAdd} type='submit'>Cadastrar</button>
          </form>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)

  const response = await apiClient.get('/category')

  console.log(response.data);
  

  return {
    props: {
      categoryList: response.data
    }
  }
})