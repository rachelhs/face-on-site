import React, { Component } from 'react';
import LinkStyles from './LinkComponent.module.css';

class LinkComponent extends Component {

    render() {
        
        const url = this.props.url;
        const concatUrl = "../" + url;

        return (
            <div className={LinkStyles}>
            <a target="_blank" rel="noopener noreferrer" href={concatUrl}>
            <p className={LinkStyles.bubble}>{this.props.text}</p>
            </a>
            </div>
        );
    }
}

export default LinkComponent;