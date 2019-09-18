import React from 'react';
import {connect} from "react-redux";
import Book from "./book";
import {Link} from "react-router-dom";


const List = props => {

    return <div>
        Book List:
        <ul>{props.books.map(book => {
            console.log(book.title);
            return (<li key={book.id}>
                    <Book {...book} /></li>
            )
        })}
        </ul>
    </div>
};
let mapStateToProps=(state) => {
    return {
        books: state.getBook
    }
};

export default connect(
    mapStateToProps
) (List);

