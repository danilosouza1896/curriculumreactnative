import React from "react";
import { Text, Card} from "react-native-elements";
import { SecondaryUpperCaseCardTitle } from "../components/CustomsCardTitles";
import { IconText } from "../components/IconText";
import { curricullum } from "../core/curricullumdata";
import { cardContainerStyles } from "../core/styles";
import { BaseItemPage } from "./BaseItemPage";

export function Formation({navigation}){
  return (
    <BaseItemPage
      items={curricullum.formation}
      messageNoItem={"Não há formação a mostrar"}
      itemsRenderer = {(item, key, length)=> (
        <Card key={key} containerStyle={key==length-1 ? cardContainerStyles.cardContainerLastChild : null}>
          <SecondaryUpperCaseCardTitle>{`${item.instituteAbbreviation} - ${item.institute}`}</SecondaryUpperCaseCardTitle>
          <Card.Divider/>
          <IconText icon="clock" iconType="font-awesome-5">{`${item.yearStart} - ${item.yearEnd}`}</IconText>
          <Text>{item.description}</Text>
        </Card>
      )}
    />
  )
}
