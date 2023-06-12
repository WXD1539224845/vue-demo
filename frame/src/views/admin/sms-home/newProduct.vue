<template>
    <div>
        <div class="up">
            <div class="item">
                <span style="padding-top: 5px;">推荐状态</span>
                <el-select v-model="queryEntity.recommendStatus" placeholder="请选择">
                    <el-option v-for="item in statusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-button type="primary" plain size="mini" @click="doQuery">查询</el-button>
                <el-button type="primary" plain size="mini" @click="all">全部</el-button>
            </div> 
            
            <el-button type="success" @click="doAdd()">新建</el-button>
        </div>

        <div class="down">
            <div>
                 <!--列表组件-->
                <ListView :data="data" :column="column" title="首页新品列表">
                    <slot>
                       <el-table-column label="推荐状态" width="120">
                            <template #default="scope">
                                <span>{{ scope.row.recommendStatus == 0 ? '不推荐' : '推荐' }}</span>
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

        <!--新建/编辑的弹窗-->
        <el-dialog v-model="visible" v-if="visible" width="30%" title="首页新品信息">
            <NewProduct :id="choiceId" @doCancel="doCancel"></NewProduct>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '@/components/list-view/list-view.vue';
import { page, del,getHomeNewProductsByRecommendStatus } from "@/http/sms/home/newProductApi";
import Msg from "@/utils/msg/msg"
import NewProduct from '../../../components/sms/newProduct.vue';
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

            categoryArr:[],
            queryEntity:{
                recommendStatus:0
            },
            statusArr: [
                { value: 0, label: '不推荐' },
                { value: 1, label: '推荐' }
            ],
        };
    },
    methods: {
        //查询
        doQuery(){
            getHomeNewProductsByRecommendStatus(this.queryEntity).then(resp=>{
                console.log('查询收到的:' + JSON.stringify(resp))
                this.data = resp.data.smsHomeNewProducts
            })
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
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 100 },
                { prop: "productId", label: "商品id", width: 80 },
                { prop: "productName", label: "商品名称", width: 400 },
                { prop: "sort", label: "排序", width: 100,sortable:true },
            ];
        }
    },
    components: { ListView, NewProduct }
}
</script>
<style  scoped>
.img{
    width: 200px;
    height: 150px;
}
.el-input{
    width: 130px;
}
.item{
    /* width: 250px; */
    display: flex;
    width: 900px;
}

.up {
    display: flex;
    justify-content: center;
}

.down {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100;
}
</style>
