import React from 'react';
import { connect } from 'react-redux'
import {add, getBooks} from '../actions/actions';
import { Link } from 'react-router-dom';

class Form extends React.Component {
    constructor(props){
        super (props);


        this.onTitleChange = (this.onTitleChange.bind(this));

        this.state = {
            id: props.book? props.book.id: '',
            title: props.book ? props.book.title : '',
        };
                        console.log(this.state)

    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            id: nextProps.book.id,
            title: nextProps.book.title,

        });
    };



    addBook(e){
        e.preventDefault();
        this.props.onAddBook(
            {
                id: this.state.id,
                title: this.Input.value,
            },
        );

       // this.props.onGetBook();
        this.Input.value='';

    };
    edititem(e){
        e.preventDefault();
        this.props.onEditBook(
            {
                id: this.state.id,
                title: this.state.title
            }
        );
        // this.props.onGetBook();

        this.Input.value='';

    }
    onTitleChange(e) {
        e.preventDefault();

        const title = e.target.value;
        this.setState(() => ({
            title: title }));

    }

    render() {
        return <div style={{background:"gray"}}>
            <h1> list</h1>
            <input type="text"
                   value={this.state.title}
                   onChange={this.onTitleChange}
                   ref={(input) => { this.Input = input; }} />
            <button onClick={this.addBook.bind(this)}
                    style={{background:"pink"}}>
                ADD
            </button>
            <button onClick={this.edititem.bind(this)}>{<Link to={'/add'}>EDIT</Link>}</button>


        </div>

    }
}
let mapStateToProps=(state,props) => {
    return {



    }};
let mapDispatchToProps=(dispatch)=> {
    return {
        onAddBook: (book) => {dispatch(add(book))},
        onGetBook: () => {dispatch(getBooks())
        },
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Form);