<template>
    <div>

        <div class="up" style="margin-top: 20px;">
            <div class="imgDiv">
                <el-carousel height="500px">
                    <el-carousel-item v-for="item in advertiseArr" :key="item">
                        <img :src="item.pic" class="ha" />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <div class="ha">
            <div class="spDiv">
                <span>热门品牌</span>
            </div>
            <div class="brandDiv">
                <template v-for="item in brandArr">
                    <ShopBrand :brand="item"></ShopBrand>
                </template>
            </div>
        </div>


        <div class="ha">
            <div class="spDiv">
                <span>推荐商品</span>
            </div>
            <div class="item">
                <template v-for="p in recArr">
                    <FirstProduct :product="p"></FirstProduct>
                </template>
            </div>
        </div>

        <div class="ha">
            <div class="spDiv">
                <span>新品商品</span>
            </div>
            <div class="item">
                <template v-for="p in newArr">
                    <FirstProduct :product="p"></FirstProduct>
                </template>
            </div>
        </div>

        <div class="ha">
            <div class="spDiv">
                <span>预告商品</span>
            </div>
            <div class="item">
                <template v-for="p in productArr">
                    <FirstProduct :product="p"></FirstProduct>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import {
    allProduct,
    allAdvertise,
    allRecommendProduct,
    allNewProduct,
    allBrand
} from "@/http/sms/firts";
import FirstProduct from "@/components/sms/firstProduct.vue";
import ShopBrand from "@/components/sms/shopBrand.vue";
export default {
    mounted() {
        this.getProm()
        this.getAllAdv()
        this.getRec()
        this.getBrand()
    },
    data() {
        return {
            advertiseArr: [],
            productArr: [],
            recArr: [],
            newArr: [],
            promotionArr:[],
            brandArr:[]
        };
    },
    methods: {
        getBrand(){
            allBrand().then(resp => {
                console.log('收到的:' + JSON.stringify(resp))
                this.brandArr = resp.data.page.records
            })
        },
        //获取广告
        getAllAdv() {
            allAdvertise().then(resp => {
                resp.data.page.records.forEach(item => {
                    if (item.pic != "" && isNaN(parseInt(item.pic))) {
                        this.advertiseArr.push(item);
                    }
                });
            });
        },
        getProm(){
            allProduct().then(resp=>{
                let product = resp.data.page.records
                product.forEach(item=>{
                    if(item.previewStatus == 1){
                        this.productArr.push(item)
                    }
                })
            })
        },
        //获取推荐
        getRec() {
            let ha = this;
            allProduct().then(resp => {
                let product = resp.data.page.records;
                let arr = [];
                allRecommendProduct().then(a => {
                    arr = a.data.page.records;
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < product.length; j++) {
                            if (arr[i].productId == product[j].id) {
                                ha.recArr.push(product[j]);
                            }
                        }
                    }
                    ha.getNew();
                });
            });
        },
        //获取新品
        getNew() {
            let ha = this
            allProduct().then(resp => {
                let product = resp.data.page.records;
                let arr = [];
                allNewProduct().then(a => {
                    arr = a.data.page.records;
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < product.length; j++) {
                            if (arr[i].productId == product[j].id) {
                                ha.newArr.push(product[j]);
                            }
                        }
                    }
                });
            });
        }
    },
    components: { FirstProduct, ShopBrand }
}
</script>
<style  scoped>
.ha{
    padding-left: 30px;
}
.brandDiv {
    /* margin-left: 100px; */
    width: 1800px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 50px;

}
.item {
    width: 1500px;
    display: flex;
    overflow-x: auto;
    height: 500px;
}

.spDiv {
    display: flex;
    margin-top: 30px;
}
.spDiv span{
    font-weight: bold;
    font-size: 20px;
}
.imgDiv {
    width: 800px;
    height: 500px;
}

.img {
    width: 120px;
    height: 90px;
    margin-left: -8px;
}

.up {
    display: flex;
    justify-content: center;
}
</style>
