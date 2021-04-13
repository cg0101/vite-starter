<template>
    <div class="page-home">
        <div class="navbar">
            <h3>vite-starter</h3>
        </div>
        <div>
            <h1><center>hi, guys</center></h1>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    components: {},
    data() {
        return {};
    },
    created() {},
    methods: {}
};
</script>
<style scoped lang="less">
.navbar {
    background: black;
    height: 60px;
    padding: 0 15px;
    h3 {
        color: #fff;
        font-size: 24px;
        line-height: 60px;
        padding-left: 15px;
        display: inline-block;
        float: left;
    }
    &:after {
        content: ' ';
        display: block;
        clear: both;
    }
}
.page-home {
    height: 100vh;
}
</style>
