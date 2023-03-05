import { createRouter, createWebHashHistory } from "vue-router"

let routes = [
    { path: "/test", component: () => import("../views/Test.vue") },
    { path: "/login", component: () => import("../views/Login.vue") },
    {
        path: "/dashboard", component: () => import("../views/dashboard/Dashboard.vue"), children: [
            { path: "/dashboard/userinfo", component: () => import("../views/dashboard/Userinfo.vue") },
            { path: "/dashboard/editinfo", component: () => import("../views/dashboard/Editinfo.vue") }

        ]
    },
    { path: "/home", component: () => import("../views/home.vue") }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router, routes }