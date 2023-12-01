<script>
export default{
  data(){
    return{
      quiz:[],
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
      if (this.selectedIds.includes(id)) {//如果這id已經被選了 就刪除矩陣內的該id
        this.selectedIds = this.selectedIds.filter(selectedId => selectedId !== id);
      } else {//如果還沒被選到 就把該id丟進去
        this.selectedIds.push(id);
      }
    },
    deleteSelected() {
      axios.post('http://localhost:8080/api/quiz/delete', this.selectedIds)
      console.log(selectedIds)
      .then(response => {
        console.log('刪除成功:', response.data);
        this.selectedIds = [];//清空勾選的ID的資料
        this.fetchGetData();//刷新
      });
      error.log("error:" , erroe)
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
            <th>狀態</th>
            <th class="click">開始時間</th>
            <th class="click">到期日</th>
          </tr>
          <tr v-for="item in quiz" :key="item.id">
            <input type="checkbox" 
            :value="item.id"
            :checked="selectedIds.includes(item.id)" 
            @change="chSelection(item.id)">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.published }}</td>
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
  overflow: auto;
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