import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalFeedScreen } from '../screens/GlobalFeedScreen';
import { FeedScreen } from '../screens/FeedScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { EditorScreen } from '../screens/EditorScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {

    const iconList: any = {
        GlobalFeedScreen: 'home',
        FeedScreen: 'bookmark',
        EditorScreen: 'pencil',
        ProfileScreen: 'person',
    };

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: 'blue',
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
                let iconName = iconList[route.name];
                return (<Icon name={iconName} size={30} color={color} />)
            }
        }
        )}>
            <Tab.Screen name="GlobalFeedScreen" component={GlobalFeedScreen} />
            <Tab.Screen name="FeedScreen" component={FeedScreen} />
            <Tab.Screen name="EditorScreen" component={EditorScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
}