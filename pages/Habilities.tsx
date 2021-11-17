import React from "react";
import { StyleSheet } from "react-native"
import { Text, Card } from "react-native-elements";
import { BadgeLevel } from "../components/BadgeLevel";
import { SecondaryUpperCaseCardTitle } from "../components/CustomsCardTitles";
import { curricullum } from "../core/curricullumdata";
import { cardContainerStyles } from "../core/styles";
import { BaseItemPage } from "./BaseItemPage";


export function Habilities({navigation}){
  return (
    <BaseItemPage
      items={curricullum.habilities}
      messageNoItem="Não há habilidades para mostrar"
      itemsRenderer={(hability, key, length) => {
        return (
          <Card key={key} containerStyle={key==length-1 ? cardContainerStyles.cardContainerLastChild : null}>
            <SecondaryUpperCaseCardTitle>{hability.name}</SecondaryUpperCaseCardTitle>
            <Card.Divider/>
            <BadgeLevel level={hability.level}></BadgeLevel>
            <Text style={{paddingTop: 10}}>{hability.description}</Text>
          </Card>
        )
        }
      }
    />
  )
}
