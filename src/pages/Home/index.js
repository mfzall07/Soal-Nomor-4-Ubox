import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../Api'
import { Bar, Gap } from '../../components'

const Home = () => {

    return (
        <View style={styles.container}>
            <View style={{ borderBottomWidth: 1 , borderBottomColor: '#2B2B2B', marginBottom: 10 }}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 900 }}>Bar Progress</Text>
            </View>
            <Bar 
                barTitle={'Default'}
                barColor={'#3C3C3C'}
                percentage={'50%'}
            />
            <Gap height={10}/>
            <Bar 
                barTitle={'First'}
                barColor={'red'}
                percentage={'60%'}
            />
            <Gap height={10}/>
            <Bar 
                barTitle={'Second'}
                barColor={'blue'}
                percentage={'70%'}
            />
            <Gap height={10}/>
            <Bar 
                barTitle={'Third'}
                barColor={'green'}
                percentage={'80%'}
            />
            <Gap height={10}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16
    }
})