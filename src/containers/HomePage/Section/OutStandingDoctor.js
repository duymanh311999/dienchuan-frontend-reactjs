import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router';
import { useCart } from 'react-use-cart';

const OutStandingDoctor = (props) => {

    const { addItem } = useCart();

    const addToCart = () => {
        addItem(props.data)
    }

    const handleViewDetailIem = (item) => {
        if (props.history) {
            props.history.push(`/detail-doctor/${item.id}`)
        }
    }
    let itemsRedux = props.data;

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
                    <Slider {...props.settings}>                            
                        {itemsRedux && itemsRedux.length > 0
                            && itemsRedux.map((item, index) => {                                
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
                                }                                                
                                return (                                                             
                                <div className="section-customize" key={index} onClick={() => handleViewDetailIem(item)}>
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
                                                    <div className='price'>{item.price} đ</div>
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



export default withRouter((OutStandingDoctor));
