import Head from 'next/head'
import logoImg from '../../public/logo.svg'
import styles from '../styles/home.module.scss'
import Image from 'next/image'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <>
    <Head>
      <title>Pizzaria do Thuthu - Faça o seu login</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
      <div className={styles.login}>
        <form>
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
      </div>

    </div>
    </>
    
  )
}
