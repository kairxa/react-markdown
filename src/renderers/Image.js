import React from 'react';
import { Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const defaultImageWidth = width;
const defaultImageHeight = (width / 16) * 9;

export default class ImageNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: defaultImageWidth,
      height: defaultImageHeight,
    };
  }

  componentDidMount() {
    if (Image.getSize) {
      Image.getSize(this.props.src, (imageWidth, imageHeight) => {
        this.setState({
          width: imageWidth,
          height: imageHeight,
        });
      });
    }
  }

  render() {
    return (
      <Image
        src={{ uri: this.props.src }}
        style={{ width: this.state.width, height: this.state.height }}
        resizeMode="contain"
      />
    );
  }
}

ImageNode.propTypes = {
  src: React.PropTypes.string,
};
