import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>
                    
                </Text>
            </View>

            <View style={styles.content}>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
    flexDirection: 'column',
    height: '100%'
   },
   header: {
    backgroundColor: '#C60A1E',
    height: '10%'
   },
   content: {
    backgroundColor: '#FFC400',
    height: '90%'
   }
});

export default HomeScreen;