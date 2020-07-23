import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import type from "./typeform"
import Body from "./body"
import Body1 from "./body1"

const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();

    }
    render() {
        return (

            <div className="container" >
                <BrowserRouter>
                    <div>
                        <Header />

                        <Route exact path='/' component={Body} />
                        <Route exact path='/surveys' component={Body1} />
                        <Route exact path='/typeform' component={type} />
                        <Route path='/surveys/new' component={SurveyNew} />

                    </div>
                </BrowserRouter>

            </div >
        );
    }

};
export default connect(null, actions)(App);
