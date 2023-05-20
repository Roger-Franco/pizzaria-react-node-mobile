import Head from 'next/head'
import logoImg from '../../../public/logo.svg'
import styles from '../../styles/home.module.scss'
import Image from 'next/image'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function Signup() {
  return (
    <>
    <Head>
      <title>Faça o seu cadastro agora!</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
      <div className={styles.login}>
        <h1>Criando a sua conta</h1>
        <form>
          <Input
          placeholder='Digite o seu nome'
          type='text'
          />
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
            Cadastrar
          </Button>
        </form>
        <Link href="/" legacyBehavior>
        <a className={styles.text}>Já possui uma conta? Faça o login!</a>
        </Link>
      </div>

    </div>
    </>
    
  )
}
