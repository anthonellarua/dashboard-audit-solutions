import styles from "./myprofile-protocols.module.scss"
import Image from "next/image";

import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function MyProfileProtocols() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <div className={styles.profile}>
                <div className={styles.profile__container}>
                    <div className={styles.profile__userdata}>
                        <section className={styles.profile__userdata__photo}>
                            <Image width={250} height={250} src="/image-avatar-big.png" alt="" />
                            <div className={styles.profile__useredit} >
                                <Image width={21} height={21} src="/icons/edit-icon.png" alt="" />
                            </div>
                        </section>
                        <section className={styles.profile__userdata__data}>
                            <div>
                                <span>About me <Image width={16} height={16} src="/icons/edit-icon.png" alt="" /></span>
                                <span className={styles.profile__userdata__aboutmetext}>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. </span>
                            </div>
                            <div>
                                <span className={styles.profile__userdata__aboutmetext}>Time experiencie</span>
                                <span>2 years</span>
                            </div>
                            <div>
                                <span className={styles.profile__userdata__aboutmetext}>Total rewards</span>
                                <span>$10000 </span>
                            </div>
                        </section>
                    </div>
                    <div className={styles.profile__usercontact}>
                        <div className={styles.profile__usercontact__title}>
                            <h2>SarahBrown</h2>
                        </div>
                        <div className={styles.profile__usercontact__ranking}>
                            <div>
                                <span>Ranking</span>
                                <span>8,0
                                    <span className={styles.reviewsSlider__stars}>
                                        <Image width={32} height={32} src="/icons/star-review-dark.png" alt=""/>
                                        <Image width={32} height={32} src="/icons/star-review-dark.png" alt=""/>
                                        <Image width={32} height={32} src="/icons/star-review-light.png" alt=""/>
                                        <Image width={32} height={32} src="/icons/star-review-light.png" alt=""/>
                                        <Image width={32} height={32} src="/icons/star-review-light.png" alt=""/>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span>Post Bounty</span>
                                <span>5</span>
                            </div> 
                        </div>
                        <div className={styles.profile__usercontact__buttons}>
                            <span className={`tab ${activeTab === 1 ? styles.activeTab : styles.noactiveTab}`}
                                onClick={() => handleTabClick(1)}>Review {
                                    activeTab === 1 ? (
                                        <Image width={16} height={16} src="/icons/star-icon-white.png" alt=""/>
                                    ):(
                                        <Image width={16} height={16} src="/icons/star-icon-black.png" alt=""/>
                                    )
                                }</span>
                            <span className={`tab ${activeTab === 2 ? styles.activeTab : styles.noactiveTab}`}
                                onClick={() => handleTabClick(2)}>Account settings{
                                    activeTab === 2 ? (
                                        <Image width={16} height={16} src="/icons/settings-icon-light.png" alt=""/>
                                    ):(
                                        <Image width={16} height={16} src="/icons/settings-icon-black.png" alt=""/>
                                    )
                                }
                                </span>
                            <span className={`tab ${activeTab === 3 ? styles.activeTab : styles.noactiveTab}`}
                                onClick={() => handleTabClick(3)}>Social media{
                                    activeTab === 3 ? (
                                        <Image width={16} height={16} src="/icons/share-icon-white.png" alt=""/>
                                    ):(
                                        <Image width={16} height={16} src="/icons/share-icon-black.png" alt=""/>
                                    )
                                }</span>
                        </div>
                        <div className={styles.profile__usercontact__container}>
                            {activeTab === 1 ? (
                                <>
                                    <div className={styles.profile__usercontact__slidercontainer}>
                                        <Swiper
                                        navigation={{
                                            nextEl: `.${styles.customNext}`,
                                            prevEl: `.${styles.customPrev}`,
                                        }}
                                        modules={[Navigation]}
                                        slidesPerView={3}
                                        spaceBetween={12}
                                        className={styles.reviewsSlider}>
                                            <SwiperSlide className={styles.reviewsSlider__slide}>
                                                <div className={styles.reviewsSlider__userdata}>
                                                    <div>
                                                        <Image width={20} height={20} src="/icons/avatar-icon.png" alt=""/>
                                                        <span>Username</span>
                                                    </div>
                                                    <span className={styles.reviewsSlider__stars}>
                                                        <Image width={20} height={20} src="/icons/star-review-dark.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-dark.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                    </span>
                                                </div>
                                                <p>“Lorem ipsum dolor sit amet, sectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque hendrerit est. Nunc eu ligula eleifend, iaculis nunc a, dapibus nisi. </p>
                                            </SwiperSlide>
                                            <SwiperSlide className={styles.reviewsSlider__slide}>
                                                <div className={styles.reviewsSlider__userdata}>
                                                    <div>
                                                        <Image width={20} height={20} src="/icons/avatar-icon.png" alt=""/>
                                                        <span>Username</span>
                                                    </div>
                                                    <span className={styles.reviewsSlider__stars}>
                                                        <Image width={20} height={20} src="/icons/star-review-dark.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-dark.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                    </span>
                                                </div>
                                                <p>“Lorem ipsum dolor sit amet, sectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque hendrerit est. Nunc eu ligula eleifend, iaculis nunc a, dapibus nisi. </p>
                                            </SwiperSlide>
                                            <SwiperSlide className={styles.reviewsSlider__slide}>
                                                <div className={styles.reviewsSlider__userdata}>
                                                    <div>
                                                        <Image width={20} height={20} src="/icons/avatar-icon.png" alt=""/>
                                                        <span>Username</span>
                                                    </div>
                                                    <span className={styles.reviewsSlider__stars}>
                                                        <Image width={20} height={20} src="/icons/star-review-dark.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-dark.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                    </span>
                                                </div>
                                                <p>“Lorem ipsum dolor sit amet, sectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque hendrerit est. Nunc eu ligula eleifend, iaculis nunc a, dapibus nisi. </p>
                                            </SwiperSlide>
                                            <SwiperSlide className={styles.reviewsSlider__slide}>
                                                <div className={styles.reviewsSlider__userdata}>
                                                    <div>
                                                        <Image width={20} height={20} src="/icons/avatar-icon.png" alt=""/>
                                                        <span>Username</span>
                                                    </div>
                                                    <span className={styles.reviewsSlider__stars}>
                                                        <Image width={20} height={20} src="/icons/star-review-dark.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-dark.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                        <Image width={20} height={20} src="/icons/star-review-light.png" alt=""/>
                                                    </span>
                                                </div>
                                                <p>“Lorem ipsum dolor sit amet, sectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque hendrerit est. Nunc eu ligula eleifend, iaculis nunc a, dapibus nisi. </p>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className={styles.customNext}><Image width={24} height={24} src="/icons/chevron-right-24.png" alt=""/></div>
                                        <div className={styles.customPrev}><Image width={24} height={24} src="/icons/chevron-left-24.png" alt=""/></div>
                                    </div>
                                </>
                            ): activeTab === 2 ?(
                                <>
                                    <div className={styles.profile__formcontainer}>
                                        <div className={styles.profile__formcontainer__inputs}>
                                            <div className={styles.inputitem}>
                                                <span>User name</span>
                                                <input placeholder="User name"/>
                                            </div>
                                            <div className={styles.inputitem}>
                                                <span>Email</span>
                                                <input placeholder="Email adress"/>
                                            </div>
                                        </div>
                                        <div className={styles.profile__formcontainer__notifications}>
                                            <h2>Alerts & Notifications</h2>
                                            <div className={styles.checkboxes}>
                                                <div className={styles.checkboxes__input}>
                                                    <input type="checkbox"/>
                                                    <span>Get hyacinth news, announcements, and product updates</span>
                                                </div>
                                                <div className={styles.checkboxes__input}>
                                                    <input type="checkbox"/>
                                                    <span>Get important notifications about you or activity you've missed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button>Save Changes</button>
                                    </div>
                                </>
                            ):(
                                <>
                                    <div className={styles.profile__social}>
                                        <div className={styles.profile__social__inputs}>
                                            <div className={styles.inputitem}>
                                                <span>Twitter</span>
                                                <input placeholder="Twitter"/>
                                            </div>
                                            <div className={styles.inputitem}>
                                                <span>Github</span>
                                                <input placeholder="Github"/>
                                            </div>
                                        </div>
                                        <button>Save Changes</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <Image width={370} height={370} src="/gradient-circle.png" alt="" className={styles.profile__gradientcircle} />
            </div>
        </>
    );
}