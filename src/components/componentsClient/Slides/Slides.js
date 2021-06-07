import React, { Component } from 'react';
import './slides.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);


class Slides extends Component {
    render() {
        return (
            <>
                <div className="section">
                    <h1>FIX FAST WEBSITE</h1>
                    <div className="video-container">
                        <div className="color-overlay" />
                        <video autoPlay loop muted>
                        <source src="./assets/img/180607_A_101 (1).mp4" type="video/mp4" />
                        </video>
                    </div>
                    </div>
                    {/* about top shop */}
                    <div className='swiper-container'>
                        <Swiper
                            lazy = {true}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }} 
                            loop = {true}
                        >
                            <SwiperSlide>
                                <img className='swiper-img' src="https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="empty" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='swiper-img' src="https://images.pexels.com/photos/2127008/pexels-photo-2127008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="empty"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                 <img className='swiper-img' src="https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="empty"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='swiper-img' src="https://images.pexels.com/photos/3806255/pexels-photo-3806255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="empty"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </>
        );
    }
}

export default Slides;