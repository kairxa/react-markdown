import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this.handleLinkPress = this.handleLinkPress.bind(this);
  }

  handleLinkPress() {
    const { href } = this.props;

    Linking.canOpenURL(href).then((supported) => {
      if (supported) {
        Linking.openURL(href);
      }
    });
  }

  render() {
    return (
      <TouchableOpacity>
        <View>
          <Text style={styles.linkStyle}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Link.propTypes = {
  children: React.PropTypes.string,
  href: React.PropTypes.string,
};
