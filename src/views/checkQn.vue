<script>
import { mapState, mapActions } from 'pinia';
import indexState from '../stores/indexState';
export default{
    data(){
        return {
            quiz:[],
            // quizs:[],
            title: '',
            description: '',
            published:false,
            startDate: '',
            endDate: '',
            qTitle:'',
            optionType: 'multi', 
            necessary: true,
            option: '',
        };
    },
    methods:{
        ...mapActions(indexState, ["getLocation","setLocation"]),
        fetchGetData() {
            this.quiz=[]//清空避免重複顯示
            fetch('http://localhost:8080/api/quiz/search2')
            .then(response => response.json())
            .then(data => {
                data.quizVoList.reverse()
                data.quizVoList.forEach(element => {
                    this.quiz.push(element.questionnaire);
                });
                console.log(data)
            });
        },
    },
    computed:{
        ...mapState(indexState, ["location","today","locationInfo"]),
    },
}
</script>

<template>
<body>
    <main>
        <a href="/Create"><button>生成問卷</button></a>
        <button disabled>*回饋</button>
        <a href="/002"><button>統計</button></a>
        <div class="center">
        <button @click="fetchGetData">取得上一筆資料</button>
        <thead>
            <tr>
            <th>id</th>
            <th>問卷標題</th>
            <th>問卷內文</th>
            <th>狀態</th>
            <th class="click">開始時間</th>
            <th class="click">到期日</th>
            </tr>
            <tr v-for="element in quiz.slice(0, 1)" :key="element.id" >
            <td>{{ element.id }}</td>
            <td>{{ element.title }}</td>
            <td>{{ element.description }}</td>
            <td>{{ element.published }}</td><!--啟用狀態-->
            <td>{{ element.startDate }}</td>
            <td>{{ element.endDate }}</td>
            <!-- 問卷/問題 -->
            </tr>
            <tr>
                <th>問題id</th>
                <th>問題標題</th>
                <th>問題種類</th>
                <th>問題是否必選</th>
                <th>問題選項</th>
            </tr>
            <tr v-for="element in quiz" :key="element.qnId"> <!--抓不到-->
                <td>{{ element.qnId }}</td>
                <td>{{ element.qTitle }}</td>
                <td>{{ element.optionType }}</td>
                <td>{{ element.necessary }}</td>
                <td>{{ element.Option }}</td>
            </tr>
            
        </thead>
            <!-- <label class="q_name" for="">問卷名稱:</label>
            <label id="title">"qn.title"</label>
            <label for="">問卷說明:</label>
            <label id="description">"qn.description"</label>
            <label for="">開始日期:</label>
            <label id="startDate" >"qn.startDate"</label>
            <label for="">結束日期:</label>
            <label id="endDate" >"qn.endDate"</label>
            <label for="">問題選項種類:</label>
            <label for="">"q.optionType"</label>
            <label for="">問題:</label>
            <label for="">"q.title"</label>
            <label for="">問題的選項:</label>
            <label for="">"q.option"</label>
            <button>新增問題</button>
            <p>創造日期:</p><p>{{ today }}</p> -->
        </div>
        <div class="next">
            <button >確認並送出問卷</button>
        </div>
    </main>
</body>
</template>

<style lang="scss" scoped>
main{
    height: 510px;
    width: 800px;
    border: 1px solid black;
    flex-wrap:wrap;
}
.center{
    height: 400px;
    width: 600px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    flex-wrap:wrap;
}
textarea{
    height: 150px;
    width: 250px;
}
.next{
    height: 50px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        margin: 5px;
    }
}
</style>