import React from 'react';
import { Text, View } from 'react-native';
import { Posts } from '../components/Posts';
import { styles } from '../theme/appTheme';

export const GlobalFeedScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={ styles.tittle }> GlobalFeedScreen </Text>
            <Posts></Posts>
        </View>
    );
};
