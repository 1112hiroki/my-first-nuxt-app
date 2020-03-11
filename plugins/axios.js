export default function({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.QIITA_TOKEN) {
      config.headers.comon['Authorization'] = process.env.QIITA_TOKEN
    }
    return config
  })
}