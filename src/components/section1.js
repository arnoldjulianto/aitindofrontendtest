
const Section1 = () => {
    return(
        //The Section 1 wrapper, using data-aos, data-aos-duration, data-aos-delay to create the animation on scrolling
        <div className="section1 "  data-aos="fade-out" data-aos-duration="4000" data-aos-delay="50" >
              {/* Load the section 1 background */}
              <div className="bg-cover bg-white bg-[url('./assets/img/section1-bg.png')] w-full h-[500px] pt-[10%] pb-[40%] pl-[50%] section1-bg" >
                    {/* Load the section 1 content */}
                    <div className="section1-content">  
                            {/* Load the section 1 content title*/}
                            <div className="font-lora text-lg text-third section1-title">
                                Gak semua orang tahu kalau
                            </div>
                            {/* Load the section 1 content title*/}

                            {/* Load the section 1 content big-text*/}
                            <div className="font-intro text-5xl text-secondary section1-big-text" >
                            BATUK ITU 
                            </div>
                            <div className="font-intro text-5xl text-secondary section1-big-text" >
                            BUKAN PENYAKIT
                            </div>
                            {/* Load the section 1 content big-text*/}

                            {/* Load the section 1 divider*/}
                            <hr className="border-[1px] w-24 border-secondary mt-3" />
                            {/* Load the section 1 divider*/}

                            {/* Load the section 1 bottom small text*/}
                            <div className="font-opensans text-sm text-third mt-2 font-semibold section1-small-text pr-[5px]">
                                Batuk adalah respon alami tubuh untuk melindungi tubuh<br/>
                                terhadap benda asing (kuman, bakteri, virus)<br/>
                                yang masuk ke dalam tubuh<br/>
                            </div>
                            {/* Load the section 1 bottom small text*/}
                    </div>   
                    {/* Load the section 1 content */} 
            </div>
            {/* Load the section 1 background */}
        </div>
        //The Section 1 wrapper, using data-aos, data-aos-duration, data-aos-delay to create the animation on scrolling
    )
}

export default Section1;
