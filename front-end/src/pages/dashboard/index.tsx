import { Header } from '@/components/Header'
import { canSSRAuth } from '@/utils/canSSRAuth'
import Head from 'next/head'
import React from 'react'

export default function Dashboard() {
  return (
    <>
    <Head>
      <title>Painel - Pizzaria do Thuthu</title>
    </Head>
    <div>
      <Header />
      <h1>Bem vindo a página de Dashboard</h1>
    </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})
