import styles from "./profile-auditor-2.module.scss"
import Image from "next/image";

import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ReviewModal from "./review-modal";


export default function ProfileAuditor2() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    return (
        <>
            <div className={styles.profile}>
                <div className={styles.profile__back}>
                    <span>Auditor Retainers</span>
                    <Image width={24} height={24} src="/icons/chevron-right.png" alt="" />
                    <span>Username</span>
                </div>
                <div className={styles.profile__container}>
                    <div className={styles.profile__userdata}>
                        <section className={styles.profile__userdata__photo}>
                            <Image width={200} height={200} src="/foto-perfil.png" alt="" />
                            <Image width={200} height={200} src="/adorno-2.png" alt="" className={styles.profile__usercircle} />
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. </p>
                        </section>
                        <section className={styles.profile__userdata__data}>
                            <div>
                                <span>Experience</span>
                                <span>1 years</span>
                            </div>
                            <div>
                                <span>Rates</span>
                                <span>10,000 -30,000 USDC</span>
                            </div>
                            <div>
                                <span>Total Bounties</span>
                                <span>20</span>
                            </div>
                        </section>
                    </div>
                    <div className={styles.profile__usercontact}>
                        <div className={styles.profile__usercontact__title}>
                            <h2>Username Auditor</h2>
                            <span>Specialty</span>
                        </div>
                        <div className={styles.profile__usercontact__ranking}>
                            <div>
                                <span>Ranking</span>
                                <span>8,0 ★★★★☆</span>
                            </div>
                            <div>
                                <span>Level</span>
                                <span>1</span>
                            </div> 
                        </div>
                        <div className={styles.profile__usercontact__buttons}>
                            <span>Contact me<Image width={16} height={16} src="/icons/mail-icon-black.png" alt=""/></span>
                            <span>Reviews<Image width={16} height={16} src="/icons/star-icon-white.png" alt=""/></span>
                            <span>Social media<Image width={16} height={16} src="/icons/share-icon-black.png" alt=""/></span>
                        </div>
                        <div className={styles.profile__usercontact__reviews}>
                            <div className={styles.profile__usercontact__qualify}>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <p>☆☆☆☆☆</p>
                                </div>
                                <button onClick={openModal}>Write a review</button>
                            </div>
                            <div className={styles.profile__usercontact__slidercontainer}>
                                <Swiper
                                navigation={{
                                    nextEl: `.${styles.customNext}`,
                                    prevEl: `.${styles.customPrev}`,
                                }}
                                modules={[Navigation]}
                                slidesPerView={2}
                                spaceBetween={12}
                                className={styles.reviewsSlider}>
                                    <SwiperSlide className={styles.reviewsSlider__slide}>
                                        <div className={styles.reviewsSlider__userdata}>
                                            <div>
                                                <Image width={16} height={16} src="/icons/user-person-icon.png" alt=""/>
                                                <span>Username</span>
                                            </div>
                                            <span>★★☆☆☆</span>
                                        </div>
                                        <p>“Lorem ipsum dolor sit amet, sectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque hendrerit est. Nunc eu ligula eleifend, iaculis nunc a, dapibus nisi. </p>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.reviewsSlider__slide}>
                                        <div className={styles.reviewsSlider__userdata}>
                                            <div>
                                                <Image width={16} height={16} src="/icons/user-person-icon.png" alt=""/>
                                                <span>Username</span>
                                            </div>
                                            <span>★★☆☆☆</span>
                                        </div>
                                        <p>“Lorem ipsum dolor sit amet, sectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque hendrerit est. Nunc eu ligula eleifend, iaculis nunc a, dapibus nisi. </p>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.reviewsSlider__slide}>
                                        <div className={styles.reviewsSlider__userdata}>
                                            <div>
                                                <Image width={16} height={16} src="/icons/user-person-icon.png" alt=""/>
                                                <span>Username</span>
                                            </div>
                                            <span>★★☆☆☆</span>
                                        </div>
                                        <p>“Lorem ipsum dolor sit amet, sectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque hendrerit est. Nunc eu ligula eleifend, iaculis nunc a, dapibus nisi. </p>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.reviewsSlider__slide}>
                                        <div className={styles.reviewsSlider__userdata}>
                                            <div>
                                                <Image width={16} height={16} src="/icons/user-person-icon.png" alt=""/>
                                                <span>Username</span>
                                            </div>
                                            <span>★★☆☆☆</span>
                                        </div>
                                        <p>“Lorem ipsum dolor sit amet, sectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque hendrerit est. Nunc eu ligula eleifend, iaculis nunc a, dapibus nisi. </p>
                                    </SwiperSlide>
                                </Swiper>
                                <div className={styles.customNext}><Image width={24} height={24} src="/icons/chevron-right-24.png" alt=""/></div>
                                <div className={styles.customPrev}><Image width={24} height={24} src="/icons/chevron-left-24.png" alt=""/></div>
                            </div>
                        </div>
                        <Image width={140} height={140} src="/degrade-type2.png" alt="" className={styles.profile__firstcircle} />
                    </div>
                </div>
                <Image width={370} height={370} src="/gradient-circle.png" alt="" className={styles.profile__gradientcircle} />
                <ReviewModal isOpen={isModalOpen} onRequestClose={closeModal} />
            </div>
        </>
    );
}