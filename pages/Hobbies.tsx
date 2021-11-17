import React from "react";
import { Card, Text } from "react-native-elements";
import { SecondaryUpperCaseCardTitle } from "../components/CustomsCardTitles";
import { curricullum } from "../core/curricullumdata";
import { cardContainerStyles } from "../core/styles";
import { BaseItemPage } from "./BaseItemPage";

export function Hobbies({navigation}){
  return (
    <BaseItemPage 
      items={curricullum.hobbies} 
      messageNoItem="Não há hobbies para mostrar!"
      itemsRenderer={(item, key, length) => (
        <Card key={key} containerStyle={key==length-1 ? cardContainerStyles.cardContainerLastChild : null}>
          <SecondaryUpperCaseCardTitle>{item.title}</SecondaryUpperCaseCardTitle>
          <Card.Divider/>
          <Text>{item.description}</Text>
        </Card>
      )}
    />
  )
}