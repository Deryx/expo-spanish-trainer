import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const AppButton = ({ title, onPress, backgroundColor, color, width, fontSize, fontWeight }: { title: string, onPress: () => void, backgroundColor?: string, color?: string, width?: number, fontSize?: number, fontWeight?: string }) => {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[
                styles.appButtonContainer,
                backgroundColor && { backgroundColor },
                width && { width }
            ]}
        > 
            <Text
                style={[
                    color && { color },
                    fontSize && { fontSize },
                    fontWeight && { fontWeight }
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        marginBottom: 10
    }
});

export default AppButton;