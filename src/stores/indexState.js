import { defineStore } from 'pinia'

export default defineStore('indexState',{
   //data
    state:()=>({
        location:1,
        today:new Date().toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}),
    }),
   //components
    getters:{
    //locationInfo:(state)=>{'現在位置$(state.location)'}
        locationInfo(state){
            return '現在位置${state.location}'
        }
    },
    //methods
    actions:{
        getLocation(){
            console.log(this.location);
        },
        setLocation(num){
            this.location = num;
        }
    }
})