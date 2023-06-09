import { apiHelper } from "../../utils/helpers";

export default {
  getAllUser() {
    return apiHelper.get('/admin/users')
  }
}