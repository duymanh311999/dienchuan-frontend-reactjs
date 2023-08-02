import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router';

class HandBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrItems: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listItemsSachRedux !== this.props.listItemsSachRedux) {
            this.setState({
                arrItems: this.props.listItemsSachRedux
            })
        }
    }

    componentDidMount() {
        this.props.fetchItemsSachredux(); 
    }

    handleViewDetailIem = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${item.id}`)
        }
    }
    render() {
        let arrItems = this.state.arrItems;
        // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors)
        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                             Sách
                        </span>
                        <button className="btn-section">
                            Xem thêm
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                                        
                            {arrItems && arrItems.length > 0
                                && arrItems.map((item, index) => {
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
        listItemsSachRedux: state.admin.itemsSach
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsSachredux: () => dispatch(actions.fetchItemsSach()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HandBook));
