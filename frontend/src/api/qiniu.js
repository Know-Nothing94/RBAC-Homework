import request from "@/utils/request";
const myapi = process.env.VUE_APP_MY_URL;
const norapi = process.env.VUE_APP_BASE_API;
export function getToken() {
  return request({
    url: norapi + "/qiniu/upload/token", // 假地址 自行替换
    method: "get",
  });
}
