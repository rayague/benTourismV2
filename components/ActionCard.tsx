import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWesite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText} >BlogCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.hederText}>What's new in React-Native -ES12</Text>
                </View>
                <TouchableOpacity
                    onPress={() => openWesite('https://www.youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c')}
                >
                    <Image
                        source={require('../Images/react-native-blog.jpg')}
                        style={styles.cardImage}
                    />
                </TouchableOpacity>

                <View style={styles.bodyContainer} >
                    <Text numberOfLines={4}>
                        These are just a few examples of navigation options in React Native using the React Navigation library. Each navigation option has its own set of features and customization options. Make sure to install the required packages (@react-navigation/native, @react-navigation/stack, @react-navigation/bottom-tabs, etc.)
                    </Text>
                </View>
                <View style={styles.footerContainer} >
                    <TouchableOpacity
                        onPress={() => openWesite('https://amarkumar.netlify.app/')}
                    >
                        <Text style={styles.headingText}>
                            More about developer
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingBottom: 10,
    },
    card: {
        alignItems: 'center'
    },
    elevatedCard: {},
    headingContainer: {
        margin: 10,
        // fontSize:20,
        // fontWeight:'700'
    },
    hederText: {
        fontSize: 18,
        fontWeight: '600'
    },
    cardImage: {
        width: 300,
        height: 200,
        borderRadius: 6,
        marginBottom: 0,
        // borderTopRightRadius:8,
        // borderTopLeftRadius:8,
        // borderTopEndRadius:10,
        // marginHorizontal:15,
        // marginVertical:12,

    },
    bodyContainer: {
        // fontSize:18,
        // fontWeight:'600',
        marginHorizontal: 15,
        marginVertical: 12,
    },
    footerContainer: {
        // fontSize:18,
        // fontWeight:'600'
    },
})