export default function (context, inject) {
  const myapi = new MyAPI(context)
  inject("myapi", myapi)
}

class MyAPI {
  constructor({ $axios }) {
    this.axios = $axios
    this.baseUri = process.env.myApiBaseUri
  }

  async sendMessage(params) {
    return this.axios
      .post(`${this.baseUri}/message`, params)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return { data: { message: error.message } }
      })
  }
}
