import react from 'react';
import { View, Text, StyleSheet, ViewStyle, StyleProp, Pressable } from 'react-native';
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface CustomButtonProps {
    x?: number;
    y?: number;
    width: number;
    height: number;
    radius?: number;
    style?: StyleProp<ViewStyle>;
    title?: string | null;
    color?: string;
    Icon?: () => JSX.Element;
    onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    x,
    y,
    width,
    height,
    radius = 20,
    style,
    title = null,
    color = '#39A4FF',
    Icon = () => (<View />),
    onPress = () => { }
}) => {
    const scale = useSharedValue(1);

    const animStyle = useAnimatedStyle(() => ({
        width: width - 20,
        height: height - 20,
        borderRadius: radius / 2,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ scale: scale.value }]
    }));

    const handlePress = () => {
        scale.value = withTiming(0.9, { duration: 100, easing: Easing.out(Easing.quad) }, () => {
            scale.value = withTiming(1, { duration: 100, easing: Easing.out(Easing.quad) }, (finished) => {
                runOnJS(onPress)() ; // Animasyon tamamlandığında navigasyon işlemini gerçekleştir
            });
        });
    };

    return (
        <Pressable onPress={handlePress} style={style}>
            <View style={[styles.shadowStyle, { width: width, height: height, borderRadius: radius }]} />
            <View style={[styles.containerStyle, { width: width, height: height, borderRadius: radius }]}>
                <View style={[styles.innerShadow, { width: width - 20, height: height - 20, borderRadius: radius / 2 }]} />
                <Animated.View style={animStyle}>
                    {Icon && Icon()}
                    {title && <Text style={styles.textStyle}>{title}</Text>}
                </Animated.View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#F3EBDF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerShadow: {
        backgroundColor: '#E6CFC1',
        position: 'absolute',
    },
    shadowStyle: {
        position: 'absolute',
        backgroundColor: '#E6CFC1',
        left: 4,
        top: 5,
    },
    textStyle: {
        fontFamily: 'monospace',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default CustomButton;
