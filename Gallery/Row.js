import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

const propTypes = {
  items: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
};

const Row = ({ items, style }) => (
  <View style={style}>
    {items.map((item, index) => {
      const { image, id } = item;
      const uri = { uri: image.src };
      const styleImg = {
        marginTop: items.length > 1 && index > 0 ? style.marginTop : 0,
        width: style.width,
        height:
          items.length === 1
            ? style.height
            : style.height / items.length - style.marginTop + style.marginTop / items.length,
      };
      return <Image key={id} style={styleImg} source={uri} />;
    })}
  </View>
);

Row.propTypes = propTypes;

export default Row;
