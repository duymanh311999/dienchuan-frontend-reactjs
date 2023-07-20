import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { getAllSpecialty } from '../../../services/userService';
import { withRouter } from 'react-router';
import * as actions from '../../../store/actions';

class Specialty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsRedux: [],
        }
    }

    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listItemsThietBi !== this.props.listItemsThietBi) {
            this.setState({
                itemsRedux: this.props.listItemsThietBi
            })
        }
    }

    async componentDidMount() {
        this.props.fetchItemsThietBiRedux();
    }

    handleViewDetailIem = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${item.id}`)
        }
        window.location.reload(false)
    }
    render() {
        let itemsRedux = this.state.itemsRedux;
        return (
            <div className="section-share section-outstanding-doctor">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">
                         Thiết bị
                    </span>
                    <button className="btn-section">
                        Xem thêm
                    </button>
                </div>
                <div className="section-body">
                    <Slider {...this.props.settings}>
                                    
                        {itemsRedux && itemsRedux.length > 0
                            && itemsRedux.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
                                }
                                return (
                                    <div className="section-customize" key={index} onClick={() => this.handleViewDetailIem(item)}>
                                        <div className="customize-border">
                                            <div className="outer-bg">
                                                <div className="bg-image section-outstading-doctor"
                                                    style={{ backgroundImage: `url(${imageBase64})` }}
                                                />
                                            </div>
                                            <div className="item-name-price text-center">
                                                <div className='name'>{item.name}</div>
                                                <div>                                                                                                 
                                                    <div className={item.priceBeforeSale === '' ? 'priceBeforeSaleNone' : 'priceBeforeSale'}>{item.priceBeforeSale} đ</div>
                                                    <div className='priceAfterSale'>{item.priceAfterSale} đ</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        listItemsThietBi: state.admin.itemsThietBi
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsThietBiRedux: () => dispatch(actions.fetchItemsThietBi()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
