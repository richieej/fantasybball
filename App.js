import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import top5feb13 from './Top5Fantasy.json'
import { FlatList } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Text style={styles.header}>Fantasy Basketball</Text>
        <Image
          style={styles.banner}
          source={{
            uri: 'https://fadeawayworld.net/wp-content/uploads/2020/06/104043827_816012508927458_2023454535804277159_n.jpg'
          }}
        />
      </View>
      <View style={styles.bottombanner}>
        <Text style={[styles.header, styles.big]}> Daily Top 5</Text>
      </View>

      <FlatList
        data={top5feb13.top5feb13}
        renderItem={
          (obj) => {
            return (
              <View style={styles.playercard}>
                <View style={styles.cardpfp}>
                  <Image 
                    style={styles.icon}
                    source={{
                      uri: obj.item.img_uri
                    }}
                  />
                </View>
                <View style={styles.cardstats}>
                  <Text style={styles.header}>{obj.item.name}</Text>
                  <View>
                    <Text>Fantasy Points: {obj.item.fp}</Text>
                    <Text>Points: {obj.item.pts}</Text>
                    <Text>Rebounds: {obj.item.reb}</Text>
                    <Text>Assists: {obj.item.ast}</Text>
                  </View>
                </View>
              </View>
            )
          }
        }
        keyExtractor={(item) => {
          return (
            item.id.toString()
          )
        }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#F2CE6B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },

  header: {
    color: '#1B186F',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10
  },

  banner: {
    width: 400,
    height: 100,
    alignItems: 'baseline',
    justifyContent: 'flex-start'
  },

  bottombanner: {
    backgroundColor: '#D4D4D4'
  },

  icon: {
    width: '100%',
    height: 75,
    borderRadius: 10
  },

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
    width: '20%'
  },

  cardstats: {
    width: '80%',
    paddingHorizontal: 9
  },

  big: {
    fontSize: 25
  }
});
