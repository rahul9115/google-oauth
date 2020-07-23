import React from 'react';
import { connect } from "react-redux";
import { Component } from 'react';
import css from "./assets/css/main.css";
import image from "./assets/images/index.jpg"


class Body extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return
            case false:
                return
            default:
                return [

                    <div class="title__action"><a href="/typeform" class="btn btn-success">Fill Application Form</a></div>
                ];



        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="container">

                <body>
                    <div class="site" id="page">
                        <a class="skip-link sr-only" href="#main">Skip to content</a>


                        <section class="hero-section hero-section--image clearfix clip">
                            <div class="hero-section__wrap">
                                <div class="hero-section__option">
                                    <img src={image} class="bodyimg" alt="Hero section image"></img>
                                </div>


                                <div class="container1">
                                    <div class="row">
                                        <div class="offset-lg-2 col-lg-8">
                                            <div class="title-01 title-01--11 text-center">
                                                <h2 class="title__heading">
                                                    <h3 className="app">Please fill the loan application form.</h3> &nbsp;

                                                <span class="title__effect is-visible"><h3 className="app1">कृपया ऋण आवेदन फॉर्म भरें !</h3></span>


                                                </h2>

                                                {this.renderContent()}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>





                </body>
            </div >


        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Body);