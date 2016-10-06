import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const TextNode = props => (
  <Text style={styles.textStyle}>{props.children}</Text>
);

TextNode.propTypes = {
  children: React.PropTypes.string,
};

export default TextNode;
