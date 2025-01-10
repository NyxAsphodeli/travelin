import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { AppContext, AppProvider } from "../service/AppContext";
import "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        // Check if the host matches and redirect
        if (typeof window !== "undefined") {
            const currentHost = window.location.hostname;
            if (currentHost === "travelin-official-website-git-prod-nyxasphodelis-projects.vercel.app") {
                window.location.href = "https://travelin.me";
            }
        }
    }, []);

    return (
        <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
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
    );
}

export default MyApp;
