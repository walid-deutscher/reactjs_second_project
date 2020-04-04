import  { ADD_DATA ,REMOVE_DATA ,UPDATE_DATA} from'../actions/types'

export  default function list(state,action){

  
    switch(action.type){
        case ADD_DATA :{
            if(state.topics.lenght ==0){return [] ;
              }
              

          state.topics.push(action.data)
           return state;
        }
        case REMOVE_DATA :{

   const item_index=action.data.id;
   const  pos = state.topics.map((e)=> e.id).indexOf(item_index); 
     state.topics.splice(pos,1);

 
           return  state ;
        }
        case UPDATE_DATA:{
   
            const item_index=action.data.id;
         const  pos = state.topics.map((e)=> e.id).indexOf(item_index);
   

     state.topics[pos]=action.data.data ;
 
              return  state ;
           }
        default:  if(state===undefined){
            return []
        }
        return state

    }

}