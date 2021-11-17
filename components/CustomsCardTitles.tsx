import React from "react";
import { Card, useTheme } from "react-native-elements";

type SecondaryUpperCaseCardTitle = {
  children: string
}

export function SecondaryUpperCaseCardTitle(props: SecondaryUpperCaseCardTitle){
  const { theme } = useTheme();

  return (
    <Card.Title style={{color: theme.colors.secondary}}>{props.children.toUpperCase()}</Card.Title>
  )
}