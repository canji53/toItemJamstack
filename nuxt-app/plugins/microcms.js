export default function (context, inject) {
  const microcms = new MicroCMS(context)
  inject("microcms", microcms)
}

class MicroCMS {
  constructor({ $axios, $config }) {
    this.axios = $axios
    this.baseUri = "https://toitem.microcms.io/api/v1"
    this.setHeader($config)
  }

  setHeader(config) {
    this.axios.setHeader("X-API-KEY", config.microcmsApiKey)
    this.axios.setHeader("X-GLOBAL-DRAFT-KEY", config.microcmsGlobalDraftApiKey)
  }

  async getContentList(querystring) {
    return await this.axios.$get(`${this.baseUri}/content?${querystring}`)
  }

  async getContent(contentId, querystring) {
    return await this.axios.$get(
      `${this.baseUri}/content/${contentId}?${querystring}`
    )
  }

  async getAbout() {
    return await this.axios.$get(`${this.baseUri}/about`)
  }

  async getPolicy() {
    return await this.axios.$get(`${this.baseUri}/policy`)
  }
}
