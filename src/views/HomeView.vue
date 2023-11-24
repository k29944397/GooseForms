<script>
export default{
  data(){
    return{
      quiz:[],
      sortType: "dateStr",
      isReverse: false,
      a:"<",
      aa:"<<",
      b:">",
      bb:">>",
    }
  },
  methods: {
    fetchGetData() {
      fetch('http://localhost:8080/api/quiz/search2')
      .then(response => response.json())
        .then(data => {
          data.quizVoList.forEach(element => {
            this.quiz.push(element.questionnaire)
          });
          console.log(this.quiz);
        });
    },
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
      return vm.quiz.sort(function (a, b) {
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
        <input type="date" value="1971-01-01">
        <input type="date" value="2099-12-31">
        <button @click="fetchGetData">搜尋</button>
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
            <th class="click" @click="changeType('quiz.startDate')">開始時間
              <!-- isReverse 為反轉 className -->
              <span class="icon" :class="{'inverse': isReverse}" v-if="sortType == 'dateStr'">
              <i class=" fas fa-angle-up text-success"></i>
              </span>
            </th>
            <th class="click" @click="changeType('quiz.endDate')">到期日
              <span class="icon" :class="{'inverse': isReverse}" v-if="sortType == 'dateEnd'">
              <i class=" fas fa-angle-up text-success"></i>
              </span>
            </th>
            <th>觀看統計</th>
          </tr>
          <tr v-for="item in quiz" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.startDate }}</td>
            <td>{{ item.endDate }}</td>
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
  height: 510px;
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