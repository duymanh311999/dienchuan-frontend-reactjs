import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss';
import { getDetailInforDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import DoctorSchedule from './DoctorSchedule';
import DoctorExtraInfor from './DoctorExtraInfor';
import LikeAndShare from '../SocialPlugin/LikeAndShare';
import Comment from '../SocialPlugin/Comment';
import HomeFooter from '../../HomePage/HomeFooter';
import SimilarProduct from '../../HomePage/Section/Slider/SimilarProduct';
import NewProduct from '../../HomePage/Section/Slider/NewProduct';
import BestSaleProduct from '../../HomePage/Section/Slider/BestSaleProduct';

class DetailDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {},
            currentDoctorId: -1,
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentDoctorId: id
            })

            let res = await getDetailInforDoctor(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailDoctor: res.data,
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let { language } = this.props;
        let { detailDoctor } = this.state;
        let nameVi = '', nameEn = '';
        if (detailDoctor && detailDoctor.positionData) {
            nameVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName} `;
            nameEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
        }

        let currentURL = +process.env.REACT_APP_IS_LOCALHOST === 1 ?
            "https://eric-restaurant-bot-tv.herokuapp.com/" : window.location.href;

            let settings = {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
            };

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
                                <span>Bút gỗ một đầu bạc Bách Chi - cỡ nhỏ bạc 10 li</span>
                            </div>
                        </div>
                        

                        <div className='buying-content row'>
                            <div className='content-left col-8'>
                               <div className='item col-8 row'>
                                    <div className='col-6 image'>
                                        <div className='child-image'></div>
                                    </div>
                                    <div className='col-6 text'>
                                        <h1>Bộ Diện Chẩn quà tặng</h1>
                                        <div className='price'>
                                                <span className='before-sale'>6.861.000 ₫</span>
                                                <span className='after-sale'>6.800.000 ₫</span>
                                                <div className='long-text'>
                                                Bộ dụng cụ đáp ứng đầy đủ cho các nhu cầu căn bản đến nâng cao 
                                                của Quý khách hàng yêu thích Diện Chẩn, cho người mới bắt đầu học hoặc người đã làm chuyên nghiệp từ lâu. Bộ dụng cụ cơ bản phục vụ học tập, nghiên cứu và phát triển Diện Chẩn. Đây cũng bộ quà tặng ý nghĩa cho người thân yêu. Cho tiền bạc không bằng trao kiến thức tự bảo vệ sức khỏe bản thân.
                                                Bộ dụng cụ quà tặng bao gồm 29 món, trọng lượng 3,5 kg;
                                                Dụng cụ dùng trên người/chân/tay (9 món)

                                                Ngải cứu điện (không dùng ngải) 550
                                                Hít sừng lớn 340
                                                Lăn đồng gai đôi lớn 320
                                                Lăn Cầu Đinh đôi lớn 370
                                                Lăn cầu gai đôi lớn ngắn 320
                                                Búa lớn 250
                                                Con bọ lớn 240
                                                Cạo gió day huyệt 170
                                                Móc chìa khóa 5 món 630
                                                Dụng cụ dùng trên đầu/mặt (15 món)

                                                Búa nhỏ 160
                                                Day phớt 2 đầu đồng sừng (trơn) 190
                                                Cây sao chổi 180
                                                Lăn mắt 2 đầu 230
                                                Cá nhỏ đồng sừng 210
                                                Hít đồng nhỏ 270
                                                Giọt sương (nhất dương chỉ) 150
                                                Giọt mưa (xâm mứt gừng) 150
                                                Cầu gai đôi nhỏ 230
                                                Cào lớn 210
                                                Lăn 2 đầu đinh cầu gai 240
                                                Đĩa bay nhỏ 200
                                                Bàn Chải tiên lăn đồng láng nhỏ 200
                                                Hít sừng nhỏ 250
                                                Dò cào 150
                                                Tài liệu dành cho người mới bắt đầu tiếp xúc với Diện Chẩn: 4 món

                                                Sách Diện Chẩn ABC 150
                                                Sách chữa bệnh bằng đồ hình phản chiếu và đồng ứng 78
                                                Sách Ẩm thực Dưỡng Sinh 38
                                                Tờ Cẩm nang Diện Chẩn cầm tay 35
                                                Phụ kiện Diện Chẩn (1 món)
                                                    1. Túi đựng tài liệu và dụng cụ diện chẩn 350

                                                *Dụng cụ Diện Chẩn chính hãng ship toàn quốc: https://bit.ly/2Va5wEx
                                                *Đặt hàng trực tuyến: 0934.128.128
                                            </div>
                                            <div className='buying'>
                                                <input className="form-control node col-3" type="number"
                                                    value="1"
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
                                        <SimilarProduct settings={settings} />
                                        <NewProduct settings={settings}  />
                                        <BestSaleProduct settings={settings}  />
                                    </div>
                               </div>
                            </div>

                            <div className='content-right col-4'>
                                <ol> 
                                    <h2>BỘ DỤNG CỤ THƯỜNG DÙNG</h2>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                </ol>
                                <ol> 
                                    <h2>BỘ DỤNG CỤ THƯỜNG DÙNG</h2>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                </ol>
                                <ol> 
                                    <h2>BỘ DỤNG CỤ THƯỜNG DÙNG</h2>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                    <li>Thiếu yếu 4 món</li>
                                </ol>

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
              
           
                {/* <div className="doctor-detail-container">
                    <div className="intro-doctor">
                        <div
                            className="content-left"
                            style={{ backgroundImage: `url(${detailDoctor && detailDoctor.image ? detailDoctor.image : ''})` }}>

                        </div>
                        <div className="content-right">
                            <div className="up">
                                {language === LANGUAGES.VI ? nameVi : nameEn}
                            </div>
                            <div className="down">
                                {detailDoctor && detailDoctor.Markdown
                                    && detailDoctor.Markdown.description
                                    &&
                                    <span>
                                        {detailDoctor.Markdown.description}
                                    </span>
                                }
                                <div className="like-share-plugin">
                                    <LikeAndShare
                                        dataHref={currentURL}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-doctor">
                        <div className="content-left">
                            <DoctorSchedule
                                doctorIdFromParent={this.state.currentDoctorId}
                            />
                        </div>
                        <div className="content-right">
                            <DoctorExtraInfor
                                doctorIdFromParent={this.state.currentDoctorId}
                            />
                        </div>
                    </div>
                    <div className="detail-infor-doctor">
                        {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML
                            &&
                            <div dangerouslySetInnerHTML={{ __html: detailDoctor.Markdown.contentHTML }}>

                            </div>
                        }
                    </div>
                    <div className="comment-doctor">
                        <Comment
                            dataHref={currentURL}
                            width={"100%"}
                        />
                    </div>
                </div> */}

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
