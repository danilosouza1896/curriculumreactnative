import React from "react";
import { Card, Text } from "react-native-elements";
import { SecondaryUpperCaseCardTitle } from "../components/CustomsCardTitles";
import { curricullum } from "../core/curricullumdata";
import { cardContainerStyles } from "../core/styles";
import { BaseItemPage } from "./BaseItemPage";

export function Extracurricular({navigation}){
  return (
    <BaseItemPage
      items={curricullum.extraCurricularActivities}
      messageNoItem="Não há atividades extracurriculares para mostrar"
      itemsRenderer={(item, key, length) => (
        <Card key={key} containerStyle={key==length-1 ? cardContainerStyles.cardContainerLastChild : null}>
          <SecondaryUpperCaseCardTitle>{item.title}</SecondaryUpperCaseCardTitle>
          <Card.Divider/>
          <Text>
            {item.description}
          </Text>
        </Card>
      )}
    />
  )
}