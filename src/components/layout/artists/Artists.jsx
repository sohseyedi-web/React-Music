import './Artists.scss'
import {artists} from "../../../data/data.js";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Artists = () => {
    return (
        <section className={"slider container"}>
            <div className="slider-box ">
                <Swiper breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 5
                    }

                }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        slidesPerView={5}
                        className="slider-box__items">
                    {
                        artists.map((item, i) => (
                            <SwiperSlide
                                key={i}
                                className="slider-box__items-image"
                            >
                                <img src={item.profile} alt={item.name}/>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Artists;
