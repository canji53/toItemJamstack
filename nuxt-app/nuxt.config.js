import axios from "axios"

// environment variables
let environment = process.env.ENVIRONEMNT
const subDomain = environment === "prod" ? "www" : environment
const baseUrl =
  environment === "dev"
    ? "http://localhost:3000"
    : `https://${subDomain}.toitem.info`

const messageUri = `https://api.toitem.info/${environment}/message`
const microcmsBaseUri = "https://toitem.microcms.io/api/v1"

// meta
const lang = "ja"
const siteName = "toItem"
const siteShortName = "toItem"
const siteDescription =
  "toItemは、エンジニアの端くれである筆者が、PCやアクセサリーなどのガジェットを中心に、あったら嬉しい日用品や雑貨について共有する個人メディアです。これがあったら生活が楽しくなる、これならオススメできるというモノやコトをシンプルにわかり易く紹介していきます。"
const siteKeywords = "gadget, dailyGoods, knickKnacks"
const siteAuthor = "Canji"
const siteThemeColor = "#d4c4b5"

// image
const eyecatchPath = baseUrl + "/eyecatch.png"
const iconsDir = "/icons"
const splashscreensDir = "/splashscreens"

// pwa
const manifestBackgroundColor = "#000"
const manifestDisplay = "standalone"
const manifestOrientation = "portrait"

export default {
  mode: "universal",
  target: "static",
  head: {
    htmlAttrs: {
      lang,
    },
    titleTemplate: `%s | ${siteName}`,
    meta: [
      // whole settings
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "format-detection",
        content: "telephone=no, email=no, address=no",
      },
      // meta
      {
        hid: "description",
        name: "description",
        content: siteDescription,
      },
      {
        hid: "keywords",
        name: "keywords",
        content: siteKeywords,
      },
      {
        hid: "author",
        name: "author",
        content: siteAuthor,
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: siteThemeColor,
      },
      // ogp
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: baseUrl,
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: siteName,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: siteName,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: siteDescription,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: eyecatchPath,
      },
      // twitter
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: siteName,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: siteDescription,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: eyecatchPath,
      },
      // pwa iOS
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
    link: [
      // favicon
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
        href: iconsDir + "/icon-16.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        href: iconsDir + "/icon-32.png",
      },
      {
        rel: "icon",
        sizes: "48x48",
        type: "image/png",
        href: iconsDir + "/icon-48.png",
      },
      {
        rel: "icon",
        sizes: "72x72",
        type: "image/png",
        href: iconsDir + "/icon-72.png",
      },
      {
        rel: "icon",
        sizes: "96x96",
        type: "image/png",
        href: iconsDir + "/icon-96.png",
      },
      {
        rel: "icon",
        sizes: "144x144",
        type: "image/png",
        href: iconsDir + "/icon-144.png",
      },
      {
        rel: "icon",
        sizes: "192x192",
        type: "image/png",
        href: iconsDir + "/icon-192.png",
      },
      {
        rel: "icon",
        sizes: "256x256",
        type: "image/png",
        href: iconsDir + "/icon-256.png",
      },
      // apple touch icon
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: iconsDir + "/apple-touch-icon.png",
      },
      // pwa splash screens
      // Doc: https://appsco.pe/developer/splash-screens
      {
        href: splashscreensDir + "/iphone5_splash.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreensDir + "/iphone6_splash.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreensDir + "/iphoneplus_splash.png",
        media:
          "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreensDir + "/iphonex_splash.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreensDir + "/iphonexr_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreensDir + "/iphonexsmax_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreensDir + "/ipad_splash.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreensDir + "/ipadpro1_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreensDir + "/ipadpro3_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        href: splashscreensDir + "/ipadpro2_splash.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
    ],
  },
  manifest: {
    start_url: "/",
    lang,
    name: siteName,
    short_name: siteShortName,
    description: siteDescription,
    background_color: manifestBackgroundColor,
    theme_color: siteThemeColor,
    display: manifestDisplay,
    orientation: manifestOrientation,
  },
  privateRuntimeConfig: {
    microcmsApiKey: process.env.MICROCMS_API_KEY,
    microcmsGlobalApiKey: process.env.MICROCMS_GLOBAL_API_KEY,
  },
  publicRuntimeConfig: {
    microcmsApiKey:
      process.env.NODE_ENV !== "production"
        ? process.env.MICROCMS_API_KEY
        : undefined,
    microcmsGlobalDraftApiKey:
      process.env.NODE_ENV !== "production"
        ? process.env.MICROCMS_GLOBAL_DRAFT_API_KEY
        : undefined,
  },
  env: {
    baseUrl,
    siteName,
    microcmsBaseUri,
    messageUri,
    gaTrackingId: process.env.GA_TRACKING_ID,
  },
  css: ["ress"],
  plugins: [
    { src: "@/plugins/ga.js", mode: "client" },
    { src: "@/plugins/microcms.js", ssr: true },
  ],
  components: true,
  buildModules: ["@nuxtjs/eslint-module"],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    "nuxt-fontawesome",
    "nuxt-clipboard2",
    "vue-scrollto/nuxt",
  ],
  styleResources: {
    scss: [
      "@/assets/scss/_variables.scss",
      "@/assets/scss/_global-styles.scss",
      "@/assets/scss/_media-queries.scss",
    ],
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["faInfoCircle", "faLink", "faPaperPlane"],
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["faFacebookF", "faGetPocket", "faTwitter", "faInstagram"],
      },
    ],
  },
  build: {},
  generate: {
    async routes() {
      const limitation = 100
      const pages = await axios
        .get(`${microcmsBaseUri}/content?limit=${limitation}`, {
          headers: { "X-API-KEY": process.env.MICROCMS_API_KEY },
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content,
          }))
        )
      return pages
    },
  },
}
