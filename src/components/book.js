import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBook } from '../actions/actions';


const Book = ({ id, title, dispatch}) => (

    <div>
        <Link to={`/book/${id}`} activestyle={{color:"red"}}>
            <p key={id}>{title}</p>
        </Link>
        <button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Delete</button>
        {/*<button onClick={}>Edit</button>*/}
    </div>
);
export default connect()(Book);