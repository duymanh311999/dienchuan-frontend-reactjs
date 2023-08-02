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

    handleViewDetailIem = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${item.id}`)
        }
    }
    render() {
        let itemsRedux = this.state.itemsRedux;

        console.log('props',this.props)

        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                            Cây lăn
                        </span>
                        <button className="btn-section" >
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
        listItemsCayLan: state.admin.itemsCayLan,
        listItems: state.admin.items,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsCayLanRedux: () => dispatch(actions.fetchItemsCayLan()),
        fetchItemsRedux: () => dispatch(actions.fetchAllItemsStart()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));
