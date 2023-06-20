import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SimilarProduct.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { getAllSpecialty } from '../../../../services/userService';
import { withRouter } from 'react-router';

class SimilarProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSpecialty: []
        }
    }


    async componentDidMount() {
        let res = await getAllSpecialty();
        if (res && res.errCode === 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : []
            })
        }
    }

    handleViewDetailSpecialty = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-specialty/${item.id}`)
        }
    }
    render() {
        let { dataSpecialty } = this.state;

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
                                        <div className="section-customize specialty-child">
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
                                        </div>
                                        <div className="section-customize specialty-child">
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
                                        </div>
                                        <div className="section-customize specialty-child">
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
                                        </div>
                                        <div className="section-customize specialty-child">
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
                                        </div>
                                        <div className="section-customize specialty-child">
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
                                        </div>
                                        
                                       
                            {dataSpecialty && dataSpecialty.length > 0 &&
                                dataSpecialty.map((item, index) => {
                                    return (
                                        <div
                                            className="section-customize specialty-child"
                                            key={index}
                                            onClick={() => this.handleViewDetailSpecialty(item)}
                                        >
                                            <div
                                                className="bg-image section-specialty"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className="specialty-name">{item.name}</div>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SimilarProduct));
