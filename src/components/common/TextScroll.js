import React from 'react';
import AOS from 'aos';
import classNames from 'classnames';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'

const ViewStyle = props => (
    <div className={ props.componentStyle } data-aos={ props.aos }>
      <p>{ props.text }</p>
    </div>
  );

  export default Watch(
    class TextScroll extends React.Component {
      componentDidMount() {
        this.aos = AOS;
        this.aos.init({
          duration: 1500,
          once: true
        });
      }
      componentDidUpdate() {
        this.aos.refresh();
      }
      render() {
        const aosClass = classNames({
          "aos-init": true,
        });
        
        return(
          <span>
            { this.props.isInViewport ? (
              <ViewStyle
                aos="fade-up"
                componentStyle={ aosClass }
                text={this.props.text}
              />
            ) : (
              <ViewStyle
                aos="fade-up"
                componentStyle={ aosClass }
                text={this.props.text}
              />
            )}
            { this.props.children }
          </span>
        );
      }
    }
  );