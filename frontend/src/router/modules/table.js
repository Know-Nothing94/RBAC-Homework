/** When your routing table is too long, you can split it into small modules **/

import Layout from "@/layout";

const tableRouter = {
  path: "/table",
  component: Layout,
  redirect: "/table/complex-table1",
  name: "Table",
  meta: {
    title: "用电架构",
    icon: "table",
  },
  children: [
    {
      path: "build",
      name: "build",
      meta: { title: "楼宇管理" },
    },

    {
      path: "department",
      name: "department",
      meta: { title: "部门管理" },
    },

    {
      path: "room",
      name: "room",
      meta: { title: "房间管理" },
    },
  ],
};
export default tableRouter;
