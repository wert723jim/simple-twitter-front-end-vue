import { apiHelper } from "../utils/helpers";

export default {
  addNewUser({account, name, email, password, checkPassword}) {
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword
    })
  }
}