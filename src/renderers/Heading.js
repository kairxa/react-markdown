import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const headingStyles = {
  1: styles.headingOneStyle,
  2: styles.headingTwoStyle,
  3: styles.headingThreeStyle,
  4: styles.headingFourStyle,
  5: styles.headingFiveStyle,
  6: styles.headingSixStyle,
};

const Heading = props => (
  <Text style={headingStyles[props.level]}>{props.children}</Text>
);

Heading.propTypes = {
  children: React.PropTypes.string,
  level: React.PropTypes.number,
};

export default Heading;
