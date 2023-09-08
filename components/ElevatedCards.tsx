import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <SafeAreaView>
            <Text style={styles.headingText}> India's Trending places</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card , styles.elevatedCard]}>
                <Image source={require('../Images/bihar.jpg')} style={styles.imageCard} />
               </View>
                <View style={[styles.card , styles.elevatedCard]}>
                <Image source={require('../Images/Panjab.jpeg')} style={styles.imageCard} />
                </View>
                <View style={[styles.card , styles.elevatedCard]}>
                <Image source={require('../Images/Mumbai.jpg')} style={styles.imageCard} />
                </View>
                <View style={[styles.card , styles.elevatedCard]}>
                <Image source={require('../Images/Rajasthan.jpg')} style={styles.imageCard} />
                </View>
                <View style={[styles.card , styles.elevatedCard]}>
                <Image source={require('../Images/up.jpeg')} style={styles.imageCard} />
                </View>
                <View style={[styles.card , styles.elevatedCard]}>
                <Image source={require('../Images/manipur.jpg')} style={styles.imageCard} />
                </View>
                <View style={[styles.card , styles.elevatedCard]}>
                <Image source={require('../Images/tamilnadu.jpg')} style={styles.imageCard} />
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
     container:{
     padding:8
      
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // width:250,
        // height:250,
        borderRadius:4,
        margin:8,
    },
    elevatedCard:{
        backgroundColor:'gray'
    },
    imageCard:{
        width:200,
        height:200,
    },
})
