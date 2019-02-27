import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const imageBorder = wp('3.44%');

const row0 = [
  [
    {
      width: wp('37.5%'),
      height: hp('40.49%'),
      marginTop: imageBorder,
      marginRight: wp('0%'),
    },
    {
      width: wp('37.5%'),
      height: hp('40.49%'),
      marginTop: imageBorder,
      marginRight: wp('0%'),
    },
  ],
  [
    {
      width: wp('59.00%'),
      height: hp('40.49%'),
      marginTop: imageBorder,
      marginRight: wp('0%'),
      marginLeft: imageBorder,
    },
  ],
];

const row1 = [
  [
    {
      width: wp('61.88%'),
      height: hp('25.00%'),
      marginTop: imageBorder,
      marginRight: imageBorder,
    },
  ],
  [
    {
      width: wp('34.68%'),
      height: hp('25.00%'),
      marginTop: imageBorder,
      marginRight: wp('0%'),
    },
  ],
];

const row2 = [
  [
    {
      width: wp('29.20%'),
      height: hp('19.00%'),
      marginTop: imageBorder,
      marginRight: imageBorder,
    },
  ],
  [
    {
      width: wp('29.20%'),
      height: hp('19.00%'),
      marginTop: imageBorder,
      marginRight: imageBorder,
    },
  ],
  [
    {
      width: wp('34.80%'),
      height: hp('19.00%'),
      marginTop: imageBorder,
      marginRight: wp('0%'),
    },
  ],
];

const defaultRow = [
  {
    width: wp('48.28%'),
    height: hp('28.0%'),
    marginTop: imageBorder,
    marginRight: imageBorder,
  },
  {
    width: wp('48.29%'),
    height: hp('28.0%'),
    marginTop: imageBorder,
    marginRight: wp('0%'),
  },
];

const rows = [row0, row1, row2];
const patternSchemeDefault = { rows, defaultRow, imageBorder };

export default patternSchemeDefault;
