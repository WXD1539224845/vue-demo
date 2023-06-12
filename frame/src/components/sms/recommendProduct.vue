<template>
    <div>
        <!-- form表单形式显示数据-->
        <el-form :model="entity" label-width="120px">
            <el-form-item label="推荐状态">
                <el-select v-model="entity.recommendStatus" placeholder="请选择">
                    <el-option v-for="item in statusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="商品编号">
                <el-input v-model="entity.productId"/>
            </el-form-item>

            <el-form-item label="商品名称">
                <el-input v-model="entity.productName" />
            </el-form-item>

            <el-form-item label="商品">
                <el-select v-model="entity.productId" placeholder="请选择" @change="change">
                    <el-option v-for="item in productArr" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
            </el-form-item>

            <el-form-item label="排序">
                <el-input v-model="entity.sort" />
            </el-form-item>

        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="sure">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import { one, add, edit } from "@/http/sms/home/recommendProductApi"
import { allProduct } from "../../http/sms/productApi"
import Msg from "@/utils/msg/msg"
export default {
    //父组件将id传参给子组件，id = 0 新建   id不为0 编辑
    props: { id: Number },
    mounted() {
        console.log('弹窗收到的id' + this.id)
        this.get()
    },
    data() {
        return {
            entity: {
                id: 0,
                productId: '',
                productName: '',
                recommendStatus: 0,
                sort: '',
            },
            statusArr: [
                { value: 0, label: '不推荐' },
                { value: 1, label: '推荐' }
            ],
            productArr:[],
            productId:0,
        }
    },
    methods: {
        change(id){
            this.productArr.forEach(item=>{
                if(item.id == id){
                    this.entity.productName = item.name
                    this.entity.productId = id
                }
            })
        },
        //点击确认按钮，根据id来执行新建/编辑操作
        sure() {
            for(let a in this.entity){
                if(this.entity[a] === ''){
                    Msg.fail('信息不能为空')
                    return
                }
            }
            this.id == 0 ? this.add() : this.edit()
        },
        //新建
        add() {
            console.log('添加的:' + JSON.stringify(this.entity))
            add(this.entity).then(resp => {
                Msg.success('新建成功')
                this.doCancel()
            })
        },
        //编辑
        edit() {
            edit(this.entity).then(resp => {
                Msg.success('已保存')
                this.doCancel()
            })
        },
        //点击取消按钮，给父组件提交'doCancel'事件，父组件触发该事件时关闭弹窗
        doCancel() {
            this.$emit('doCancel')
        },
        //编辑时获取单个的数据
        get() {
            console.log('触发了get方法')
            if (this.id != 0) {
                one({ id: this.id }).then(resp => {
                    console.log('编辑收到的:' + JSON.stringify(resp))
                    this.entity = resp.data.help
                })
            }

            allProduct().then(resp=>{
                // console.log('所有的产品：' + JSON.stringify(resp))
                this.productArr = resp.data.page.records
                console.log('第一个商品：' + JSON.stringify(this.productArr[0]))
            })
        },
    },
}
</script>
<style  scoped>
.btnDiv {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

.img{
    width: 200px;
    height: 150px;
}
</style>
