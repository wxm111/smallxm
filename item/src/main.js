// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import Vuex from "vuex"
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$http = axios
    /* eslint-disable no-new */
let store = new Vuex.Store({
    state: {
        question: null,
        seleced_question: []
    },
    mutations: {
        set_question: function(state, data) {
            state.question = data
        }, //提交mutations的值直接通过state. 不要直接通过结构赋值去改那样是没效果的直接赋值出不来结果，赋值总是失败的，所以要通过state.
        set_seleced_question: function(state, type) {
            let arr = [];
            let { question } = state

            function getfrom(arr) {
                let tem_arr = [];
                for (let i = 0; i < 4; i++) {
                    let tem = random(0, arr.length)
                    if (tem_arr.indexOf(tem) == -1) {
                        tem_arr.push(tem)
                    } else {
                        // 在从循环一下
                        i--
                    }
                }
                return [arr[tem_arr[0]], arr[tem_arr[1]], arr[tem_arr[2]], arr[tem_arr[3]]]
            }

            function random(min, max) {
                return Math.floor(Math.random() * max - min)
            }
            if (type == "liberal") {
                Object.values(question).forEach((val) => {
                    if (val.type != 1) {
                        arr.push(val)
                    }
                })

            }
            if (type == "science") {
                Object.values(question).forEach((val) => {
                    if (val.type == 1 || val.type == 2) {
                        arr.push(val)
                    }
                })

            }
            console.log(getfrom(arr))
            state.seleced_question = getfrom(arr);
        }
    },
    actions: {
        get_question: function({ commit }, data) {
            commit("set_question", data)
        }
    },
    getters: {
        get_questions: function() {
            l

        }
    }

})
new Vue({
    el: '#app',
    store,
    beforeCreate: function() {
        //./data是dev-server里设置的路由名字
        this.$http.get("./data").then((data) => {
            this.$store.dispatch("get_question", data.data)
        })
    },
    router,
    template: '<App/>',
    components: { App }
})