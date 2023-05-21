import Head from 'next/head'
import logoImg from '../../public/logo.svg'
import styles from '../styles/home.module.scss'
import Image from 'next/image'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext, FormEvent } from 'react'

export default function Home() {
  const {signIn} = useContext(AuthContext)

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    let data = {
      email: 'teste@teste.com',
      password: '123123'
    }
    await signIn(data)
  }
  return (
    <>
    <Head>
      <title>Pizzaria do Thuthu - Faça o seu login</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <Input
          placeholder='Digite o seu email'
          type='text'
          />
          <Input
          placeholder='Digite a sua senha'
          type='password'
          />
          <Button
          type="submit"
          loading={false}
          >
            Acessar
          </Button>
        </form>
        <Link href="/signup" legacyBehavior>
        <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
        </Link>
      </div>

    </div>
    </>
    
  )
}
