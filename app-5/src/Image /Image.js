import React, {Component} from 'react';

class Image extends Component {

    render() {
        return (
            <div>
                <img src={this.props.url} alt='Happy dog'/>
                <caption></caption>
            </div>
        )
    }
}

export default Image;