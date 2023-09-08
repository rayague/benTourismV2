import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fanceycard() {
    return (
        <SafeAreaView>
            <Text style={styles.headingText} >Abrod Trending places</Text>
            <View>
                <View>
                    <View style={[styles.card , styles.cardElevated,styles.alignCenter]}>
                        <Image
                            source={{
                                uri:'https://im.indiatimes.in/media/content/2015/Jan/indonesia-exploring-tourism_1421318041_725x725.jpg'
                            }}
                            style={styles.cardImage}
                        />
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Largest tropical forests</Text>
                        <Text style={styles.cardLabel}>Indonesia </Text>
                        <Text style={styles.cardDescription}>The land of volcanoes, Indonesia also has some of the largest tropical forests and flora and fauna that will stun you. The Indonesian beaches are clear and the blue waters are a treat. Apart from natural scenes, Indonesia also offers a lot of Hindu monuments and temples for the religious.</Text>
                        <Text style={styles.cardFooter}>Rs.72,999</Text>
                    </View>
                </View>

                <View>
                <View style={[styles.card , styles.cardElevated,styles.alignCenter]}>
                            <Image
                            source={{
                                uri:'https://im.indiatimes.in/media/content/2015/Jan/south-korea-ccny_1421316238_725x725.jpg'
                            }}
                            style={styles.cardImage}
                        />
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>UNESCO Natural lovers</Text>
                        <Text style={styles.cardLabel}>South Korea</Text>
                        <Text style={styles.cardDescription}>Another unexplored destination, South Korea offers a host of UNESCO heritage sites, national parks, treks for the adventure lover and folk villages/temples. The natural wonders, beaches and caves are also worth exploring.</Text>
                        <Text style={styles.cardFooter}>Rs.215,998</Text>
                    </View>
                </View>

                
                <View>
                <View style={[styles.card , styles.cardElevated,styles.alignCenter]}>
                        <Image
                            source={{
                                uri:"https://im.indiatimes.in/media/content/2015/Jan/singapore-marhsall-university_1421316697_725x725.jpg"
                            }}
                            style={styles.cardImage}
                        />
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Modern structures</Text>
                        <Text style={styles.cardLabel}> Singapore </Text>
                        <Text style={styles.cardDescription}>One of the most beautiful countries, Singapore has a lot to offer in terms of nature, culture and cuisine, modern structures and architecture, monuments and beaches. A small country and populated, you will get a slightly 'Indian' feel here.</Text>
                        <Text style={styles.cardFooter}>Rs.115,898</Text>
                    </View>
                </View>

                
                <View>
                <View style={[styles.card , styles.cardElevated,styles.alignCenter]}>
                        <Image
                            source={{
                                uri:"https://im.indiatimes.in/media/content/2015/Jan/bangkok-go-holidays_1421317621_725x725.jpg"
                            }}
                            style={styles.cardImage}
                        />
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Shopaholics country</Text>
                        <Text style={styles.cardLabel}>Bangkok </Text>
                        <Text style={styles.cardDescription}>A haven for shopaholics. Go here only for the shopping experience and the crazy street-side food. The ladyboy shows will leave you stunned and you will be left amazed at the grace and skill with which they dance</Text>
                        <Text style={styles.cardFooter}>Rs.45,690</Text>
                    </View>
                </View>

                <View>
                <View style={[styles.card , styles.cardElevated,styles.alignCenter]}>
                        <Image
                            source={{
                                uri:"https://im.indiatimes.in/media/content/2015/Jan/dubai-capital-radio_1421316100_725x725.jpg"
                            }}
                            style={styles.cardImage}
                        />
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Burj Khalifa</Text>
                        <Text style={styles.cardLabel}>Dubai </Text>
                        <Text style={styles.cardDescription}>This is probably every Indian's favourite destination when it comes to going abroad. Famous for its architecture, malls and shopping, Dubai is the Mecca for the middle-class Indian</Text>
                        <Text style={styles.cardFooter}>Rs.325,690</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical:10,
    },
    alignCenter:{
        // flex:1,
        // justifyContent:'center',
        alignItems:'center'
    },
    card:{
        // width: 320,
        // height: 280,
        // backgroundColor:'gray'
    },
    cardElevated:{
    //    backgroundColor:'#ffffff',
        // elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage: {
        width: 330,
        height: 290,
        // borderRadius:6,
        marginBottom:0,
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        // borderTopEndRadius:10,
        // marginHorizontal:15,
        // marginVertical:12,

    },
    cardBody: {
        flex:1,
        flexGrow:1,
        backgroundColor:'#ffffff',
        paddingBottom:20,
        marginHorizontal:15,
        // marginVertical:0,
        marginBottom:20,
        paddingHorizontal:5,
    },
    cardTitle: {
        color:"#000000",
        fontSize: 23,
        fontWeight: 'bold',
        textAlign:'auto',
        marginBottom:4,
    }, 
    cardLabel: {
        color:"#111",
        fontSize: 18,
        fontWeight: '400',
        marginBottom:6,

    },
    cardDescription: {
        color:"#333333",
        fontSize: 12,
        fontWeight: '400',
        marginBottom:10,
        marginTop:5,

    },
    cardFooter: {
        color:"#000000",
        fontSize: 16,
        fontWeight: '600',
    },
})