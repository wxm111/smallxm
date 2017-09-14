import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import question from '@/components/one'
import two from '@/components/two'
Vue.use(Router)

export default new Router({
        routes: [{
                path: '/',
                name: 'index',
                component: index
            },
            {
                path: '/question/:step',
                name: 'question',
                component: question
            },
            {
                path: '/two',
                name: 'two',
                component: two
            }


        ]
    })
    //在路由切换之前
    // router.beforeEach(function(to, from, next) {
    //     next() //一定要定义next否则会卡在这里不动
    // })