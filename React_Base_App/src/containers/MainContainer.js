import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render( ) {
        return(
            <div className="div-main">

                <Footer/>
            </div>
        );
    }

}