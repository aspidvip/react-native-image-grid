import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import Row from './Gallery/Row';
import patternSchemeDefault from './Gallery/patternScheme';

class GalleryTile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.buildGrid(),
    };
  }

  static propTypes = {
    images: PropTypes.array.isRequired,
    typeImages: PropTypes.oneOf(['default', 'cameraRoll']),
    patternScheme: PropTypes.object,
    styleContainer: PropTypes.object,
    styleScrollView: PropTypes.object,
  };

  static defaultProps = {
    patternScheme: patternSchemeDefault,
    typeImages: 'default',
    styleContainer: {},
    styleScrollView: {},
  };

  buildGrid = () => {
    const { images, patternScheme, typeImages } = this.props;
    const { rows, defaultRow } = patternScheme;
    let imagesCount = images.length;

    const grid = [];
    let stepImage = 0;
    let idStep = 0;

    for (let i = 0; i < rows.length; i += 1) {
      if (rows[i].length === imagesCount || rows[i].length < imagesCount) {
        for (let y = 0; y < rows[i].length; y += 1) {
          const rowImages = [];
          let rowStyle = {};
          for (let z = 0; z < rows[i][y].length; z += 1) {
            rowImages.push({
              id: stepImage,
              image: {
                src:
                  typeImages === 'default'
                    ? images[stepImage].src
                    : images[stepImage].node.image.uri,
              },
            });
            rowStyle = { ...rows[i][y][z] };
            stepImage += 1;
            imagesCount -= rows[i].length;
          }
          grid.push({
            id: idStep,
            style: rowStyle,
            items: rowImages,
          });
          idStep += 1;
        }
      } else {
        break;
      }
    }

    if (imagesCount > 0) {
      const stepStart = images.length - imagesCount;
      let columnIndex = 0;
      for (let i = stepStart; i < images.length; i += 1) {
        const column = columnIndex % defaultRow.length;
        const rowImages = [];
        rowImages.push({
          id: i,
          image: {
            src: typeImages === 'default' ? images[stepImage].src : images[i].node.image.uri,
          },
        });
        const rowStyle = { ...defaultRow[column] };
        grid.push({
          id: idStep,
          style: rowStyle,
          items: rowImages,
        });
        idStep += 1;
        columnIndex += 1;
      }
    }

    return grid;
  };

  renderRows = ({ id, items, style }) => <Row key={id} style={style} items={items} />;

  render() {
    const { images, styleContainer, styleScrollView } = this.props;
    const { grid } = this.state;
    const style = {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    };
    return (
      <View style={styleContainer}>
        {images.length ? (
          <ScrollView style={styleScrollView}>
            <View style={style}>{grid.map(item => this.renderRows(item))}</View>
          </ScrollView>
        ) : null}
      </View>
    );
  }
}

export default GalleryTile;
