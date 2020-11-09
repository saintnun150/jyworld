import Vue from "vue"
import VueRouter from "vue-router"

import ArticleForm from "@/components/board/ArticleForm";
import ArticleViewer from "@/components/board/ArticleViewer";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/write',
            component: ArticleForm
        },
        {
            path: '/viewer',
            component: ArticleViewer
        }
    ]
});

export default router
