<script>
//問卷頁demo
import { mapState, mapActions } from 'pinia';
import indexState from '../stores/indexState';
export default{
    data(){
        return{
            // today:new Date().toLocaleDateString(undefined, this.options),
            // options:{
            //     weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
            // }
        }
    },
    components:{
        //匯入
    },
    computed:{
        ...mapState(indexState, ["location","today","locationInfo"])
    },
    methods:{
        ...mapActions(indexState, ["getLocation","setLocation"])
    }
}

</script>

<template>
    <p>投票日期:</p><p>{{ today }}</p>
    <a href="/001"><button class="okBtn">下一頁</button></a>
    
    <div class="main">
        <!--q_title-->
        <h1>青春洋溢高中生人氣投票戰</h1>
        <!--qn.description-->
        <h2>有一天，烏龜和兔子在談天，不知不覺說到誰跑得比較快，於是兔子便邀約烏龜比賽跑步。一開始，兔子大幅領先烏龜，但不久後，兔子便不幸追撞了黑色的高級車。對為了保護後輩而擔下全部責任的三浦，車主——暴力團員谷岡所提出的和解條件是…</h2>
        <label for="">姓名:</label>
        <!--user.name-->
        <input type="text" name="" id="">
        <br>
        <label for="">手機:</label>
        <!--user.phone_number-->
        <input type="text" name="" id="">
        <br>
        <label for="">信箱:</label>
        <!--user.email-->
        <input type="text" name="" id="">
        <br>
        <label for="">年齡:</label>
        <!--user.age-->
        <input type="text" name="" id="">
        <br>
        <!--user.ans-->
        <label for="">請投票給以下一位</label>
        <br>
        <input type="radio" name="aaa" id=""><label for="">田所號二</label>
        <br>
        <input type="radio" name="aaa" id=""><label for="">野獸前輩</label>
        <br>
        <input type="radio" name="aaa" id=""><label for="">王者征途</label>
        <br>
        <input type="radio" name="aaa" id=""><label for="">近平主席</label>
        <br>
        <button>取消</button>
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
    font-size: 24pt;
}
.main{
    height: 1000px;
    width: 600px;
    text-align: center;
    label{
        margin: 10px;
        font-size: 16pt;
    }
    input{
        margin-top: 10px;
        font-size: 16pt;
    }
    button{
        margin: 10px;
        font-size: 16pt;
    }
}
</style>