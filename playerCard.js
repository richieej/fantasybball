import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { FlatList } from 'react-native';

function PlayerCard(props) {
    return (
        <View style={styles.playercard}>
            <View style={styles.cardpfp}>
                <Image 
                style={styles.icon}
                source={{
                    uri: props.img_uri
                }}
                />
            </View>
            <View style={styles.cardstats}>
                <Text style={styles.header}>{props.name}</Text>
                <View>
                    <Text>Fantasy Points: {props.fp}</Text>
                    <Text>Points: {props.pts}</Text>
                    <Text>Rebounds: {props.reb}</Text>
                    <Text>Assists: {props.ast}</Text>
                </View>
            </View>
        </View>
    );
}

export default PlayerCard;

const styles = StyleSheet.create({  
    playercard: {
      width: '100%',
      borderWidth: 2,
      borderColor: 'grey',
      padding: 10,
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#F3E2B2'
    },
  
    cardpfp: {
      padding: 5,
      width: '20%',
      paddingVertical: 20
    },
  
    cardstats: {
      width: '80%',
      paddingHorizontal: 9
    },

    icon: {
        width: '100%',
        height: 75,
        borderRadius: 10
      },

    header: {
        color: '#1B186F',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    },
  
  });