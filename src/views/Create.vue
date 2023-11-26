<script>
import { mapState, mapActions } from 'pinia';
import indexState from '../stores/indexState';
export default{
    data(){
        return {
            quizVoList:[],
            title: '',
            description: '',
            published:true,
            startDate: '',
            endDate: '',
            qTitle:'',
            optionType: 'multi', 
            necessary: true,
            option: '',
        };
    },
    components:{
        //匯入
    },
    methods:{
        btnTest() {
            console.log('按鈕有效');
        },
        ...mapActions(indexState, ["getLocation", "setLocation"]),
        fetchCreateData() {
            const requestData = {
                questionnaire: {
                    title: this.title,
                    description: this.description,
                    is_published:this.published,
                    start_date: this.startDate,
                    end_date: this.endDate,
                },
                questionList: [{
                    q_title: this.qTitle,
                    option_type: this.optionType,
                    is_necessary: this.necessary,
                    q_option: this.option.split(';').map(option => option.trim()),//一次輸入並用分號切開選項
                }],
            };
            fetch('http://localhost:8080/api/quiz/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Quiz created successfully:', data);
                console.log(this.startDate);
            })
            .catch(error => {
                console.error('Error creating quiz:', error);
            });
        },
    },
    computed:{
    }
}
</script>

<template>
<body>
    <main>
        <button>生成問卷</button>
        <button>回饋</button>
        <button @click="btnTest">統計</button>
        <div class="center">
            <label class="q_name" for="">問卷名稱:</label>
            <input id="title" type="text" v-model="title" placeholder="問卷名稱">
            <label for="">問卷說明:</label>
            <textarea id="description" v-model="description" placeholder="問卷說明"></textarea>
            <label for="">開始日期:</label>
            <input id="startDate" type="date" v-model="startDate">
            <label for="">結束日期:</label>
            <input id="endDate" type="date" v-model="endDate">
            <label for="">問題選項種類:</label>
            <select v-model="optionType">
                <option value="single">單選</option>
                <option value="multi">多選</option>
            </select>
            <label for="">問題選項內文:</label>
            <input v-model="qTitle" placeholder="請輸入你的問題">
            <!-- <input v-model="necessary" type="checkbox">是否必選 -->
            <label for="">問題的選項:</label>
            <input v-model="option" placeholder="請用';'分開各個選項">
        </div>
        <div class="next">
            <button class="cencelBtn" @click="btnTest">取消</button>
            <button class="nextBtn" @click="fetchCreateData">發布</button>
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
    display: flex;
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