const INTI_STATE = {
    carts: []
}


export const cartReducer = (state = INTI_STATE, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const index = state.carts.findIndex((e) => e.id === action.payload.id)
            if (index >= 0) {
                state.carts[index].qnty += 1;
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                const temp = {...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case 'REMOVE_CART':

            const data = state.carts.filter((e) => e.id !== action.payload)
            return {
                ...state,
                carts: data
            }

        case 'RMV_ONE':
            const indexItem = state.carts.findIndex((e) => e.id === action.payload.id)
            if (state.carts[indexItem].qnty >= 1) {
                state.carts[indexItem].qnty -= 1;
                return {
                    ...state,
                    carts: [...state.carts]
                }

            } else if (state.carts[indexItem].qnty === 1) {
                const data = state.carts.filter((e) => e.id !== action.payload.id)
                return {
                    ...state,
                    carts: data
                }
            }



        default:
            return state
    }

}