import axios from 'axios'

export default {
  // imgur api 會擋來自 localhost 的 post request ， 因此需要使用 127.0.0.1 來進入 網站 app
  // imgur 會擋來自 127.0.0.1 的 get request
  uploadImage(formData) {
    return axios.post('https://api.imgur.com/3/image',
    formData
    ,
    {
      headers: {
        Authorization: 'Client-ID 5bcdab843c406b1'
      }
    }
    )
  }
}