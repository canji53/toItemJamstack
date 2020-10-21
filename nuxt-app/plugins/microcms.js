export default function (context, inject) {
  const microcms = new MicroCMS(context)
  inject("microcms", microcms)
}

class MicroCMS {
  constructor({ $axios, $config }) {
    this.axios = $axios
    this.baseUri = process.env.microcmsApiBaseUri
    this.headers = this.setHeader($config)
  }

  setHeader(config) {
    return {
      headers: {
        "X-API-KEY": config.microcmsApiKey,
        "X-GLOBAL-DRAFT-KEY": config.microcmsGlobalDraftApiKey,
      },
    }
  }

  async getContentList(querystring) {
    return await this.axios.$get(
      `${this.baseUri}/content?${querystring}`,
      this.headers
    )
  }

  async getContent(contentId, querystring) {
    return await this.axios.$get(
      `${this.baseUri}/content/${contentId}?${querystring}`,
      this.headers
    )
  }

  async getAbout() {
    return await this.axios.$get(`${this.baseUri}/about`, this.headers)
  }

  async getPolicy() {
    return await this.axios.$get(`${this.baseUri}/policy`, this.headers)
  }
}
