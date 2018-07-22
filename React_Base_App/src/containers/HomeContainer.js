import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render( ) {
        return(
            <div className="div-main">
                <Header/>
                <div className="body-page">

                </div>
                <Footer/>
            </div>
        );
    }

}