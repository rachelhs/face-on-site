import React from 'react';
import { FirstSection } from '@components/global';
import Navbar from '@common/Navbar';
import image1 from '../../images/art/freddie.png';
import image3 from '../../images/art/eyes.png';
import image2 from '../../images/art/gold.png'
import imageStyles from './images.module.css';

export class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theposition: 0,
      screenHeight: null
    }
    this.listenToScroll = this.listenToScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    //const scrolled = winScroll / height
    const scrolled = winScroll;
  
    this.setState({
      theposition: scrolled,
      screenHeight: height
    })
  }

  render() {
    console.log(this.state.screenHeight);
    return (
      <div>
      {((this.state.theposition < 930 && this.state.screenHeight < 4500) || (this.state.theposition < 2070 && this.state.screenHeight > 4500)) ? <Navbar /> : ''}
      <FirstSection id="images">
        <img className={imageStyles.images} src={image1} alt="person interacting with door"></img>
        <img className={imageStyles.images} src={image2} alt="person interacting with door"></img>
        <img className={imageStyles.images} src={image3} alt="person interacting with door"></img>
      </FirstSection>
    </div>
    );
  }

}

export default Images;





