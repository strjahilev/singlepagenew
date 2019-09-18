import { combineReducers } from 'redux';

import add from './add';
import getBook from './get-delete';

export default combineReducers({
    add,
    getBook,
        })