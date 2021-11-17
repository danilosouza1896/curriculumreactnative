import React from 'react'
import { Header, Button, Icon, colors, useTheme } from 'react-native-elements'
import { pages } from '../pages/Pages'


export function MyHeader({navigation, pageTitle}){

  return (
    <Header
      placement="left"
      leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.navigate(pages.menu) }}
      centerComponent={{ text: pageTitle.toUpperCase(), style: { color: '#fff', marginTop: 3 } }}
      rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigation.navigate(pages.home) }}
    />
  )
}

export function MenuHeader({navigation}){
  const { theme } = useTheme();
  return (
    <Header
      placement="left"
      leftComponent={
        <Button 
          title="Voltar" 
          type="clear"
          titleStyle={{
            color: theme.colors.grey5
          }}
          icon={
            <Icon 
              name="arrow-circle-left" 
              size={20}
              type="font-awesome"
              color={theme.colors.grey5}
              style={
                {
                  marginRight:10
                }
              }
            />
          }
          onPress={()=>navigation.goBack()}
        />
        }
    />
  )
}
