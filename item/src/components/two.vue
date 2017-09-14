<template>
    <div class="bigbox">
        <div class="seal">
                <img src="../imgs/seal.png" alt="">
            </div>
        <div class="small">
            
            <h2>兰翔</h2>
            <h4>主修专业：<span>补坑挖槽机械操作</span></h4>
            <h4>课程特色：<span>你是物理天才！来兰翔，专业挖坑，妈妈在也不用担心你被人坑</span></h4>
        </div>
        <div class="left">
            <img src="../imgs/btn-intr.png" alt="">
        </div>
        <div class="right">
            <img src="../imgs/btn-share.png" alt="">
        </div>
    </div>
</template>
<script>
    // export default{
    //     data:function(){

    //     }
    // }
</script>
<style lang="">
    *{
        margin:0;
        padding:0;
        list-style:none;
        box-sizing:border-box;
    }
    html,
    body,
    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-size:16px;
    }
    body {
        background: url("../imgs/bg.jpg") no-repeat center center;
         background-size: cover;
    }
    .left{
        width:130px;
        height:70px;
        position:absolute;
        left:10%;
        top:50%;
    }
    .right{
        width:130px;
        height:70px;
        position:absolute;
        right:10%;
        top:50%;
    }
    .left img{
        width:100%;
        height:100%;
    }
     .right{
        width:140px;
        height:70px;
    }
    .right img{
        width:100%;
        height:100%;
    }
    .seal{
        width:130px;
        height:130px;
        position: absolute;
        right:4%;
        top:5%;
        animation: Scale .2s linear;
    }
    .seal img{
        width:100%;
        height:100%;
    }
    .bigbox{
        width:90%;
        height:65%;
        background: url("../imgs/bg-matriculate.png") no-repeat;
        background-size:100% 100%;
        margin:30px auto;
    }
    .small{
        width:80%;
        position:absolute;
        text-align:center;
        left:10%;
        top:28%;
    }
    .small h2{
        font-weight:normal
    }
    .small h4{
        line-height:26px;
    }
    .small span{
        font-weight:normal;
    }
    @keyframes Scale {
    0% {
        transform: scale(3);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>