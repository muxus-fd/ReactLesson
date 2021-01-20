const profileStore = {
    profile :{
        name:"Хулио",
        age:'10',
        countchats:"5",
        date:"10.10.2020",
    }
}

export default function profileReducer(store = profileStore, action){
    return store;
}