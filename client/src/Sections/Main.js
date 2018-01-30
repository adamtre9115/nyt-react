import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/jumbotron';
import FormContainer from '../components/Form/formContainer';
import Input from '../components/Form/input';
import FormBtn from '../components/Form/formBtn';
import Results from './Results';
import API from '../utils/api';
import './main.css';


class Main extends Component {

    state = {
        topic: "",
        startYear: "",
        endYear: "",
        articles: []
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
        event.preventDefault();
        if (this.state.topic && this.state.startYear && this.state.endYear) {
            API.searchArticles({
                topic: this.state.topic,
                startYear: this.state.startYear,
                endYear: this.state.endYear
            })
                // .then(res => this.loadBooks())
                // .catch(err => console.log(err));
                .then(res => this.setState({
                    topic: "",
                    startYear: "",
                    endYear: "",
                    articles: res
                }));
        }
    };

    handleSaveSubmit = event => {
        event.preventDefault();
        // if (this.state.topic && this.state.startYear && this.state.endYear) {
        //     API.searchArticles({
        //         topic: this.state.topic,
        //         startYear: this.state.startYear,
        //         endYear: this.state.endYear
        //     })
        //         // .then(res => this.loadBooks())
        //         // .catch(err => console.log(err));
        //         .then(res => this.setState({
        //             topic: "",
        //             startYear: "",
        //             endYear: "",
        //             articles: res
        //         }));
        // }
        console.log(`clicked!`);
    };
    createResults = () => {
        return (
            <div className="resultsSect">
              <FormContainer>
                <h3 className="text-center">Results</h3>
                { this.state.articles.map(article => (
                      <Results key={ article._id } uniqueId={ article._id } headline={ article.headline.main } snippet={ article.snippet } url={ article.web_url } pubDate={ article.pub_date }
                        click={ this.handleSaveSubmit } />
                  )) }
              </FormContainer>
            </div>
        )
    }

    render() {
        return (

            <div>
              <Jumbotron/>
              <FormContainer id="searchSect">
                <Input onChange={ this.handleInputChange } />
                <FormBtn disabled={ !(this.state.topic && this.state.startYear && this.state.endYear) } onClick={ this.handleFormSubmit } say="Search" />
              </FormContainer>
              { /* Begin results section */ }
              { this.createResults() }
            </div>
        )
    }
}

export default Main;