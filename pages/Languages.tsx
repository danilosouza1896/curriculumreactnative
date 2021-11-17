import React from "react";
import { View } from "react-native";
import { curricullum } from "../core/curricullumdata";
import { Text, Card } from "react-native-elements";
import { BaseItemPage } from "./BaseItemPage";
import { BadgeLevel } from "../components/BadgeLevel";
import { SecondaryUpperCaseCardTitle } from "../components/CustomsCardTitles";
import { cardContainerStyles } from "../core/styles";

export function Languages({navigation}){
  return (
    <BaseItemPage
      items={curricullum.languages}
      messageNoItem={"Não há idiomas para mostrar"}
      itemsRenderer={(language, key, length) => (
        <Card key={key} containerStyle={key==length-1 ? cardContainerStyles.cardContainerLastChild : null}>
          <SecondaryUpperCaseCardTitle>{language.language}</SecondaryUpperCaseCardTitle>
          <Card.Divider/>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text>Leitura</Text>
            </View>
            <BadgeLevel level={language.readLevel}/>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text>Escrita</Text>
            </View>
            <BadgeLevel level={language.writeLevel}/>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text>Conversação</Text>
            </View>
            <BadgeLevel level={language.talkLevel}/>
          </View>
        </Card>
      )}
    />
  )
}