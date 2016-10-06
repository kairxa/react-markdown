import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const Paragraph = props => (
  <Text style={styles.paragraphStyle}>{props.children}</Text>
);

Paragraph.propTypes = {
  children: React.PropTypes.string,
};

export default Paragraph;
