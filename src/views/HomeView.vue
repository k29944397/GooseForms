<script>
// var theUL = document.getElementById("pageListTableBody");
// var totalPage = document.getElementById("spanTotalPage");
// var pageNum = document.getElementById("spanPageNum");
// var spanPre = document.getElementById("spanPre");
// var spanFirst = document.getElementById("spanFirst");
// var spanNext = document.getElementById("spanNext");
// var spanLast = document.getElementById("spanLast");
// var numberRowsInTable = theUL.getElementsByTagName("tr").length;
// var pageSize = 10;
// var page = 1;

export default{
  data(){
    return{
      quiz:[],
      // a:"<",
      // aa:"<<",
      // b:">",
      // bb:">>",
      kWord: '',
      sDate: '1971-01-01',
      eDate: '2099-12-31',
      // items: [
      //   { published: true, title: 1 },
      //   { published: false, title: 2 },
      // ],
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
            console.log(element.length);
          });
          console.log(`kWord: ${this.kWord}, sDate: ${this.sDate}, eDate: ${this.eDate}`);
        });
      },
      // getLink(item) {
      //   return item.published ? `/000${item.published}` : '#';
      // },
    //   //下一頁
    //   nextPage(){
    //     hideTable();
    //     currentRow = pageSize * page;
    //     maxRow = currentRow + pageSize;
    //     if ( maxRow > numberRowsInTable ) maxRow = numberRowsInTable;
    //       for ( var i = currentRow; i< maxRow; i++ ){
    //         theUL.getElementsByTagName("tr")[i].style.display =''; 
    //       } 
    //     page++;
    //     if ( maxRow == numberRowsInTable ) {
    //       nextText();
    //       lastText(); 
    //     } 
    //     showPage();
    //     preLink();
    //     firstLink(); 
    //   }, 
    //   //上一頁
    //   prePage(){
    //     hideTable();
    //     page--;
    //     currentRow = pageSize * page;
    //     maxRow = currentRow - pageSize;
    //     if ( currentRow > numberRowsInTable ) maxRow = numberRowsInTable;
    //       for ( var i = maxRow; i< currentRow; i++ ){
    //         theUL.getElementsByTagName("tr")[i].style.display =''; 
    //       } 
    //       if ( maxRow == 0 ){
    //           preText(); firstText(); 
    //       } 
    //       showPage(); nextLink(); lastLink(); 
    //   }, 
    //   //第一頁
    //   firstPage(){
    //     hideTable();
    //     page = 1;
    //     for (var i = 0; i<pageSize; i++){
    //       theUL.getElementsByTagName("tr")[i].style.display = '';
    //     }
    //     showPage(); firstText(); preText(); nextText(); lastText();
    //   },
    //   //尾頁
    //   lastPage(){
    //   hideTable();
    //   page = pageCount();
    //   currentRow = pageSize (page - 1);
    //     for ( var i = currentRow; i<numberRowsInTable; i++ ){
    //       theUL.getElementsByTagName("tr")[i].style.display =''; 
    //     } showPage(); preLink(); nextText(); firstLink(); lastText();
    //   },
    // hideTable(){
    //   for ( var i = 0; i<numberRowsInTable; i++ ){
    // theUL.getElementsByTagName("tr")[i].style.display = 'none'; 
    //   }
    // },
    // showPage(){
    //   pageNum.innerHTML = page;
    // },
    // pageCount(){
    //   return Math.ceil(numberRowsInTable/pageSize); 
    // }, 
    // preLink(){
    //   spanPre.innerHTML = "<a herf='javascript:pre();'>上一頁</a>"
    // },
    // preText(){ 
    //   spanPre.innerHTML = "上一頁"; 
    // },
    // nextLink(){
    //   spanNext.innerHTML = "<a herf='javascript:next();'>下一頁</a>"; 
    // }, 
    // nextText(){
    //   spanNext.innerHTML = "下一頁"; 
    // },
    // firstLink(){
    //   spanFirst.innerHTML = "<a href='javascript:first();'>首頁</a>"; 
    // },
    // firstText(){
    //   spanFirst.innerHTML = "首頁"; 
    // }, 
    // lastLink(){
    //   spanLast.innerHTML = "<a href='javascript:last();'>末頁</a>"; 
    // }, 
    // lastText(){ spanLast.innerHTML = "末頁"; 
    // }, 
    // hide(){
    //   for ( var i = pageSize; i<numberRowsInTable; i++ ){
    //     theUL.getElementsByTagName("tr")[i].style.display = 'none'; 
    //   } 
    //   totalPage.innerHTML = pageCount();
    //   pageNum.innerHTML = '1';
    //   nextLink(); lastLink(); 
    // },
    // hide(); 


    // 讓表單上的問卷能照時間排順
    // changeType: function (type) {
    //   var vm = this;
    //   if (vm.sortType == type) {
    //     vm.isReverse = !vm.isReverse;
    //   } else {
    //     vm.isReverse = false;
    //   }
    //   vm.sortType = type;
    // }
  },  
  computed: {
    // sortData() {
    //   var vm = this;
    //   var type = vm.sortType;
    //   return vm.quiz.sort(function (a, b) {
    //     if (vm.isReverse) return b[type] - a[type];
    //     else return a[type] - b[type];
    //   });
    // }
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
        <input v-model="sDate" type="date">
        <input v-model="eDate" type="date">
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
            <th>開始時間</th>
            <th>到期日</th>
            <th>觀看統計</th>
          </tr>
          <!-- <table id="pageListTableBody"> -->
            <tr id="tdLis" v-for="item in quiz" :key="item.id">
              <td>{{ item.id }}</td>
              <a href="/000"><td>{{ item.title }}</td></a>
              <td>{{ item.published }}</td>
              <td>{{ item.startDate }}</td>
              <td>{{ item.endDate }}</td>
              <a href="/002"><td>查看</td></a>
            </tr>
          <!-- </table> -->
        </thead>
      </table>
      <!-- 資料列表分頁製作 -->
      <!-- https://israynotarray.com/javascript/20190505/1432256317/ -->
      <!-- https://blog.csdn.net/Strive279/article/details/120546891 -->
      <!-- <div class="pageCh"> -->
        <!-- <span id="spanFirst">首頁</span>
        <span id="spanPre">上一頁</span>
        <span id="spanNext">下一頁</span>
        <span id="spanLast">末頁</span>
        第<strong id="spanPageNum"></strong>頁/共
        <strong id="spanTotalPage">頁</strong> -->
        <!-- <p v-text="aa"></p>
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
      </div> -->
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
a{
  text-align: center;
}
.table{
  td{
    height: 30px ;
  }
}
.search{
  height: 150px;
  width: 600px;
  background-color: gray;
  margin: 5px;
  font-size: 20pt;
  .srA{
    overflow: auto;
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
}
.pageCh{
  display: flex;
  justify-content: center;
  p{
    left: 50%;
    margin: 0 2px;
  }
}
</style>