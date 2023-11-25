<script>
import { mapState, mapActions } from 'pinia';
import indexState from '../stores/indexState';
export default{
    data(){
        return {
            title: '',
            description: '',
            startDate: '',
            endDate: '',
        };
    },
    components:{
        //匯入
    },
    methods:{
        fetchCreateData() {
            console.log("111")
        const requestData = {
        questionnaire: {
            title: this.title,
            description: this.description,
            // 
        },
        questionList: [] // 
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
            // 
        })
        .catch(error => {
        console.error('Error creating quiz:', error);
        });
        },
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
<body>
    <main>
        <button>問卷</button>
        <button>題目</button>
        <button>回饋</button>
        <button>統計</button>
        <div class="center">
            <label class="q_name" for="">問卷名稱:</label>
            <input id="title" type="text" v-model="title" placeholder="問卷名稱">
            <label for="">問卷說明:</label>
            <textarea id="description" v-model="description" placeholder="問卷說明"></textarea>
            <label for="">開始日期:</label>
            <input id="startDate" type="date" v-model="startDate">
            <label for="">結束日期:</label>
            <input id="endDate" type="date" v-model="endDate">
        </div>
        <button class="cencelBtn">取消</button>
        <button class="nextBtn" @click="fetchCreateData">發布</button>
    </main>
</body>
</template>

<style lang="scss" scoped>
main{
    height: 510px;
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
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

</style>