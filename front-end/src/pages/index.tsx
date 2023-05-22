import Head from 'next/head'
import logoImg from '../../public/logo.svg'
import styles from '../styles/home.module.scss'
import Image from 'next/image'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext, FormEvent, useState } from 'react'

export default function Home() {
  const {signIn} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    if(email === '' || password === '') {
      alert('PREENCHA OS DADOS')
      return
    }
    setLoading(true)
    
    
    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false)
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Input
          placeholder='Digite a sua senha'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <Button
          type="submit"
          loading={loading}
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
