<script>
import { mapState, mapActions } from 'pinia';
import indexState from '../stores/indexState';
export default{
    data(){
        return {
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
            console.log(this.startDate);
        },
        ...mapActions(indexState, ["getLocation", "setLocation"]),
        fetchCreateData() {

            //js端的date資料是String，但java的是LocalDate
            // const startDateString = this.startDate;
            // const endDateString = this.endDate;
            // this.startDate = startDateString ? new Date(startDateString) : null;
            // this.endDate = endDateString ? new Date(endDateString) : null;
            // const isoStartDateString = this.startDate ? this.startDate.toLocaleDateString() : null;
            // const isoEndDateString = this.endDate ? this.endDate.toLocaleDateString() : null;
            const requestData = {
                questionnaire: {
                    title: this.title,
                    description: this.description,
                    published:this.published,
                    startDate: document.getElementById("startDate").value.replace('/','-'),
                    endDate: document.getElementById("endDate").value.replace('/','-'),
                    // start_date: isoStartDateString,
                    // end_date: isoEndDateString,
                },
                questionList: [{
                    qTitle: this.qTitle,
                    optionType: this.optionType,
                    necessary: this.necessary,
                    option: this.option.split(';').map(option => option.trim()),//一次輸入並用分號切開選項
                }],
            };
            console.log(requestData.questionnaire.startDate);
            fetch('http://localhost:8080/api/quiz/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Create success:', data);
                console.log(requestData.questionnaire.startDate);
            })
            .catch(error => {
                console.error('Error creating:', error);
            });
        },
    },
    backBtn(){
        this.$router.push("/HomeB");
    },
    computed:{
    }
}
</script>

<template>
<body>
    <main>
        <button @click="btnTest()">生成問卷</button>
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
            <a href="/homeB"><button class="cencelBtn">取消</button></a>
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