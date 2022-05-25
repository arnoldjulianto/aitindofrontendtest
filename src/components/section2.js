
const Section2 = () => {
    return(
        //The Section 2 wrapper, using data-aos, data-aos-duration, data-aos-delay to create the animation on scrolling
        <div className="section-2" >
                {/* Load the section 2 crooked top */}
                <div className="bg-fourth w-auto h-[100px] -rotate-[2deg] mt-[-50px] mr-[2px] section-2-slight" ></div>
                {/* Load the section 2 crooked top */}

                {/* Load the section 2 crooked top, right border*/}
                <div className="bg-fourth w-[10px] h-[100px] right-[0px] absolute mt-[-123px] section-2-closer"></div>
                {/* Load the section 2 crooked top, right border*/}

                {/* Load the section 2 content*/}
                <div className="flex relative justify-around bg-fourth w-full mt-[-50px] pt-[5%] pb-[5%] px-[5%] section-2-wrapper">
                    {/* Load the section 2 first content*/}
                        <div className="flex flex-1 flex-col justify-end items-end pr-[5%] section2-cought" data-aos="fade-right" data-aos-duration="1500">
                            <div className="text-white text-right font-lora mb-3 section2-cought-header" >
                                <hr className="border-[0.1px] w-24 border-white mb-5 " />
                                <span className="section2-cought-title" >terdapat</span>
                            </div>

                            <div className="font-intro text-5xl text-white" >
                                2 Jenis
                            </div>

                            <div className="font-intro text-5xl text-white"  >
                                Batuk
                            </div>

                            <div className="font-opensans text-sm text-white mt-1 font-medium" >
                            yaitu batuk berdahak
                            </div>

                            <div className="font-opensans text-sm text-white mt-1 font-medium" >
                            dan batuk tidak berdahak
                            </div>
                            
                            <hr className="border-[0.1px] w-24 border-white mt-5 "  />
                        </div>
                    {/* Load the section 2 first content*/}

                    {/* Load the section 2 second content*/}
                        <div className="flex flex-col section2-cought-detail">
                            <div className="flex flex-1 flex-col justify-start items-end px-[5%] section2-content">
                                <div className="font-opensans text-base text-center text-third bg-white font-semibold py-2 w-full section2-content-title" data-aos="zoom-in" data-aos-duration="1500" >
                                BATUK TIDAK BERDAHAK
                                </div>

                                <div className="font-opensans text-sm text-white mt-1 font-medium px-[10%] text-left section2-content-desc" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
                                disebabkan oleh terjadinya kejang pada saluran pernapasan yang menjadi respon terhadap iritasi di tenggorokan
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col justify-start items-end px-[5%]  section2-content">
                                <div className="font-opensans text-base text-center text-third bg-white font-semibold py-2 w-full section2-content-title " data-aos="zoom-in"  data-aos-duration="1500" data-aos-delay="1300">
                                BATUK BERDAHAK
                                </div>

                                <div className="font-opensans text-sm text-white mt-1 font-medium px-[10%] text-left section2-content-desc" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1300">
                                disebabkan karena membran yang melapisi saluran pernapasan menghasilkan dahak yang berlebih sehingga harus dikeluarkan oleh tubuh. Terkadang dahak sulit dikeluarkan oleh tubuh sehingga dibutuhkan obat batuk yang bersifat ekspektoran 
                                </div>
                            </div>
                        </div>
                    {/* Load the section 2 second content*/}
                    
                    {/* Load the section 2 eclipse component*/}
                        <div className="rounded-full bg-secondary bg-cover opacity-10 absolute left-[-30px] w-[150px] h-[150px] mt-[-60px] eclipse1 " data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" data-aos-delay="1000" >
                        
                        </div>

                        <div className="rounded-full bg-fifth bg-cover opacity-30 absolute left-[-130px] w-[250px] h-[250px] mt-[-35px] eclipse2 " data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" data-aos-delay="1000">

                        </div>

                        <div className="rounded-tl-[300px] rounded-bl-[300px] bg-fifth bg-cover opacity-25 absolute right-[0px]  w-[70px] h-[120px] mt-[120px] z-40 eclipse3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" >
                        
                        </div>

                        <div className="rounded-tl-[300px] rounded-bl-[300px] bg-secondary bg-cover opacity-10 absolute right-[0px] w-[150px] h-[200px] mt-[170px] z-30 eclipse4" data-aos="flip-down" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        </div>
                    {/* Load the section 2 eclipse component*/}
                </div>
                {/* Load the section 2 content*/}
        </div>
        //The Section 2 wrapper, using data-aos, data-aos-duration, data-aos-delay to create the animation on scrolling
    )
}

export default Section2;