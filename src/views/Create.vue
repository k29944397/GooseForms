<script>
export default{
    data(){
        return {
            title: '',
            description: '',
            published1:false,
            startDate: '',
            endDate: '',
            qTitle:'',
            optionType: 'multi', 
            necessary: true,
            option: '',
        };
    },
    methods:{
        btnTest() {
            console.log("按鈕正常");
        },
        fetchCreateData() {
            const currentDate = new Date();
            // console.log(currentDate);
            const startDate = new Date(document.getElementById("startDate").value);
            // console.log(startDate);
            const endDate = new Date(document.getElementById("endDate").value);
            // console.log(endDate);
            const published1 = currentDate >= startDate && currentDate <= endDate; 
            // console.log(published1);
            const requestData = {
                questionnaire: {
                    title: this.title,
                    description: this.description,
                    published: published1,
                    startDate: document.getElementById("startDate").value.replace('/','-'),
                    endDate: document.getElementById("endDate").value.replace('/','-'),//切換
                },
                question_list: [{
                    qTitle: this.qTitle,
                    optionType: this.optionType,
                    necessary: this.necessary,
                    option: this.option,
                    // .split(';').map(option => option.trim()),//一次輸入並用分號切開選項
                }],
            };
            // console.log(requestData.questionnaire.startDate);
            fetch('http://localhost:8080/api/quiz/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Create success:',requestData.question_list);
            })
            .catch(error => {
                console.error('Error creating:', error);
            });
        },
    },
}
</script>

<template>
<body>
    <main>
        <button disabled>*生成問卷</button>
        <a href="/cQ"><button>回饋</button></a>
        <a href="/002"><button>統計</button></a>
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
                <option value="single">single</option>
                <option value="multi">multi</option>
            </select>

            <label for="">問題:</label>
            <input v-model="qTitle" placeholder="請輸入你的問題">
            <!-- <input v-model="necessary" type="checkbox">是否必選 -->
            <label for="">問題的選項:</label>
            <input v-model="option" placeholder="請用';'分開各個選項">
            <!-- <button>新增問題</button> -->
        </div>
        <div class="next">
            <a href="/homeB"><button class="cencelBtn">取消</button></a>
            <button class="postBtn" @click="fetchCreateData">發布</button>
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