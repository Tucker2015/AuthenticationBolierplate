
import Router from 'next/router';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import Layout from '../components/Layout';
import '../styles/global.css'
import 'video.js/dist/video-js.css'
import { SnackbarProvider } from "nextjs-toast";

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {

    return (
        <>
            <SnackbarProvider SnackbarProps={{ autoHideDuration: 3000 }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SnackbarProvider>
        </>
    );
}
