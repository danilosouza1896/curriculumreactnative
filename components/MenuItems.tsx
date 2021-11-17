import React from "react"
import { View } from "react-native"; 
import { ListItem, Icon, useTheme } from 'react-native-elements'
import { pages } from "../pages/Pages";
export function MenuItems({navigation}) {
  const { theme } = useTheme();
  const list = [
    {
      title: 'Habilidades',
      icon: 'list-alt',
      type: 'font-awesome-5',
      handlePress: () => navigation.navigate(pages.habilities)
    },
    {
      title: 'Experiência',
      icon: 'briefcase',
      type: 'font-awesome-5',
      handlePress: () => navigation.navigate(pages.professionalExperince)
    },
    {
      title: 'Formação',
      icon: 'graduation-cap',
      type: 'font-awesome-5',
      handlePress: () => navigation.navigate(pages.formation)
    },
    {
      title: 'Idiomas',
      icon: 'language',
      type: 'font-awesome-5',
      handlePress: () => navigation.navigate(pages.languages)
    },
    {
      title: 'Formação Complementar',
      icon: 'school',
      type: 'font-awesome-5',
      handlePress: () => navigation.navigate(pages.complementar)
    },
    {
      title: 'Hobbies',
      icon: 'drum',
      type: 'font-awesome-5',
      handlePress: () => navigation.navigate(pages.hobbies)
    },
    {
      title: 'Atividades Extracurriculares',
      icon: 'plus',
      type: 'font-awesome-5',
      handlePress: () => navigation.navigate(pages.extracurricular)
    }
  ]
  return (
    <View>
      {
        list.map((item, i) => 
          (
            <ListItem key={i} bottomDivider onPress={item.handlePress}>
              <ListItem.Content style={{flexDirection: 'row', justifyContent:'flex-start'}}>
                <View style={{width: 40, alignItems: 'flex-start'}}>
                  <Icon name={item.icon} color={theme.colors.primary} type={item.type} />
                </View>
                <ListItem.Title style={{color: theme.colors.primary, marginTop: 3}}>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          )
        )
      }
    </View>
  )
}