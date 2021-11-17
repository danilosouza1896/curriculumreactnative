import React from "react";
import { Pressable, View, Linking } from 'react-native'
import { Text, Icon, useTheme } from 'react-native-elements'

type IconTextProps = {
  icon: string,
  iconType: string,
  children: string,
}

export function IconText(props : IconTextProps){
  const { theme } = useTheme();
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{width: 25, alignItems: 'flex-start'}}>
        <Icon name={props.icon} type={props.iconType} color={theme.colors.grey3} size={15} style={{paddingTop: 2, paddingRight: 5}}/>
      </View>
      <View>
        <Text style={{color: theme.colors.grey3, fontWeight: "bold"}}>{props.children}</Text>
      </View>
    </View>
  )
}

type LinkedIconTextProps = {
  icon: string,
  iconType: string,
  children: string,
  src: string,
}

export function LinkedIconText(props: LinkedIconTextProps){
  const { theme } = useTheme();
  const handleLink = () => Linking.openURL(props.src) 
  return (
    <Pressable style={{flexDirection: 'row'}} onPress={handleLink}>
      <View style={{width: 25, alignItems: 'flex-start'}}>
        <Icon name={props.icon} type={props.iconType} color={theme.colors.primary} size={15} style={{paddingTop: 2, paddingRight: 5}}/>
      </View>
      <View>
        <Text style={{color: theme.colors.primary, fontWeight: "bold"}}>{props.children}</Text>
      </View>
    </Pressable>
  )
}