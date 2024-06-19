import styles from "./a-dashboard-content.module.scss"
import Image from "next/image";

import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function ADashboardContent() {
    return (
        <>
            <div className={styles.adashboardcontent}>
                <div className={styles.adashboardcontent__container}>
                    <h2>Auditor Dashboard</h2>
                    <div>  
                        <div className={styles.adashboardcontent__avabounties}>
                            <h2>Available Bounties</h2>
                            <div className={styles.adashboardcontent__slidercontainer}>
                                <Swiper
                                navigation={{
                                    nextEl: `.${styles.customNext}`,
                                    prevEl: `.${styles.customPrev}`,
                                }}
                                modules={[Navigation]}
                                slidesPerView={2}
                                spaceBetween={12}
                                className={styles.slider}>
                                    <SwiperSlide className={styles.slider__slide}>
                                        <div className={styles.slider__title}>
                                            <div>
                                                <span>Start in X days</span>
                                                <span><Image width={24} height={24} src="/icons/user-person-icon.png" alt=""/>Project name</span>
                                            </div>
                                            <button>More details</button>
                                        </div>
                                        <div className={styles.slider__data}>
                                            <div>
                                                <span>Date</span>
                                                <span>11 may 3:00 PM - 02 july 3:00 PM</span>
                                            </div>
                                            <div>
                                                <span>Audit level</span>
                                                <span>Level 1</span>
                                            </div>
                                            <div>
                                                <span>Total Rewards</span>
                                                <span>30,000 USDC</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.slider__slide}>
                                        slide 2
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.slider__slide}>
                                        slide 3
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.slider__slide}>
                                        slide 4
                                    </SwiperSlide>
                                </Swiper>
                                <div className={styles.customNext}><Image width={24} height={24} src="/icons/chevron-right-24.png" alt=""/></div>
                                <div className={styles.customPrev}><Image width={24} height={24} src="/icons/chevron-left-24.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}