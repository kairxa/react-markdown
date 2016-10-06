import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Paragraph = props => (
  <View style={styles.blockQuoteStyle}>
    <Text style={styles.paragraphStyle}>{props.children}</Text>
  </View>
);

Paragraph.propTypes = {
  children: React.PropTypes.string,
};

export default Paragraph;
