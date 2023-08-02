import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { getAllClinic } from '../../../services/userService';
import { withRouter } from 'react-router';
import * as actions from '../../../store/actions';

class MedicalFacility extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsRedux: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listItemsQueDo !== this.props.listItemsQueDo) {
            this.setState({
                itemsRedux: this.props.listItemsQueDo
            })
        }
    }

    async componentDidMount() {
        this.props.fetchItemsQueDoRedux();
    }

    handleViewDetailIem = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${item.id}`)
        }
     
    }

    render() {
        let itemsRedux = this.state.itemsRedux;
        return (
            <div className="section-share section-outstanding-doctor" >
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Que dò</span>
                        <button className="btn-section">xem thêm</button>
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
                                        <div className="section-customize" key={index} onClick={() => this.handleViewDetailIem(item)}>
                                        < div className="customize-border">         
                                            <div className="outer-bg">
                                                <div className="bg-image section-outstading-doctor"
                                                    style={{ backgroundImage: `url(${imageBase64})` }}
                                                />
                                            </div>
                                        </div>
                                         <div/>
                                         <div className="item-name-price text-center">
                                                <div className='name'>{item.name}</div>
                                                <div>                                                                                        
                                                    <div className={item.priceBeforeSale === '' ? 'priceBeforeSaleNone' : 'priceBeforeSale'}>{item.priceBeforeSale} đ</div>
                                                    <div className='priceAfterSale'>{item.priceAfterSale} đ</div>
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
        listItemsQueDo: state.admin.itemsQueDo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsQueDoRedux: () => dispatch(actions.fetchItemsQueDo()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));
