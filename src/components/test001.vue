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
    <p>投票日期:</p>
    <p>{{ today }}</p>
    <button class="okBtn">送出</button>
    <div class="main">
        <h1>青春洋溢高中生人氣投票戰</h1>
        <label for="">姓名:</label>
        <p>user.name</p>
        <br>
        <label for="">手機:</label>
        <p>user.phone</p>
        <br>
        <label for="">信箱:</label>
        <p>user.mail</p>
        <br>
        <label for="">年齡:</label>
        <p>user.age</p>
        <br>
        <label for="">選擇投給:</label>
        <br>
        <p>user.ans</p>
        <br>
        <button>修改</button>
    </div>
</template>

<style lang="scss" scoped>
p{
    position:relative;
}
.okBtn{
    position: fixed;
    right: 5px;
    bottom: 5px;
    font-size: 16pt;
}
.main{
    height: 1000px;
    width: 600px;
    text-align: center;
    label{
        margin: 10px;
        font-size: 16pt;
    }
    button{
        margin: 10px;
        font-size: 16pt;
    }
}
</style>