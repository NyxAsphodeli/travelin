import Layout from "../components/Layout"
import { AppContext, AppProvider } from "../service/AppContext"
import "../styles/globals.css"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
function MyApp({ Component, pageProps }) {
  let router = useRouter()

  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <AppProvider>
        <AppContext.Consumer>
          {() => (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </AppContext.Consumer>
      </AppProvider>
    </motion.div>
  )
}

export default MyApp
