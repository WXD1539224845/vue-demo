<template>
    <div>
        <div class="up">
            <div class="item">
                <el-button type="success" @click="doAdd()">新建</el-button>
            </div>
            
        </div>

        <div class="down">
            <div>
                <!--列表组件-->
                <ListView :data="data" :column="column" title="首页广告列表">
                    <slot>
                        <el-table-column label="上下线状态" width="120">
                            <template #default="scope">
                                <span>{{ scope.row.status == 0 ? '下线' : '上线' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="轮播位置" width="120">
                            <template #default="scope">
                                <span>{{ scope.row.type == 0 ? 'PC首页轮播' : 'app首页轮播' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="图片" width="130">
                            <template #default="scope">
                                <img :src="scope.row.pic" class="img" />
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="200">
                            <template #default="scope">
                                <el-button type="primary" @click="doEdit(scope.row.id)">编辑</el-button>
                                <el-button type="danger" @click="doDelete(scope.row.id)">删除</el-button>
                            </template>
                        </el-table-column>
                    </slot>
                </ListView>
            </div>
        </div>

        <!-- <div class="up" style="margin-top: 20px;">
            <div class="imgDiv">
                <el-carousel height="500px">
                    <el-carousel-item v-for="item in itemArr" :key="item">
                        <img :src="item.pic" class="ha" />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div> -->

        <!--新建/编辑的弹窗-->
        <el-dialog v-model="visible" v-if="visible" width="30%" title="首页广告信息">
            <Advertise :id="choiceId" @doCancel="doCancel"></Advertise>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '@/components/list-view/list-view.vue';
import { page, del } from "@/http/sms/home/advertiseApi";
import Msg from "@/utils/msg/msg"
import Advertise from '../../../components/sms/advertise.vue';
export default {
    mounted() {
        //初始化设定列表每列显示的属性和名称
        this.column = this.buildColumn()
        //获取数据
        this.all()
    },
    data() {
        return {
            data: [],
            column: [],
            visible: false,
            choiceId: 0,

            itemArr: [],
            queryEntity: {}
        };
    },
    methods: {
        //查询
        doQuery() {
        },
        //编辑
        doEdit(id) {
            this.choiceId = id
            this.visible = true
            console.log('编辑的id:' + this.choiceId + '  visible:' + this.visible)
        },
        //新建
        doAdd() {
            console.log('触发了添加方法')
            this.choiceId = 0
            this.visible = true
        },
        //关闭弹窗
        doCancel() {
            this.visible = false
            this.all()
        },
        //删除
        doDelete(id) {
            console.log('删除的id:' + id)
            del({ id: id }).then(resp => {
                Msg.success('删除成功')
                this.all()
            })
        },
        //查询所有
        all() {
            let pageDto = {
                current: 1,
                size: 100
            }
            page(pageDto).then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.page.records

                this.data.forEach(item => {
                    if (item.pic != '' && isNaN(parseInt(item.pic))) {
                        this.itemArr.push(item)
                    }
                })
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 100 },
                { prop: "clickCount", label: "点击次数", width: 80 },
                { prop: "endTime", label: "结束时间", width: 150 },
                { prop: "name", label: "名称", width: 100 },
                { prop: "note", label: "备注", width: 80 },
                { prop: "orderCount", label: "下单数", width: 80 },
                { prop: "sort", label: "排序", width: 100,sortable:true },
                { prop: "startTime", label: "开始时间", width: 150 },
                { prop: "url", label: "链接地址", width: 120 },
            ];
        }
    },
    components: { ListView, Advertise }
}
</script>
<style  scoped>
.imgDiv {
    width: 800px;
    height: 500px;
}

.ha {
    width: 800px;
    height: 500px;
}

.img {
    width: 120px;
    height: 90px;
    margin-left: -8px;
}

.el-input {
    width: 130px;
}


.item {
    /* width: 250px; */
    display: flex;
    justify-content: right;
    width: 1300px;
}

.up {
    /* width: 1200px; */
    display: flex;
    justify-content: center;
}

.down {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    /* width: 100; */
    margin-left: 20px;
}
</style>
