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
        ...mapState(indexState, ["location", "locationInfo"])
    },
    methods:{
        ...mapActions(indexState, ["getLocation", "setLocation"])
    }
}

</script>

<template>
    <div class="main">
        <h1>青春洋溢高中生人氣投票戰</h1>
        <label for="">請投票給以下一位</label>
        <br>
        <div class="pies">
            <label for="">田所號二</label>
            <div class="pie1"></div>
            <br>
            <label for="">野獸前輩</label>
            <div class="pie2"></div>
            <br>
            <label for="">王者征途</label>
            <div class="pie3"></div>
            <br>
            <label for="">近平主席</label>
            <div class="pie4"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main{
    height: 1000px;
    width: 600px;
    text-align: center;
    label{
        margin: 10px;
        font-size: 16pt;
    }
}
.pies{
  width: 600px; /* 寬 */
  height: 600px; /* 高 */
  display: inline-block; /* 橫向排列 */
  margin: 20px; /* 外距 20px */
  background: #f1eaff; /* 背景淺紫色*/
  text-align: center; /* 文字置中對齊 */
  font-size: 1em; /* 文字大小 1em */
  color: #146b9b; /* 文字深藍色 */
  .pie1, .pie2, .pie3, .pie4 {
  width: 100px; /* 寬 */
  height: 100px; /* 高 */
  background: pink; /* 背景粉紅色*/
  border: 3px solid white; /* 邊框 粗3px 實線 白色 */
  border-radius: 50%; /* 圓角 50% (變成圓形) */
  box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.1); /* 陰影 */
  background-image: /* 背景為線性漸層 */ linear-gradient(
    /* 方向為向右 */ to right,
    /* 左半邊為背景圖片的顏色 */ transparent 50%,
    /* 右半邊為深咖啡色 */ #655 0%
  );
}
}
</style>