import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/jumbotron';
import FormContainer from '../components/Form/formContainer';
import Input from '../components/Form/input';
import FormBtn from '../components/Form/formBtn';



class Search extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: ""
    }

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
        // event.preventDefault();
        // if (this.state.title && this.state.author) {
        //     API.saveBook({
        //         title: this.state.title,
        //         author: this.state.author,
        //         synopsis: this.state.synopsis
        //     })
        //         .then(res => this.loadBooks())
        //         .catch(err => console.log(err));
        // }
    };

    render() {
        return (
            <div>
              <Jumbotron/>
              <FormContainer>
                <Input onChange={ this.handleInputChange } />
                <FormBtn disabled={ !(this.state.topic && this.state.startYear) } onClick={ this.handleFormSubmit } />
              </FormContainer>
            </div>
        )
    }
}

export default Search;