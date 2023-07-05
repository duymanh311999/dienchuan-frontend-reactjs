import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router';

class OutStandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemsRedux: [],
            menuApp: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listItemsCayLan !== this.props.listItemsCayLan) {
            this.setState({
                itemsRedux: this.props.listItemsCayLan
            })
        }
    }

    componentDidMount() {
        this.props.fetchItemsCayLanRedux();
    }

    handleViewDetailDoctor = (doctor) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`)
        }
    }
    render() {
        let itemsRedux = this.state.itemsRedux;
        console.log("Hello world!", this.props.listItemsCayLan)
        // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors)
        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                             Máy Massage Spa phụ trợ
                        </span>
                        <button className="btn-section">
                            Xem thêm
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                                        {/* <div className="section-customize specialty-child">
                                           < div className="bg-image section-specialty">         
                                                <div className='shopping'>
                                                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                                            </div>
                                        </div>
                                            <div/>
                                            <div className='content-name'>
                                                <div className="item-name">Bộ điện chuẩn quà tặng</div>
                                                <div className="price-name">2.700.000đ</div>
                                                <div className="price-name-onsale">1.200.000đ</div>
                                            </div>
                                        </div> */}
                                        
                            {itemsRedux && itemsRedux.length > 0
                                && itemsRedux.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
                                    }
                                    return (
                                        <div className="section-customize" key={index} onClick={() => this.handleViewDetailDoctor(item)}>
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
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,

        listItemsCayLan: state.admin.itemsCayLan
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsCayLanRedux: () => dispatch(actions.fetchItemsCayLan()),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));
