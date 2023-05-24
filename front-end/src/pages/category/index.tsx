import { Header } from '@/components/Header';
import Head from 'next/head';
import styles from './styles.module.scss'
import { FormEvent, useState } from 'react';

export default function Category(){
  const [name, setName] = useState('')

  async function handleRegister(event: FormEvent){
    event.preventDefault()

    alert("CATEGORIA " + name)
  }

  return(
    <>
      <Head>
        <title>Nova categoria - Pizzaria do Thuthu</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar categoria</h1>

          <form onSubmit={handleRegister} className={styles.form}>
            <input 
            type="text"
            placeholder='Digite o nome da categoria'
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <button className={styles.buttonAdd} type='submit'>Cadastrar</button>
          </form>
        </main>
      </div>
    </>
  )
}