<template>
    <div class="big">
        <div>
            <img :src="product.pic" class="img" />
        </div>

        <div class="down">
            <div class="item">
                <span>{{ product.name }}</span>
            </div>

            <div class="item">
                <span>{{ product.productCategoryName }}</span>
            </div>

            <div class="item" style="color: red;">
                <span>￥{{ product.price }}</span>
            </div>

            <div class="item" style="justify-content: space-between;">
                <span>{{ product.publishStatus == 0 ? '下架' : '上架' }}</span>
                <span>{{ product.recommandStatus == 0 ? '不推荐' : '推荐' }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: { product: {} },
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
    },
}
</script>
<style scoped>
.item{
    display: flex;
    margin-top: 10px;
}
.down {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
}

.img {
    width: 300px;
    height: 250px;
}

.big {
    width: 350px;
    height: 430px;
    margin-left: 50px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
