<script>
export default{
  data(){
    return{
      // data: [
      //   {
      //     number:110,
      //     name: "Steam夏季特價 - 購買傾向調查#21",
      //     state:"投票中",
      //     dateStr: 2021.0601,
      //     dateEnd: 2021.0701,
      //     see:"前往",
      //   },
      //   {
      //     number:111,
      //     name: "星巴克玉誠店最佳員工票選",
      //     state:"投票中",
      //     dateStr: 2021.1001,
      //     dateEnd: 2021.1101,
      //     see:"前往",
      //   },
      //   {
      //     number:112,
      //     name: "學生餐廳2F進駐店家票選",
      //     state:"投票中",
      //     dateStr: 2021.0801,
      //     dateEnd: 2021.0901,
      //     see:"前往",
      //   },
      //   {
      //     number:113,
      //     name: "青春洋溢高中生人氣投票戰",
      //     state:"投票中",
      //     dateStr: 2021.0901,
      //     dateEnd: 2021.1001,
      //     see:"前往",
      //   },
      //   {
      //     number:114,
      //     name: "514月風古戰團名票選",
      //     state:"投票中",
      //     dateStr: 2021.1201,
      //     dateEnd: 2022.0101,
      //     see:"前往",
      //   },
      //   {
      //     number:115,
      //     name: "Steam冬季特價 - 購買傾向調查#22",
      //     state:"投票中",
      //     dateStr: 2022.1101,
      //     dateEnd: 2022.1201,
      //     see:"前往",
      //   },
      //   {
      //     number:116,
      //     name: "辛巴克裕程店最佳員工票選",
      //     state:"投票中",
      //     dateStr: 2022.1001,
      //     dateEnd: 2022.1101,
      //     see:"前往",
      //   },
      //   {
      //     number:117,
      //     name: "學生餐廳11F進駐店家票選",
      //     state:"投票中",
      //     dateStr: 2022.0801,
      //     dateEnd: 2022.0901,
      //     see:"前往",
      //   },
      //   {
      //     number:118,
      //     name: "青春洋溢國中生人氣投票戰",
      //     state:"投票中",
      //     dateStr: 2022.0901,
      //     dateEnd: 2022.1001,
      //     see:"前往",
      //   },
      //   {
      //     number:119,
      //     name: "11月光古戰團名票選",
      //     state:"投票中",
      //     dateStr: 2022.1201,
      //     dateEnd: 2023.0101,
      //     see:"前往",
      //   }
      // ],
      quiz:[],
      // sortType: "dateStr",
      // isReverse: false,
      a:"<",
      aa:"<<",
      b:">",
      bb:">>",
      kWord: '',
      sDate: '1971-01-01',
      eDate: '2099-12-31',
      selectedIds: [],
    }
  },
  methods: {
    fetchGetData() {
      this.quiz=[]//先清空避免重複出現
      fetch('http://localhost:8080/api/quiz/search2')
      .then(response => response.json())
        .then(data => {
          data.quizVoList.forEach(element => {
            if (
              element.questionnaire.title.includes(this.kWord) &&
              element.questionnaire.startDate >= this.sDate &&
              element.questionnaire.endDate <= this.eDate
            ) {
              this.quiz.push(element.questionnaire);
            }
          });
          console.log(`kWord: ${this.kWord}, sDate: ${this.sDate}, eDate: ${this.eDate}`);
        });
    },
    chSelection(id) {
      if (this.selectedIds.includes(id)) {
        this.selectedIds = this.selectedIds.filter(selectedId => selectedId !== id);
      } else {
        this.selectedIds.push(id);
      }
    },
    deleteSelected() {
      axios.post('http://localhost:8080/api/quiz/delete', this.selectedIds)
      .then(response => {
        console.log('刪除成功:', response.data);
        this.selectedIds = [];//清空勾選的ID的資料
        this.fetchGetData();//刷新
      })
    },
  },  
  computed: {
  }
}
</script>

<template>
  <body>
    <div class="search">
      <div class="srA">
        <label for="">問卷標題</label>
        <input v-model="kWord" type="text">
      </div>
      <div class="tA">
        <input v-model="sDate" type="date" >
        <input v-model="eDate" type="date" >
        <button @click="fetchGetData">搜尋</button>
      </div>
    </div>
    <div class="exBtnArea">
      <button @click="deleteSelected">刪除勾選問卷</button> <!-- 刪除單筆問卷 -->
      <a href="/Create"><button>前往生成問卷</button></a>
    </div>
    <div class="sur">
      <!-- https://hsuchihting.github.io/vue-js/20200919/3037030482/ -->
      <table class="table">
        <thead>
          <tr>
            <th>刪除</th>
            <th>#</th>
            <th>問卷</th>
            <th>說明</th>
            <th>狀態</th>
            <th class="click">開始時間</th>
            <th class="click">到期日</th>
            <th>統計</th>
          </tr>
          <tr v-for="item in quiz" :key="item.id">
            <input type="checkbox" 
            :value="item.id"
            :checked="selectedIds.includes(item.id)" 
            @change="chSelection(item.id)">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.published }}</td><!--啟用狀態-->
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
  border: 1px solid black;
  flex-wrap:wrap;
}
// .exBtnArea{

// }
.search{
  display: flex;
  justify-content: center;
  align-items: center;
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