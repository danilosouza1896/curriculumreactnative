import React from "react";
import { Card, Text } from "react-native-elements";
import { SecondaryUpperCaseCardTitle } from "../components/CustomsCardTitles";
import { IconText } from "../components/IconText";
import { curricullum } from "../core/curricullumdata";
import { cardContainerStyles } from "../core/styles";
import { BaseItemPage } from "./BaseItemPage";

export function ComplementarFormation({navigation}){
  return (
    <BaseItemPage
      items={curricullum.complementarFormation}
      messageNoItem="Não há formação complementar para mostrar"
      itemsRenderer={
        (formation, key, length) => (
          <Card key={key} containerStyle={key==length-1 ? cardContainerStyles.cardContainerLastChild : null}>
            <SecondaryUpperCaseCardTitle>{`${formation.instituteAbbreviation} - ${formation.institute}`}</SecondaryUpperCaseCardTitle>
            <Card.Divider/>
            <IconText icon="clock" iconType="font-awesome-5">{`${formation.yearStart} - ${formation.yearEnd}`}</IconText>
            <Text>{formation.description}</Text>
          </Card>
        )
      }
    />
  );
}