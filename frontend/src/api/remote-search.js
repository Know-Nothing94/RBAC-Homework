import request from "@/utils/request";
const myapi = process.env.VUE_APP_MY_URL;
const norapi = process.env.VUE_APP_BASE_API;

export function searchUser(name) {
  return request({
    url: norapi + "/vue-element-admin/search/user",
    method: "get",
    params: { name },
  });
}

export function transactionList(query) {
  return request({
    url: norapi + "/vue-element-admin/transaction/list",
    method: "get",
    params: query,
  });
}
