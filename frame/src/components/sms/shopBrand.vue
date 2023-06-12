<template>
    <div class="big">
        <img :src="brand.logo" class="img" />
        <div class="text">
            <span>{{ brand.name }}</span>
        </div>

        <div class="text">
            <span>{{ brand.brandStory }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: { brand: {} },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>
<style  scoped>
.text {
    display: flex;
    padding: 5px 10px;
}

.img {
    width: 500px;
    height: 200px;
}

.big {
    width: 500px;
    height: 350px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    border-radius: 10px;
}
</style>
