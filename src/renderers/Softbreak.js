import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const Softbreak = props => (
  <Text style={styles.textStyle}>{props.children}</Text>
);

Softbreak.propTypes = {
  children: React.PropTypes.string,
};

export default Softbreak;
