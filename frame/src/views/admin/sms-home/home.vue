<template>
    <div class="big">
        <div class="up">
            
            <div style="display: flex;flex-direction: column;">
                <div class="center">
                    <h2>首页热点管理</h2>
                </div>
                <div style="padding-left: 600px;width: 100%;border-bottom: 1px solid gray;">
                    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" mode="horizontal" :router="true">
                    <el-menu-item index="/home/advertise">首页广告管理</el-menu-item>
                    <el-menu-item index="/home/brand">首页热销品牌管理</el-menu-item>
                    <el-menu-item index="/home/newProduct">首页新品管理</el-menu-item>
                    <el-menu-item index="/home/recommendProduct">首页促销商品管理</el-menu-item>
                    <el-menu-item index="/home/recommendSubject">首页推荐主题管理</el-menu-item>
                    <!-- <el-menu-item index="/home/first">首页</el-menu-item> -->
                </el-menu>
                </div>
                
            </div>
        </div>

        <div class="down">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '/home/advertise'
        }
    },
    methods: {
    },
}
</script>
<style  scoped>
.center{
    display: flex;
    justify-content: center;
}
.up {
    width: 100%;
    height: 12%;
    top: 0%;
    position: absolute;
    /* border: 1px solid rebeccapurple; */
    /* background-color: rgb(112,128,144); */
    /* direction: rtl; */
}
.el-menu{
    /* background-color: rgb(112,128,144); */
}
.el-menu-item{
    font-size: 20px;   
}
.down {
    width: 100%;
    height: 88%;
    position: absolute;
    top: 13%;
    overflow-y: auto;
}

.big {
    width: 100%;
    height: 100%;
    padding: 0px;
}
</style>
