import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const CodeBlock = props => (
  <View style={styles.codeBlockStyle}>{props.children}</View>
);

CodeBlock.propTypes = {
  children: React.PropTypes.element,
};

export default CodeBlock;
