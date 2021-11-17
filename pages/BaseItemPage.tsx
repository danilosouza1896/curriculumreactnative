import React from "react";
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, colors, useTheme } from 'react-native-elements'

type BaseItemPageProps = {
  messageNoItem: string
  items: any[]
  itemsRenderer: (item, key, length) => any,
}


export function BaseItemPage(props: BaseItemPageProps){
  const { theme } = useTheme()
  const styles = StyleSheet.create({
    noItemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
      backgroundColor: theme.colors.grey5
    },
    itemContainer: {
      backgroundColor: theme.colors.grey5,
      flex: 1,
      marginBottom: 10
    },
    text:{
      textAlign: 'center',
      color: theme.colors.secondary
    }
  })

  if(props.items==null || props.items.length==0)
    return (
      <View style={styles.noItemContainer}>
        <Text h2 style={styles.text}>{props.messageNoItem}</Text>
      </View>
    );

  return (
    <View style={styles.itemContainer}>
      <ScrollView>
        {
          props.items.map((item, i) => 
            (
              <View>
                {props.itemsRenderer(item, i, props.items.length)}
              </View>
            )
          )
        }
      </ScrollView>
    </View>
  )
}