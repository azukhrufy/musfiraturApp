import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

// const ScreenWidth = Dimensions.get('screen').width;

// const ScreenHeight = Dimensions.get('screen').height;

const AppStyles = StyleSheet.create({
    ScreenHeight: Dimensions.get('screen').height,
    ScreenWidth: Dimensions.get('screen').width,
    
    MainContainer: {
        flex: 1,
        flexDirection: 'column'
    },

    // MainColor: '#ff5a66',
});

export default AppStyles;
