<script>
import { mapState, mapActions } from 'pinia';
import {RouterLink} from 'vue-router';
import indexState from '../stores/indexState';
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
    },
    computed:{
        ...mapState(indexState, ["location", "locationInfo"])
    },
    methods:{
        ...mapActions(indexState, ["getLocation", "setLocation"])
    }
}

</script>

<template>
    <nav class="topnav">
        <RouterLink to="/">Home</RouterLink>
    </nav>

</template>

<style lang="scss" scoped>
.topnav{
    height: 100%;
    width: 100%;
    font-size: 24pt;
    background-color: aquamarine;
    color: #fff;
    &:hover{
    background-color: #f7b606;
    color: rgb(255, 0, 0);
    }
    .rourinf{
        text-decoration: none;
        margin: 0;
    }
}
</style>
