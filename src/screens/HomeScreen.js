import { View, StyleSheet, useWindowDimensions} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomButton from '../components/CustomButton';




function HomeScreen({ navigation }) {
    const { height, width } = useWindowDimensions();


    return (
        <View style={{ flex: 1 }}>
            <CustomButton
                width={200}
                height={60}
                title={'Play'}
                style={{ position: 'absolute', left: width / 2 - 100, top: height / 2 - 30 }}
                onPress={() => { navigation.navigate('GameScreen') }}
            />
        </View>
    )
}

const Styles = StyleSheet.create({

})

export default HomeScreen;