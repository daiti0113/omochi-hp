import {AppProps} from "next/app"
import Head from "next/head"
import "../styles/index.css"

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <>
                    {/* <!-- Chrome, Firefox OS, Opera のステータスバーの色指定 --> */}
                    <meta name="theme-color" content="#FFF" />
                    {/* <!-- Windows Phone のステータスバーの色指定 --> */}
                    <meta name="msapplication-navbutton-color" content="#FFF" />
                    {/* <!-- iOS Safari のステータスバーの色指定 --> */}
                    <meta name="apple-mobile-web-app-status-bar-style" content="#FFF" />
                    {/* <!-- Google tag (gtag.js) --> */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-V9833WVXT7"></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-V9833WVXT7');
                    `}} />
                </>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
