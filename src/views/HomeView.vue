<script>
export default{
  data(){
    return{
      data: [
        {
          number:110,
          name: "Steam夏季特價 - 購買傾向調查#21",
          state:"投票中",
          dateStr: 2021.0601,
          dateEnd: 2021.0701,
          see:"前往",
        },
        {
          number:111,
          name: "星巴克玉誠店最佳員工票選",
          state:"投票中",
          dateStr: 2021.1001,
          dateEnd: 2021.1101,
          see:"前往",
        },
        {
          number:112,
          name: "學生餐廳2F進駐店家票選",
          state:"投票中",
          dateStr: 2021.0801,
          dateEnd: 2021.0901,
          see:"前往",
        },
        {
          number:113,
          name: "青春洋溢高中生人氣投票戰",
          state:"投票中",
          dateStr: 2021.0901,
          dateEnd: 2021.1001,
          see:"前往",
        },
        {
          number:114,
          name: "514月風古戰團名票選",
          state:"投票中",
          dateStr: 2021.1201,
          dateEnd: 2022.0101,
          see:"前往",
        },
        {
          number:115,
          name: "Steam冬季特價 - 購買傾向調查#22",
          state:"投票中",
          dateStr: 2022.1101,
          dateEnd: 2022.1201,
          see:"前往",
        },
        {
          number:116,
          name: "辛巴克裕程店最佳員工票選",
          state:"投票中",
          dateStr: 2022.1001,
          dateEnd: 2022.1101,
          see:"前往",
        },
        {
          number:117,
          name: "學生餐廳11F進駐店家票選",
          state:"投票中",
          dateStr: 2022.0801,
          dateEnd: 2022.0901,
          see:"前往",
        },
        {
          number:118,
          name: "青春洋溢國中生人氣投票戰",
          state:"投票中",
          dateStr: 2022.0901,
          dateEnd: 2022.1001,
          see:"前往",
        },
        {
          number:119,
          name: "11月光古戰團名票選",
          state:"投票中",
          dateStr: 2022.1201,
          dateEnd: 2023.0101,
          see:"前往",
        }
      ],
      sortType: "dateStr",
      isReverse: false,
      a:"<",
      aa:"<<",
      b:">",
      bb:">>"
    }
  },
  // 以上為資料
  //照開始時間排序↓↓↓↓↓
  methods: {
    changeType: function (type) {
      var vm = this;
      if (vm.sortType == type) {
        vm.isReverse = !vm.isReverse;
      } else {
        vm.isReverse = false;
      }
      vm.sortType = type;
    }
  },
  computed: {
    sortData() {
      var vm = this;
      var type = vm.sortType;
      return vm.data.sort(function (a, b) {
        if (vm.isReverse) return b[type] - a[type];
        else return a[type] - b[type];
      });
    }
  }
}
</script>

<template>
  <body>
    <div class="search">
      <div class="srA">
        <label for="">問卷標題</label>
        <input type="text">
      </div>
      <div class="tA">
        <input type="date" value="2021-12-01">
        <input type="date" value="2021-12-31">
        <button>搜尋</button>
      </div>
    </div>
    <div class="sur">
      <!-- https://hsuchihting.github.io/vue-js/20200919/3037030482/ -->
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>問卷</th>
            <th>狀態</th>
            <th class="click" @click="changeType('dateStr')">開始時間
              <!-- isReverse 為反轉 className -->
              <span class="icon" :class="{'inverse': isReverse}" v-if="sortType == 'dateStr'">
              <i class=" fas fa-angle-up text-success"></i>
              </span>
            </th>
            <th class="click" @click="changeType('dateEnd')">到期日
              <span class="icon" :class="{'inverse': isReverse}" v-if="sortType == 'dateEnd'">
              <i class=" fas fa-angle-up text-success"></i>
              </span>
            </th>
            <th>觀看統計</th>
          </tr>
          <tr v-for="item in sortData" :key="item.dateStr">
            <td>{{ item.number }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.state }}</td>
            <td>{{ item.dateStr }}</td>
            <td>{{ item.dateEnd }}</td>
            <td>{{ item.see }}</td>
          </tr>
        </thead>
      </table>
      <div class="pageCh">
        <p v-text="aa"></p>
        <p>|</p>
        <p v-text="a"></p>
        <p>1</p>
        <p>|</p>
        <p>2</p>
        <p>|</p>
        <p>3</p>
        <p>|</p>
        <p>4</p>
        <p>|</p>
        <p>5</p>
        <p v-text="b"></p>
        <p>|</p>
        <p v-text="bb"></p>
      </div>
    </div>
  </body>
</template>

<style lang="scss" scoped>
body{
  height: 500px;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  flex-wrap:wrap;
}
.search{
  height: 150px;
  width: 600px;
  background-color: gray;
  margin: 5px;
  font-size: 20pt;
  .srA{
    margin: 15px;
    input{
      margin-left: 15px;
      font-size: 20pt;
    }
  }
  .tA{
    margin: 15px;
    input{
      width: 200px;
      margin-left: 10px;
      font-size: 20pt;
    }
    button{
      margin-left: 5px;
    font-size: 16pt;
    }
  }
}
.sur{
  height: 275px;
  width: 600px;
  background-color: gray;
  margin: 5px;
  td{
    text-align: center;
  }
  p{
    margin: 0;
  }
  .table th.click {
    cursor: pointer;
  }

  .table th.click {
    cursor: pointer;
  }

  .icon {
    display: inline-block;
  }
  .icon.inverse {
    transform: rotate(180deg)
  }
}
.pageCh{
  display: flex;
  flex-wrap:nowrap;
  justify-content: center;
  p{
    left: 50%;
    margin: 0 2px;
  }
}
</style>