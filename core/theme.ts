import { colors } from 'react-native-elements'

const primary = '#23B5D3';
const secondary = '#75ABBC';
const grey5 = '#F2F5F3';
const grey4 = '#ACBEBD';
const grey3 ='#677C86';
const grey2 = '#23304E';
const grey1 =  '#1D193C';
const grey0 =  '#1D1029';

export const myTheme = {
  colors: {
    ...colors,
    primary: primary,
    secondary: secondary,
    grey5: grey5,
    grey4: grey4,
    grey3: grey3,
    grey2: grey2,
    grey1: grey1,
    grey0: grey0
  },
  Button: {
    titleStyle:{
      color: '#23B5D3'
    }
  },
  Card:{
    containerStyle: {
      borderWidth: 0
    },
  }
}