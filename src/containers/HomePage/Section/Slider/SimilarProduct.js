import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SimilarProduct.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { getAllSpecialty } from '../../../../services/userService';
import { withRouter } from 'react-router';
import { getDetailInforItems } from '../../../../services/userService';


class SimilarProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailItem: [],
        }
    }
   
   

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;

            let res = await getDetailInforItems(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailItem: res.data,
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    handleViewDetailItem = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${item.id}`)    
        }
        window.location.reload(false)
    }
    
    render() {
        let {detailItem} = this.state
        let itemsRedux = this.props.itemsRedux;
        console.log('detailItem', detailItem)
        return (    
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                            SẢN PHẨM TƯƠNG TỰ
                        </span>
                        <button className="btn-section">
                            XEM THÊM
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>                              
                            {itemsRedux && itemsRedux.length > 0 &&
                                itemsRedux.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
                                    }
                                    return (
                                        <div 
                                            key={index} 
                                            className="section-customize specialty-child" 
                                            onClick={() => this.handleViewDetailItem(item)}                               
                                        >
                                            <div className="bg-image section-specialty" 
                                                style={{ backgroundImage: `url(${imageBase64})` }}>      
                                                <div className='shopping'>
                                                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                                                </div>
                                            </div>                                        
                                            <div className='content-name'>
                                                <div className="item-name">{item.name}</div>
                                                <div className="price-name">{item.priceBeforeSale} đ</div>
                                                <div className="price-name-onsale">{item.priceAfterSale} đ</div>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SimilarProduct));
