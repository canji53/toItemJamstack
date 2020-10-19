export default function (context, inject) {
  const microcms = new MicroCMS(context)
  inject("microcms", microcms)
}

class MicroCMS {
  constructor({ $axios, $config }) {
    this.axios = $axios
    this.setHeader($config)
  }

  setHeader(config) {
    this.axios.setHeader("X-API-KEY", config.microcmsApiKey)
    this.axios.setHeader("X-GLOBAL-DRAFT-KEY", config.microcmsGlobalDraftApiKey)
  }

  async getContentList(querystring) {
    return await this.axios.$get(
      `${process.env.microcmsBaseUri}/content?${querystring}`
    )
  }
}
