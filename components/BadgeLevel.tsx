import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Badge, useTheme } from 'react-native-elements'


type BadgeLanguageProps = {
  level: number
}
export function BadgeLevel(props: BadgeLanguageProps){
  const { theme } = useTheme();

  const generateBadges = (level) => {
    let badges = []
    let color = theme.colors.primary
    for(let i=0; i<6; i++){
      color = (level>i) ? theme.colors.secondary : theme.colors.grey3;
      badges.push(<Badge badgeStyle={{...styles.badge, backgroundColor: color}} key={i}></Badge>)
    }
    return badges;
  }
  return (
    <View style={{flexDirection: 'row'}}>
      {generateBadges(props.level)}
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    width: 15,
    height: 15,
    borderRadius: 8
  }
})