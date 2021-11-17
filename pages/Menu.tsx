import React from "react"
import { View } from "react-native"; 
import { MenuItems } from "../components/MenuItems";
export function Menu({navigation}) {
  return (
    <View>
      <MenuItems navigation={navigation}/>
    </View>
  );
}