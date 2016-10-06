import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const Strong = props => (
  <Text style={styles.strongStyle}>{props.children}</Text>
);

Strong.propTypes = {
  children: React.PropTypes.string,
};

export default Strong;
