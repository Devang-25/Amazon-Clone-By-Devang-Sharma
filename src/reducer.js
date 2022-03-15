// Author: @devangs

export const initialState =  {
    basket : [],
    user: null,
};

export const getBasketTotal = (basket)=> (basket?.reduce((amount, item)=>  item.price + amount, 0));

// export function getBasketTotal(basket){
//     return basket?.reduce(function(amount, item){
//         return (item.price + amount ,0);
//     });
// }

function reducer(state, action){
   
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user : action.user
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket : []
            };
        case "ADD_TO_BASKET":
            //logic for adding items in basket
            return {
                ...state,
                basket : [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            //logic for removing items in basket
            let newItems = [...state.basket]                           
            const index = state.basket.findIndex((item)=>  item.id === action.id);
            if (index>=0){
                newItems.splice(index,1);
            } else {
                console.warn("Can't remove the product from basket");
            }
            
            return {
                ...state,
                basket : newItems,
            };

         default:
             return state;       
    }
}

export default reducer;