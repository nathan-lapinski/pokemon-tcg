export function reducer(state, action) {
    switch (action.type) {

        case 'UPDATE_CURRENT_DECK':
            console.log(`reducer: ${state}, ${action}`);
            return {
                ...state,
                currentDeck: action.payload
            };

        default:
            return state;
    }
}