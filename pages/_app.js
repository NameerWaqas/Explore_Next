import '../styles/globals.css'
import Layout from '../components/Layout';
import ContextProvider from '../context/context';


function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}

export default MyApp
