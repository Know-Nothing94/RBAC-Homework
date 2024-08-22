import request from "@/utils/request";

const myapi = process.env.VUE_APP_MY_URL;
const norapi = process.env.VUE_APP_BASE_API;

export function getRoutes() {
  return request({
    url: myapi + "/vue-element-admin/routes",
    method: "get",
  });
}

export function getRoles() {
  return request({
    url: norapi + "/vue-element-admin/roles",
    method: "get",
  });
}

export function addRole(data) {
  return request({
    url: norapi + "/vue-element-admin/role",
    method: "post",
    data,
  });
}

export function updateRole(id, data) {
  return request({
    url: norapi + `/vue-element-admin/role/${id}`,
    method: "put",
    data,
  });
}

export function deleteRole(id) {
  return request({
    url: norapi + `/vue-element-admin/role/${id}`,
    method: "delete",
  });
}
