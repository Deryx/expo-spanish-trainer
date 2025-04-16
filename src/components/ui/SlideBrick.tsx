import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface SlideBrickProps {
    text: string;
    brickColor: string;
}

const SlideBrick = ({ text, brickColor } : SlideBrickProps) => {
    return (
        <View style={{ backgroundColor: brickColor }}>
            <Text>{ text }</Text>           
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default SlideBrick;