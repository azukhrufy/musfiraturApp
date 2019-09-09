import React from 'react'; 
import { Dimensions } from 'react-native';

const values = {
    DeviceWidth: Dimensions.get('screen').width,
    DeviceHeight: Dimensions.get('screen').height,
    HeaderLogo: {
        width: 180,
        height: 45,
    },
    colors: {
        primary: '#0d9540',
        secondary: '#76b041',
        inactiveBar: '#8c969c',
        gray: '#DCE0E9',
    }
};

export default values;
