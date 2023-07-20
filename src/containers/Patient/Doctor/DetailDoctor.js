import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss';
import { getDetailInforItems } from '../../../services/userService';
import DoctorSchedule from './DoctorSchedule';
import DoctorExtraInfor from './DoctorExtraInfor';
import LikeAndShare from '../SocialPlugin/LikeAndShare';
import Comment from '../SocialPlugin/Comment';
import HomeFooter from '../../HomePage/HomeFooter';
import SimilarProduct from '../../HomePage/Section/Slider/SimilarProduct';
import NewProduct from '../../HomePage/Section/Slider/NewProduct';
import BestSaleProduct from '../../HomePage/Section/Slider/BestSaleProduct';
import * as actions from '../../../store/actions';

class DetailDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {},
            currentItemId: -1,
            itemsReduxSach: [],
            itemsReduxQueDo: [],
            itemsReduxCayLan: [],
            itemsReduxThietBi: [],
        }
    }

    async componentDidMount() {
        this.props.fetchItemsSachredux();
        this.props.fetchItemsQueDoRedux();
        this.props.fetchItemsCayLanRedux();
        this.props.fetchItemsThietBiRedux();

        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentItemId: id
            })

            let res = await getDetailInforItems(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailItem: res.data,
                })
            }
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listItemsSach !== this.props.listItemsSach) {
            this.setState({
                itemsReduxSach: this.props.listItemsSach
            })
        }
        if (prevProps.listItemsQueDo !== this.props.listItemsQueDo) {
            this.setState({
                itemsReduxQueDo: this.props.listItemsQueDo
            })
        }
        if (prevProps.listItemsCayLan !== this.props.listItemsCayLan) {
            this.setState({
                itemsReduxCayLan: this.props.listItemsCayLan
            })
        }
        if (prevProps.listItemsThietBi !== this.props.listItemsThietBi) {
            this.setState({
                itemsReduxThietBi: this.props.listItemsThietBi
            })
        }
    }
   

    render() {
        let itemsReduxSach = this.state.itemsReduxSach;
        let itemsReduxQueDo = this.state.itemsReduxQueDo;
        let itemsReduxCayLan = this.state.itemsReduxCayLan;
        let itemsReduxThietBi = this.state.itemsReduxThietBi;
        let { detailItem } = this.state;

        let handleViewDetailItems = this.props.handleViewDetailItems

        let currentURL = +process.env.REACT_APP_IS_LOCALHOST === 1 ?
            "https://eric-restaurant-bot-tv.herokuapp.com/" : window.location.href;

            let settings = {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
            };

            let itemsRedux = [];
        
            if(detailItem && detailItem.typeOf === 'Sách'){
                itemsRedux =  this.state.itemsReduxSach
            }
            if(detailItem && detailItem.typeOf === 'Cây lăn'){
                itemsRedux =  this.state.itemsReduxCayLan
            }
            if(detailItem && detailItem.typeOf === 'Que dò'){
                itemsRedux =  this.state.itemsReduxQueDo
            }
            if(detailItem && detailItem.typeOf === 'Thiết bị'){
                itemsRedux =  this.state.itemsReduxThietBi
            }
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='buying-container'>
                        <div className='banner'>
                            <h1>Sản phẩm</h1>
                            <div className='detail'>
                                <span>Trang chủ</span> <span> - </span>
                                <span>Sản phẩm</span> <span> - </span>
                                <span>{detailItem && detailItem.typeOf  ? detailItem.typeOf : ''}</span> <span> - </span>
                                <span> {detailItem && detailItem.name ? detailItem.name : ''}</span>
                            </div>
                        </div>
                        

                        <div className='buying-content row'>
                            <div className='content-left col-8'>
                               <div className='item col-8 row'>
                                    <div className='col-6 image'>
                                    <div
                                        className="child-image"
                                        style={{ backgroundImage: `url(${detailItem && detailItem.image ? detailItem.image : ''})` }}>

                                    </div>
                                    </div>
                                    <div className='col-6 text'>
                                        <h1>{detailItem && detailItem.name ? detailItem.name : ''}</h1>
                                        <div className='price'>
                                                <span className={detailItem && detailItem.priceBeforeSale === '' ? 'before-sale-none' : 'before-sale'}>{detailItem && detailItem.priceBeforeSale ? detailItem.priceBeforeSale : ''} ₫</span>
                                                <span className='after-sale'>{detailItem && detailItem.priceAfterSale ? detailItem.priceAfterSale : ''} ₫</span>
                                                <div className='long-text'>                    
                                                {detailItem && detailItem.Markdown && detailItem.Markdown.contentHTML
                                                    &&
                                                    <div dangerouslySetInnerHTML={{ __html: detailItem.Markdown.contentHTML }}>

                                                    </div>
                                                }              
                                            </div>
                                            <div className='buying'>
                                                <input className="form-control node col-3" type="number"
                                                    // value="1"
                                                />
                                                <button className='btn-buying'>Đặt mua</button>
                                            </div>
                                            <div className='socal-media'>
                                                <i className="fa-brands fa-square-facebook"></i>
                                                <i className="fa-brands fa-instagram"></i>  
                                                <i className="fa-brands fa-telegram"></i>
                                            </div>
                                        </div>
                                    </div>    
                               </div>
                               <div className='col-8 row detail'>
                                    <div className='col-12 detial-comment'>
                                        <div className='detial-title'>
                                            <h2>CHI TIẾT SẢN PHẨM</h2>
                                            <h2>BÌNH LUẬN</h2>
                                        </div>
                                        <div className='detial-content'>
                                            Kể từ ngày GS.TSKH Bùi Quốc Châu phát minh ra Diện Chẩn đến nay đã được 40 năm. Đến nay Diện Chẩn đã được ứng dụng rộng rãi trong quần chúng nhân dân ở khắp các tỉnh thành trong Toàn Quốc. Diện Chẩn còn được khắp thế giới đón nhận nồng nhiệt. Theo thống kê năm 2018, Diện Chẩn hiện đã có mặt tại hơn 50 quốc gia trên toàn thế giới, ở các cường quốc hàng đầu về Y học bổ sung đều có các trung tâm nghiên cứu, ứng dụng & đào tạo về Diện Chẩn. Phương pháp ngày càng chứng minh được tính ưu việt trong chăm sóc sức khỏe cộng đồng bởi sự an toàn, đơn giản mà hiệu quả cao.
                                            Sau khi nhận được rất nhiều đề nghị được học từ xa của các học viên. Thầy Vũ Văn Hội đã biên soạn bộ bài giảng Diện Chẩn hoàn chỉnh bao gồm 6 khóa học;
                                        </div>
                                    </div>
                                    <div className='col-12 new-item'>             
                                        <SimilarProduct settings={settings} itemsRedux={itemsRedux}/>
                                        <NewProduct settings={settings}  />
                                        <BestSaleProduct settings={settings}  />
                                    </div>
                               </div>
                            </div>

                            <div className='content-right col-4'>
                                <div className='content-right-child'>
                                    <h2>SÁCH ĐIỆN CHUẨN</h2>  
                                    {itemsReduxSach && itemsReduxSach.length > 0
                                        && itemsReduxSach.slice(0, 8).map((item, index) => {                                                           
                                            return (                                          
                                                <ol key={index}>                                    
                                                    <li>{item.name}</li>
                                                </ol>
                                            )
                                        })
                                    } 
                                </div>   
                                <div className='content-right-child'>
                                    <h2>QUE DÒ ĐIỆN CHUẨN</h2>  
                                    {itemsReduxQueDo && itemsReduxQueDo.length > 0
                                            && itemsReduxQueDo.slice(0, 8).map((item, index) => {                                                                                                 
                                                return (                                      
                                                    <ol key={index}>                                    
                                                        <li>{item.name}</li>
                                                    </ol>
                                                
                                                )
                                            })
                                        }   
                                </div> 
                               <div className='content-right-child'>
                                    <h2>CÂY LĂN ĐIỆN CHUẨN</h2> 
                                    {itemsReduxCayLan && itemsReduxCayLan.length > 0
                                            && itemsReduxCayLan.slice(0, 8).map((item, index) => {                                                                 
                                                return (                                            
                                                    <ol key={index}>                                    
                                                        <li>{item.name}</li>
                                                    </ol>
                                                )
                                            })
                                        }   
                                </div> 
                                <div className='content-right-child'>
                                    <h2>THIẾT BỊ ĐIỆN CHUẨN</h2>   
                                    {itemsReduxThietBi && itemsReduxThietBi.length > 0
                                        && itemsReduxThietBi.slice(0, 8).map((item, index) => {                                 
                                            return (                                
                                                <ol key={index}>                                    
                                                    <li>{item.name}</li>
                                                </ol>
                                            )
                                        })
                                    }    
                                </div> 
                                <ul> 
                                    <h2>TIN ĐIỆN CHUẨN</h2>
                                    <div className='content'>
                                        <div className='image'></div>
                                        <div className='text'>Sự nguy hiểm của hàn khí</div>
                                    </div>
                                    <div className='content'>
                                        <div className='image'></div>
                                        <div className='text'>Sự nguy hiểm của hàn khí</div>
                                    </div>
                                    <div className='content'>
                                        <div className='image'></div>
                                        <div className='text'>Sự nguy hiểm của hàn khí</div>
                                    </div>
                                </ul>
                            
                            </div>               
                        </div> 
                        <HomeFooter/>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        listItemsSach: state.admin.itemsSach,
        listItemsQueDo: state.admin.itemsQueDo,
        listItemsCayLan: state.admin.itemsCayLan,
        listItemsThietBi: state.admin.itemsThietBi
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsSachredux: () => dispatch(actions.fetchItemsSach()),
        fetchItemsQueDoRedux: () => dispatch(actions.fetchItemsQueDo()),
        fetchItemsCayLanRedux: () => dispatch(actions.fetchItemsCayLan()),
        fetchItemsThietBiRedux: () => dispatch(actions.fetchItemsThietBi())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
