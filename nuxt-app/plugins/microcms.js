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
    const headers = {
      headers: {
        "X-API-KEY": config.microcmsApiKey,
      },
    }
    if (process.env.NODE_ENV !== "production") {
      headers.headers["X-GLOBAL-DRAFT-KEY"] = config.microcmsGlobalDraftApiKey
    }
    return headers
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
