import React from "react";
import { StyleSheet } from "react-native"
import { Text, Card, useTheme } from "react-native-elements";
import { SecondaryUpperCaseCardTitle } from "../components/CustomsCardTitles";
import { IconText } from "../components/IconText";
import { curricullum } from "../core/curricullumdata";
import { BaseItemPage } from "./BaseItemPage";

export function ProfessionalExperience({navigation}){
  const { theme } = useTheme()

  const styles = StyleSheet.create({
    cardContainer: {
      borderWidth: 0,
      shadowColor: theme.colors.primary
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%'
    },
    text:{
      textAlign: 'center',
      color: theme.colors.secondary
    },
    subtitle: {
      fontWeight: 'bold',
      color: theme.colors.grey3,
    }
  })

  return (
    <BaseItemPage 
      items={curricullum.profissionalExperience} 
      messageNoItem="Não há experiência profissional a mostrar"
      itemsRenderer={
        (item, key) => (
          <Card key={key} containerStyle={{...styles.cardContainer}}>
            <SecondaryUpperCaseCardTitle>{item.company}</SecondaryUpperCaseCardTitle>
            <Card.Divider></Card.Divider>
            <Text style={styles.subtitle}>{item.ocupation} - {item.level}</Text>
            <IconText icon="clock" iconType="font-awesome-5">{`${item.yearStart} - ${item.yearEnd}`}</IconText>
            <Text style={{paddingTop: 10}}>{item.description}</Text>
          </Card>
        )
      }
    />
  )
}