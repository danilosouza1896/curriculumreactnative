import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"; 
import { Card, Avatar, Text, colors, useTheme } from 'react-native-elements'
import { IconText, LinkedIconText } from "../components/IconText";
import { MenuItems } from "../components/MenuItems";
import { curricullum } from "../core/curricullumdata";


export function HomeHeader(){
  const { theme } = useTheme()
  const styles = StyleSheet.create({
    titles: {
      marginTop: 10,
      marginLeft: 10
    },
  })

  return (
    <View style={{flexDirection:'row', padding: 10, backgroundColor: theme.colors.white}}>
      <View>
        <Avatar 
          source={require('../images/avatar.jpeg')} 
          rounded
          size="large"
        />
      </View>
      <View style={styles.titles}>
        <Text h4>{curricullum.name}</Text>
        <Text>{curricullum.ocupation}</Text>
      </View>
    </View>
  )
}


export function Home({navigation}) {
  const { theme } = useTheme()
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.grey5
    },
    contentContainer: {
      margin: 10,
      marginTop: 10,
      marginBottom: 0
    },
    titles: {
      marginTop: 10,
      marginLeft: 10
    },
    infoTitle: {
      fontWeight: 'bold',
      marginTop: 2,
      marginBottom: 2,
      color: theme.colors.grey1
    }
  })

  return (
    <View style={styles.container}>
      <ScrollView>
        <HomeHeader/>
        <View style={styles.contentContainer}>
          <View>
            <IconText icon="clock" iconType="font-awesome-5">{curricullum.phoneNumber}</IconText>
            <IconText icon="address-card" iconType="font-awesome-5">{curricullum.address}</IconText>
            <IconText icon="at" iconType="font-awesome-5">{curricullum.email}</IconText>
          </View>
          <View style={{marginTop: 10}}>
            <LinkedIconText icon="linkedin" iconType="font-awesome-5" src={curricullum.linkedin}>Linkedin</LinkedIconText>
            <LinkedIconText icon="github" iconType="font-awesome-5" src={curricullum.github}>Github</LinkedIconText>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={{color: theme.colors.grey1}}>
            {curricullum.objective}
          </Text>
        </View>
        <Card containerStyle={{margin: 10, padding: 0, marginBottom: 10}}>
          <MenuItems navigation={navigation}/>
        </Card>
      </ScrollView>
    </View>
  );
}
