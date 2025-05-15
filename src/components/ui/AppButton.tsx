import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { ReactElement} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppButton = ({ title, onPress, icon, backgroundColor }: { title: string, onPress: () => void, backgroundColor?: string, icon?: ReactElement }) => {
    return (
        <View style={styles.appButtonContainer}>
            <Icon.Button
                name={icon}
                backgroundColor={backgroundColor}
                onPress={onPress}
            >
                <Text style={styles.appButtonText}>{title}</Text>
            </Icon.Button>
        </View>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        padding: 0,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        marginBottom: 10,
    },
    appButtonText: {
        textAlign: 'center',
        padding: 0,
        margin: 0,
        width: '100%',
    }
});

export default AppButton;