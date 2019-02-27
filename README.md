# React Native Image Grid

This library makes a gallery the way you want, using a patternScheme.

# Installation

Install the package from npm:

`yarn add --save react-native-image-grid` or `npm i --save react-native-image-grid`

# Example

`import ImageGrid from 'react-native-image-grid'`

Get a list of albums

```js
<ImageGrid />
```

### ImageGrid options

| Attribute         | Values                     | description      |
| ----------------- | -------------------------- | ---------------- |
| `images`          | `[]`                       | array[]          |
| `typeImages`      | `'default'`/`'cameraRoll'` | `default`        |
| `patternScheme`   | `{...object}`              | not optional     |
| `styleContainer`  | `{}`                       | style container  |
| `styleScrollView` | `{}`                       | style ScrollView |

### typeImages option `default`

```js
<ImageGrid />
```

this is format array images:

```js
images = [
  id: 0,
  src: 'http://.......',
]
```

### typeImages option `cameraRoll`

```js
<ImageGrid typeImages="cameraRoll" />
```

```js

images = [
  id: 0,
  src: 'http://.......',
]
```

### patternScheme default options

```js
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const imageBorder = wp("3.44%"); // indent from edge or pitch line between photos

const row0 = [
  [
    {
      width: wp("37.5%"),
      height: hp("40.4%"),
      marginTop: imageBorder,
      marginRight: wp("0%")
    },
    {
      width: wp("37.5%"),
      height: hp("40.4%"),
      marginTop: imageBorder,
      marginRight: wp("0%")
    }
  ],
  [
    {
      width: wp("59.0%"),
      height: hp("40.4%"),
      marginTop: imageBorder,
      marginRight: wp("0%"),
      marginLeft: imageBorder
    }
  ]
];

const row1 = [
  [
    {
      width: wp("61.8%"),
      height: hp("25.0%"),
      marginTop: imageBorder,
      marginRight: imageBorder
    }
  ],
  [
    {
      width: wp("34.6%"),
      height: hp("25.0%"),
      marginTop: imageBorder,
      marginRight: wp("0%")
    }
  ]
];

const row2 = [
  [
    {
      width: wp("29.2%"),
      height: hp("19.0%"),
      marginTop: imageBorder,
      marginRight: imageBorder
    }
  ],
  [
    {
      width: wp("29.2%"),
      height: hp("19.0%"),
      marginTop: imageBorder,
      marginRight: imageBorder
    }
  ],
  [
    {
      width: wp("34.8%"),
      height: hp("19.0%"),
      marginTop: imageBorder,
      marginRight: wp("0%")
    }
  ]
];

// If the tiles run out, you can form by default as you like.

const defaultRow = [
  {
    width: wp("48.2%"),
    height: hp("28.0%"),
    marginTop: imageBorder,
    marginRight: imageBorder
  },
  {
    width: wp("48.2%"),
    height: hp("28.0%"),
    marginTop: imageBorder,
    marginRight: wp("0%")
  }
];

// You can change the location of the Tile as you like.

const rows = [row0, row1, row2];
const patternSchemeDefault = { rows, defaultRow, imageBorder };

export default patternSchemeDefault;
```
