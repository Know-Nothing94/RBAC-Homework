import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/* Router Modules */
import tableRouter from "./modules/table";

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/auth-redirect"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: { title: "主页", icon: "dashboard", affix: true },
      },
    ],
  },
  {
    path: "/profile",
    component: Layout,
    redirect: "/profile/index",
    hidden: true,
    children: [
      {
        path: "index",
        component: () => import("@/views/profile/index"),
        name: "Profile",
        meta: { title: "Profile", icon: "user", noCache: true },
      },
    ],
  },
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  tableRouter,
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    alwaysShow: true, // will always show the root menu
    name: "Permission",
    meta: {
      title: "设备管理",
      icon: "component",
      roles: ["admin", "editor"], // you can set roles in root nav
    },
    children: [
      {
        path: "acmanagement",
        component: () => import("@/views/table/build"),
        name: "ACManagement",
        meta: {
          title: "智能空调",
          // if do not set roles, means: this page does not require permission
        },
      },
      {
        path: "directive",
        name: "DirectivePermission",
        meta: {
          title: "智能空开",
          // if do not set roles, means: this page does not require permission
        },
      },
      {
        path: "role",
        name: "RolePermission",
        meta: {
          title: "智能开关",
          roles: ["admin"],
        },
      },
      {
        path: "bodytest",
        // component: () => import("@/views/permission/role"),
        name: "BodyTest",
        meta: {
          title: "人体检测相机",
          roles: ["admin"],
        },
      },
    ],
  },
  {
    path: "/elec",
    component: Layout,
    redirect: "/elec/page",
    alwaysShow: true, // will always show the root menu
    name: "Elec",
    meta: {
      title: "用电管理",
      icon: "tree",
      roles: ["admin", "editor"], // you can set roles in root nav
    },
    children: [
      {
        path: "role",
        // component: () => import("@/views/permission/role"),
        name: "RolePermission",
        meta: {
          title: "用电控制",
          roles: ["admin"],
        },
      },
      {
        path: "acmanagement",
        // component: () => import("@/views/permission/directive"),
        name: "ACManagement",
        meta: {
          title: "用电能耗",
          // if do not set roles, means: this page does not require permission
        },
      },
      {
        path: "directive",
        // component: () => import("@/views/permission/directive"),
        name: "DirectivePermission",
        meta: {
          title: "自动关停",
          // if do not set roles, means: this page does not require permission
        },
      },
    ],
  },
  {
    path: "/Log",
    component: Layout,
    // alwaysShow: true, // will always show the root menu
    name: "Log",
    meta: {
      title: "系统日志",
      icon: "lock",
      roles: ["admin", "editor"], // you can set roles in root nav
    },
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
