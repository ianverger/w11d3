const ADD = 'cart/add';

export const addToCart = (id) => {
    return {
        type: ADD,
        objId: id,
    }


}
export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD:

            let count = 1
            if (state[action.objId]) {
                count = state[action.objId].count + 1
            }

            const newState = {...state,
                 [action.objId]: {['id']: action.objId , ['count']:  count }
                 
            }
            return newState
        default:
            return state;
    }

}