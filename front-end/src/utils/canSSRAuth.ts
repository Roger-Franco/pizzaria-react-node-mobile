import { AuthTokenError } from '@/services/errors/AuthTokenError';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { destroyCookie, parseCookies } from 'nookies';


// função para páginas que só pode ser acessadas por visitantes
export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const cookies = parseCookies(ctx)

    const token = cookies['@nextauth.token']

    // Se o cara tentar acessar a pagina sem o token redirecionamos 
    if(!token){
    // if(!cookies['@nextauth.token']){
      return {
        redirect:{
          destination: '/',
          permanent: false,
        }
      }
    }

    try {
      return await fn(ctx)
      
    } catch (error) {
      if(error instanceof AuthTokenError){
        destroyCookie(ctx,'@nextauth.token')
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }    
    }
  }
}