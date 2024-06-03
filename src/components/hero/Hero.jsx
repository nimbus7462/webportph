import "./hero.scss"
const Hero = () => {
    return (

     <div className="hero">
                <div className="wrapper">
                    <div className="textContainer">
                     <h1>Hi! My name is Pierce  </h1>
                     <h1>I am a Software Developer. </h1>
                        <div className="buttons">
                            <button>See my projects!</button>
                            <button>contact me!</button>
                        </div>
                        <img src="scroll.png" alt="" />
                    </div>
                    </div>
                    <div className="imageContainer">    
                        <img src="me.png" alt="" />
                    </div>
                
        
            </div>
    );
    

};

export default Hero;