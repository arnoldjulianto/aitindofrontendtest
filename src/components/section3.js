//Import succus leaf image from ../assets/img
import succusLeaf from '../assets/img/succusLeaf.png'
//Import small leaf 1 image from ../assets/img
import smallLeaf1 from '../assets/img/smallLeaf1.png'
//Import small leaf 2 image from ../assets/img
import smallLeaf2 from '../assets/img/smallLeaf2.png'
//Import small leaf 3 image from ../assets/img
import smallLeaf3 from '../assets/img/smallLeaf3.png'

const Section3 = () => {
    return(
    //The Section 3 wrapper, using data-aos, data-aos-duration, data-aos-delay to create the animation on scrolling
    <div className="section3" >
            {/* Load section 3 background with gradient color */}
            <div className="bg-gradient-to-r from-[#ffdab3] via-white to-[#ffdab3] w-full">
            {/* Load section 3 background with gradient color */}

                {/* Load section 3 content wrapper*/}    
                <div className="bg-fourth w-auto h-[120px] mt-[-70px] mr-[0px]"></div>  
                    {/* Load the section 3 crooked top */}
                    <div className="bg-fourth w-auto h-[100px] -rotate-[2deg] mt-[-40px] mr-[5px] ml-[-5px] section3-slight"></div>
                    {/* Load the section 3 crooked top */}

                     {/* Load the section 3 crooked top, right border*/}
                    <div className="bg-fourth w-[10px] h-[92px] right-[0px] absolute mt-[-116px] section3-closer"></div>
                     {/* Load the section 3 crooked top, right border*/}

                     {/* Load the section 3 small leaf*/}
                        <div className="flex justify-between mt-[0px] pt-[5%] px-[10%] -rotate-[5deg] mr-[5px] rounded-br-[100px]">
                            
                            <div className="flex flex-1 justify-start justify-items-start items-start " data-aos="fade-down" data-aos-duration="1500"  >
                                <img src={smallLeaf1} className="section3-img1" />
                            </div>

                            <div className="flex flex-1 justify-start justify-items-start items-start" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">
                                <img src={smallLeaf2} className="section3-img2" />
                            </div>

                            <div className="flex flex-1 justify-end justify-items-end items-start " data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1000">
                                <img src={smallLeaf3} className="section3-img3" />
                            </div>
                        </div>
                     {/* Load the section 3 small leaf*/}

                     {/* Load the section 3 succus content*/}
                        <div className="flex justify-around w-full mt-[0px] pt-[0%] pb-[5%] px-[10%] section3-wrapper">
                            <div className="flex flex-1 flex-col justify-end justify-items-end items-end ">
                                {/* Load the section 3 arrows down*/}
                                <div className="flex-1 justify-start arrows-down-wrapper">
                                    <div className="border-b-2 border-l-2 border-secondary w-[20px] h-[20px] -rotate-[45deg] arrows-down-one"></div>
                                    <div className="border-b-2 border-l-2 border-secondary w-[20px] h-[20px] -rotate-[45deg] mt-[-12px] arrows-down-two"  ></div>
                                </div>
                                {/* Load the section 3 arrows down*/}
                            
                                <div className="flex flex-1 flex-col justify-end justify-items-end items-end section3-content" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
                                    {/* Load the section 3 succus content title*/}
                                    <div className="font-intro text-6xl text-green-600 section3-content-title text-right"  >
                                            Succus <br/> Liquritiae
                                    </div>

                                    <div className="text-green-600 text-right font-lora mt-5 mb-5" >
                                        <hr className="border-[0.1px] w-24 border-green-600" />
                                    </div> 
                                    {/* Load the section 3 succus content title*/}
                                    
                                    {/* Load the section 3 succus content desc*/}
                                    <div className="font-opensans text-sm text-fifth font-semibold text-right mb-10 section3-content-desc" >
                                        merupakan salah satu bahan alami<br/>
                                        yang telah dibudidayakan sejak abad ke-13 dan
                                        dipercaya serta digunakan sebagai
                                        bahan dasar obat-obatan alami maupun modern
                                    </div> 
                                    {/* Load the section 3 succus content desc*/}      
                                </div>
                            </div>

                            <div className="flex flex-1 justify-end justify-items-end items-end succusLeaf" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1000">
                                <img src={succusLeaf} className="static" />
                            </div>
                        </div>    
                     {/* Load the section 3 succus content*/}
                {/* Load section 3 content wrapper*/}    
        </div>
    </div>
    //The Section 3 wrapper, using data-aos, data-aos-duration, data-aos-delay to create the animation on scrolling
    )
}

export default Section3;