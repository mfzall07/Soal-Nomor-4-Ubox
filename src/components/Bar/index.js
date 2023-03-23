import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'

const Bar = ({barTitle, barColor, percentage}) => {
    return (
        <View>
            <Text style={{ color: '#000000', fontSize: 14, fontWeight: 600 }}>{barTitle}</Text>
            <Gap height={5}/>
            <View style={styles.mainBar}>
                <View style={{ backgroundColor: barColor, width: percentage, height: 30, borderRadius: 12 }}/>
            </View>
        </View>
    )
}

export default Bar

const styles = StyleSheet.create({
    mainBar: {
        borderWidth: 1,
        borderRadius: 12,
        height: 30,
        borderColor: 'rgba(43, 43, 43, 0.3)',
        display: 'flex',
        justifyContent: 'center'
    }
})