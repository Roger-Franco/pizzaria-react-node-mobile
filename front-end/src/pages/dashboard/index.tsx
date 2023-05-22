import { canSSRAuth } from '@/utils/canSSRAuth'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h1>Bem vindo a página de Dashboard</h1>
    </div>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})
