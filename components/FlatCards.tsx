import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card , styles.cardone]}>
        <Image
            source={{
                uri:'https://im.indiatimes.in/media/content/2015/Jan/china-wikipedia_1421317376_725x725.jpg'
            }}
            style={styles.cardImage}
         />
        </View>
        <View style={[styles.card , styles.cardtwo]}>
        <Image
            source={{
                uri:"https://im.indiatimes.in/media/content/2015/Jan/maldives-twisted-sifter_1421316320_725x725.jpg"
            }}
            style={styles.cardImage}
         />
        </View>
        {/* <View style={[styles.card , styles.cardthree]}>
            <Text>green</Text>
        </View> */}
        
        
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    cardImage: {
        width: 170,
        height: 100,
        

    },
    headingText:{
        fontSize:30,
        fontWeight:'bold',
        paddingHorizontal: 8
    },
    container:{
        flex:1,
        flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center',
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // width:125,
        // height:125,
        borderRadius:4,
        margin:8,
    },
    cardone:{
        backgroundColor:'orange'
    },
    cardtwo:{
        backgroundColor:'#ffffff'

    },
    cardthree:{
        backgroundColor:'green'
    },
    cardfour:{
        backgroundColor:'red'
    },
})