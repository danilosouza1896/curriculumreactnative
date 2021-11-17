import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { pages } from './pages/Pages';
import { MenuHeader, MyHeader } from './components/Header';
import { Menu } from './pages/Menu';
import { Habilities } from './pages/Habilities';
import { ProfessionalExperience } from './pages/ProfessionalExperience';
import { Formation } from './pages/Formation';
import { Languages } from './pages/Languages';
import { ComplementarFormation } from './pages/ComplementarFormation';
import { myTheme } from './core/theme';
import { Hobbies } from './pages/Hobbies';
import { Extracurricular } from './pages/Extracurricular';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={myTheme}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName={pages.home} 
            screenOptions={
              {
                header: (props) => <MyHeader navigation={props.navigation} pageTitle={props.options.title}/>
              }
            }>
            <Stack.Screen 
              name={pages.home} 
              component={Home}
              options={
                {
                  header: (props) => null,
                  title: 'Início'
                }
              }
            />
            <Stack.Screen
              name={pages.menu}
              component={Menu}
              options={{
                header: (props) => <MenuHeader navigation={props.navigation}/>
              }}
            />
            <Stack.Screen
              name={pages.habilities}
              component={Habilities}
              options={{
                title: 'Habilidades'
              }}
            />
            <Stack.Screen
              name={pages.professionalExperince}
              component={ProfessionalExperience}
              options={{
                title: 'Experiência Profissional'
              }}
            />
            <Stack.Screen
              name={pages.formation}
              component={Formation}
              options={{
                title: 'Formação Acadêmica'
              }}
            />
            <Stack.Screen
              name={pages.languages}
              component={Languages}
              options={{
                title: 'Idiomas'
              }}
            />
            <Stack.Screen
              name={pages.complementar}
              component={ComplementarFormation}
              options={{
                title: 'Formação Complementar'
              }}
            />
            <Stack.Screen
              name={pages.hobbies}
              component={Hobbies}
              options={{
                title: 'Hobbies'
              }}
            />
            <Stack.Screen
              name={pages.extracurricular}
              component={Extracurricular}
              options={{
                title: 'Atividades Extracurriculares'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}