import Layout from "../components/Layout"
import { AppContext, AppProvider } from "../service/AppContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {() => (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </AppContext.Consumer>
    </AppProvider>
  )
}

export default MyApp
