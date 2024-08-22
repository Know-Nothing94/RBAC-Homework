import request from "@/utils/request";
const myapi = process.env.VUE_APP_MY_URL;
const norapi = process.env.VUE_APP_BASE_API;

export function fetchNum() {
  return request({
    url: myapi + "/AC/getNum",
    method: "get",
  });
  s;
}

export function fetchList(query) {
  return request({
    url: myapi + "/AC/getACList",
    method: "get",
    params: query,
  });
}

export function fetchArticle(id) {
  return request({
    url: norapi + "/vue-element-admin/article/detail",
    method: "get",
    params: { id },
  });
}

export function fetchPv(pv) {
  return request({
    url: norapi + "/vue-element-admin/article/pv",
    method: "get",
    params: { pv },
  });
}

export function createArticle(data) {
  return request({
    url: norapi + "/vue-element-admin/article/create",
    method: "post",
    data,
  });
}

export function updateArticle(data) {
  return request({
    url: norapi + "/vue-element-admin/article/update",
    method: "post",
    data,
  });
}
