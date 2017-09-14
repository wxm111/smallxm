<template>
    <div class="box">
        <div class="header">
            <div class="title">
                <span>英语题 第一题/共四页</span>
            </div>
            <div class="zhong">
                <p>{{question_name}}</p>
            </div>
            <div class="bottom">
                <p @click="change(0)" :class="{'seleced1':bg_list[0]}">
                    <a><img src="../imgs/a.png" alt=""></a><b>{{an1}}</b></p>
                <p @click="change(1)" :class="{'seleced1':bg_list[1]}">
                    <a><img src="../imgs/b.png" alt=""></a><b>{{an2}}</b></p>
                <p @click="change(2)" :class="{'seleced1':bg_list[2]}">
                    <a><img src="../imgs/c.png" alt=""></a><b>{{an3}}</b></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created: function() {
        //console.log(this.$route)//看一下当前路由信息
        if (this.$route.query.type == 1) {
            this.$store.commit("set_seleced_question", "science")
            console.log(this.$store.state)
        }
        if (this.$route.query.type == 0) {
            //console.log(this.$store.getters.get_liberal)//让它跳转下一个路由
            this.$store.commit("set_seleced_question", "liberal")//("liberal")

        };
        //console.log(this.data)
        let step = this.$route.params.step * 1
        console.log(step)
        let { title, answers } = this.$store.state.seleced_question[step - 1]
        this.question_name = title;
        this.an1 = answers[0]
        this.an2 = answers[1]
        this.an3 = answers[2]
    },
    beforeRouteEnter (to, from, next){
        next()
    },
    beforeRouteUpdate: function(to,from,next) {
        next()
    },
    watch: {
        '$route': function(n, o) {
             this.bg_list = [!1, !1, !1]
            let step = this.$route.params.step * 1
            let { title, answers } = this.$store.state.seleced_question[step - 1]
            this.question_name = title;
            this.an1 = answers[0]
            this.an2 = answers[1]
            this.an3 = answers[2]
        }
    },
    mounted: function() {

    },
    data: function() {
        return {
            bg_list: [false, false, false],
            question_name: "",
            an1: "e3423",
            an2: "54235",
            an3: "56464",
            data: null

        }
    },
    // beforeRouteUpdate: (to, from, next) => {
    //     this.bg_list = [!1, !1, !1]
    //     next()
    // },
    methods: {
        change(index) {
            this.bg_list = [!1, !1, !1]
            this.bg_list[index] = !0;

            // this.$store.getters.get_liberal
            setTimeout(() => {
                if(this.$route.params.step*1+1>4){
                    this.$router.push("/two")
                }else{
                     this.$router.push("/question/"+(this.$route.params.step*1+1))
                }
               
            }, 1000)
        },

    }
}
</script>
<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html,
body,
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 16px;
}

.bottom .seleced1 {
    background-position: 0 -70px;
}

.header {
    width: 90%;
    margin: 30px auto 100px;
}

.title {
    width: 100%;
    height: 60px;
    background: url("../imgs/bg-qustion-top.png") no-repeat;
    background-size: 100% 100%;
    font-size: 14px;
    text-align: center;
    padding-top: 7px;
    color: green;
}

.zhong {
    width: 100%;
    background: url("../imgs/bg-question-center.png") no-repeat;
    background-size: 100% 100%;
    padding: 15px;
}

.zhong p {
    width: 90%;
    margin: 0 auto;
    line-height: 24px;
}

.bottom {
    width: 100%;
    height: 400px;
    background: url("../imgs/bg-question-bottom.png") no-repeat;
    background-size: 100% 100%;
    padding: 7px 17px;
}

.bottom p {
    margin-top: 15px;
    width: 100%;
    height: 60px;
    background: url("../imgs/btn-bg-select.png") no-repeat;
    background-size: 100% 140px;
    padding-top: 5px;
    display: flex;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    display:flex;
}
.bottom p b{
    display:flex;
    align-items: center
}

.bottom p a {
    display: block;
    width: 35px;
    height: 35px;
    margin: 10px 20px 0 20px;
}

.bottom p a img {
    width: 100%;
    height: 100%;
}
</style>