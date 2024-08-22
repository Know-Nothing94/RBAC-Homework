import request from "@/utils/request";

const myapi = process.env.VUE_APP_MY_URL;
const norapi = process.env.VUE_APP_BASE_API;

export function login(data) {
  return request({
    url: myapi + "/user/login",
    method: "get",
    params: { name: data.username, password: data.password },
  });
}

export function getInfo(token) {
  return request({
    url: myapi + "/user/userinfo",
    method: "get",
    params: { token: token },
  });
}

export function logout() {
  return request({
    url: norapi + "/vue-element-admin/user/logout",
    method: "post",
  });
}
