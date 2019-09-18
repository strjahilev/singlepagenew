import React from 'react';
import {editBook} from "../actions/actions";
import Form from "./form";
import {connect} from "react-redux";
import List from "./list";

const EditBook = (props) => (
    <div>
    <Form book={props.book}
    onEditBook={props.onEditBook}/>
    <List/>
        </div>

);
const mapStateToProps = (state, props) => {
    return {
        book: state.getBook.find((book) =>
            (book.id === props.match.params.id))
    };
};
const dispatchMapToProps = (dispatch)=> {
    return {
        onEditBook: (book) => {
            dispatch(editBook(book.id, book))
        }
    }
};
export default connect(
    mapStateToProps,
    dispatchMapToProps
) (EditBook);
