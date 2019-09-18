export default function getBook (state=[], action){
    if(action.type==='GET'){
        return action.books


    }
    if (action.type === 'ADD'){
        return [
            ...state, action.book
        ]
    }
    if (action.type === 'EDIT'){
        return state.map((book) => {
            if (book.id === action.id) {
                return {
                    ...book,
                    ...action.updates

                };

            } else {
                return book;
            }

        })
    }
    if(action.type==='REMOVE'){
        return state.filter(({ id }) => id !== action.id);


    }

    return state;
}