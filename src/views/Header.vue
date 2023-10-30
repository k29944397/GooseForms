<script>
import {RouterLink} from 'vue-router';
export default{
    data(){
        //值
    },
    components:{
        //匯入
        RouterLink
    },
    methods:{
        //公式
        gohome(){
            this.$router.push("/");
        }
    },
}

</script>

<template>
    <nav class="topnav">
        <button @click="gohome"></button>
    </nav>
</template>

<style lang="scss" scoped>
.topnav{
    position: relative;
    height: 100%;
    width: 802px;
    font-size: 24pt;
    background-color: #C1C1C1;
    color: #fff;
    &:hover{
    background-color: rgb(168, 168, 168);
    color: rgb(0, 0, 0);
    }
    button{
        position: absolute;
        height: 50px;
        width: 50px;
        top: 20px;
        left: 20px;
        object-fit: cover;
        background: url('../../public/Home.jpg')
    }
}
</style>
