import React from "react";
import { Pressable } from "react-native";
import { Text, useTheme } from "react-native-elements";

type LinkedTextProps = {
  url: string
  children: string,
  style?: StyleSheet
}
export function LinkedText(props: LinkedTextProps){
  const { theme } = useTheme();
  return (
    <Pressable>
      <Text style={{...props.style, color: theme.colors.primary}}>{props.children}</Text>
    </Pressable>
  )
}