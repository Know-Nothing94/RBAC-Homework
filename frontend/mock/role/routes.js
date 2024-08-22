// Just a mock data

const constantRoutes = [
  {
    path: "/redirect",
    component: "layout/Layout",
    hidden: true,
    children: [
      {
        path: "/redirect/:path*",
        component: "views/redirect/index",
      },
    ],
  },
  {
    path: "/login",
    component: "views/login/index",
    hidden: true,
  },
  {
    path: "/auth-redirect",
    component: "views/login/auth-redirect",
    hidden: true,
  },
  {
    path: "/404",
    component: "views/error-page/404",
    hidden: true,
  },
  {
    path: "/401",
    component: "views/error-page/401",
    hidden: true,
  },
  {
    path: "",
    component: "layout/Layout",
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        component: "views/dashboard/index",
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "dashboard", affix: true },
      },
    ],
  },
];

const asyncRoutes = [
  {
    path: "/permission",
    component: "layout/Layout",
    redirect: "/permission/index",
    alwaysShow: true,
    meta: {
      title: "Permission",
      icon: "lock",
      roles: ["admin", "editor"],
    },
    children: [
      {
        path: "directive",
        // component: "views/permission/directive",
        name: "ACManagement",
        meta: {
          title: "Directive Permission",
        },
      },
      {
        path: "role",
        // component: "views/permission/role",
        name: "RolePermission",
        meta: {
          title: "Role Permission",
          roles: ["admin"],
        },
      },
    ],
  },

  {
    path: "/error",
    component: "layout/Layout",
    redirect: "noRedirect",
    name: "ErrorPages",
    meta: {
      title: "Error Pages",
      icon: "404",
    },
    children: [
      {
        path: "401",
        component: "views/error-page/401",
        name: "Page401",
        meta: { title: "Page 401", noCache: true },
      },
      {
        path: "404",
        component: "views/error-page/404",
        name: "Page404",
        meta: { title: "Page 404", noCache: true },
      },
    ],
  },

  {
    path: "/i18n",
    component: "layout/Layout",
    children: [
      {
        path: "index",
        component: "views/i18n-demo/index",
        name: "I18n",
        meta: { title: "I18n", icon: "international" },
      },
    ],
  },

  { path: "*", redirect: "/404", hidden: true },
];

module.exports = {
  constantRoutes,
  asyncRoutes,
};
