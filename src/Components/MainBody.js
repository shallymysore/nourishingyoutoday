import React,{useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './MainBody.css';
import photo from '../images/flower.jpeg'


function MainBody() {

  return (
    <>
    <section id="section1">
    <div className='mainbody-container'>
      <h1>Nourishment Begins Now</h1>
      <p>What are you waiting for?</p>
      <div className='mainbody-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
    </section>
    <section id ="section2">
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="about-me-image">
          <img src={photo} alt="Shashank" />
        </div>
        <div className="about-me-description">
          <h2>About me</h2>
          <p>
          Unlocking the potential of your plate and the power of your body. 
          At our nutrition counseling center, we believe in nourishing both your body and your lifestyle. 
          Through evidence-based guidance and personalized support, 
          we'll explore the art of balanced eating, mindful nourishment, 
          and sustainable wellness practices. 
          Together, we'll create a roadmap to vibrant health, one delicious meal and empowering choice at a time. 
          Join us as we redefine your relationship with food and embrace a journey towards vitality and fulfillment.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem.
          </p>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default MainBody;