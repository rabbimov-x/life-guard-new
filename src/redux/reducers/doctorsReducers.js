import { DOCTORS } from "../../tools/constants";

const initialState = {
    meta: 0,
    doctorsCard: [
        {di:0 , name: "onna", username: "Boboyva",email: "user@gmail.com",},
        {di:1 , name: "anna", username: "Dodiyova",email: "user@gmail.com",},
        {di:2 , name: "Anna", username: "Bodiyova",email: "user@gmail.com",},
        {di:3 , name: "Anna", username: "Bodiyova",email: "user@gmail.com",},
        {di:4 , name: "Anna", username: "Bodiyova",email: "user@gmail.com",}
    ]
}

export const DoctorsRuducers = (state = initialState , action) => {
    
    
    if(action.type === DOCTORS){
        
       
        return{
            ...state,
            ...action.paload
        }
        
    }
    return state;
}



