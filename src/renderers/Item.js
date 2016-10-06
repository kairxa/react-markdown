import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const Item = (props, context) => {
  const { children, nodeKey } = props;
  const listPrefix = context.type === 'Bullet' ? '● ' : `${nodeKey + 1}. `;

  return <Text style={styles.itemStyle}>{listPrefix}{children}</Text>;
};

Item.contextTypes = {
  type: React.PropTypes.string,
};

Item.propTypes = {
  children: React.PropTypes.string,
  nodeKey: React.PropTypes.string,
};

export default Item;
