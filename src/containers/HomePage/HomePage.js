import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import * as actions from '../../store/actions';

import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchItemsRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listItems !== this.props.listItems) {
            this.setState({
                itemsRedux: this.props.listItems
            })
        }
    }
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,  
            touchMove: false,
        };

        let itemsData = this.state.itemsRedux;
        return (
            <div>
                <HomeHeader isShowBanner={true} />
                <Specialty
                    settings={settings}
                />
                <MedicalFacility
                    settings={settings}
                />
                <OutStandingDoctor
                    settings={settings} data={itemsData}
                />

                <HandBook settings={settings} />
                <About />
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        listItems: state.admin.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsRedux: () => dispatch(actions.fetchAllItemsStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
