<script>
import { mapState, mapActions } from 'pinia';
import indexState from '../stores/indexState';
export default{
    data(){
        //值
    },
    components:{
        //匯入
    },
    methods:{
        //公式
    },
    computed:{
        ...mapState(indexState, ["location","today","locationInfo"])
    },
    methods:{
        ...mapActions(indexState, ["getLocation", "setLocation"])
    }
}

</script>

<template>

</template>

<style lang="scss" scoped>
</style>