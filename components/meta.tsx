import Head from "next/head"
import {HOME_OG_IMAGE_URL} from "../lib/constants"

// eslint-disable-next-line max-lines-per-function
const Meta = () => {
    return (
        <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/favicon/safari-pinned-tab.svg"
                color="#000000"
            />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#FFF" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta
                name="description"
                content="Omochiは、沖縄を拠点にホームページやLPの制作・運用代行を行っています。レスポンシブ対応やブログ機能、常時SSLに加え、SEOレポートやGoogleビジネスプロフィールの登録など、オールインワンなご支援をわかりやすい格安料金プランで提供します。"
            />
            <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
    )
}

export default Meta
