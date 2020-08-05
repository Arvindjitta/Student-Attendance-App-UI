import 'react-native-gesture-handler';
import React from 'react';
import { Image, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import Details from './screens/details';
import Upload from './screens/upload';
import { Provider as PaperProvider } from 'react-native-paper';

//function for Header title image//
function LogoTitle() {
  return (
    <Image
      style={{ width: 120, height: 40 }}
      source={require('./assets/title2.png')}
    />
  );
}


//function for navigating upload back button//
function BackImage() {
  return (
    <Image
      style={{ width: 61, height: 19, marginLeft:22, marginTop: 10, }}
      source={require('./assets/back3.png')}
    />
  );
}

//function for Upload title 
function UploadTitle() {
  return (
    <Image
      style={{ width: 81, height: 30}}
      source={require('./assets/upload2.png')}
    />
  );
}

function DetailsTitle() {
  return (
    <Image
      style={{ width: 85, height: 21}}
      source={require('./assets/Details.png')}
    />
  );
}

//passing createStacknavigator function to a variablr
const Stack = createStackNavigator();

//default Application
export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerTitle: props => <LogoTitle {...props} />,
            headerTitleAlign: 'center' ,
            // headerRight: true,
           
            headerStyle: {
              height: 90,  
              
              elevation:0,
              backgroundColor:'#ffff',            
              },
            }}
          />
{/* screen for upload layout */}
        <Stack.Screen 
        name="Upload" 
        component={Upload}
        options={{
          headerBackImage:props => {
            return <BackImage {...props} />;
          },  
          headerStyle: {
            height: 90,  
            elevation:0,
            backgroundColor:'#ffff',            
            },
          headerTitle: props => <UploadTitle {...props} />,        
          headerTitleAlign: 'center' ,
        }} />

<Stack.Screen 
        name="Details" 
        component={Details}
        options={{
          headerBackImage:props => {
            return <BackImage {...props} />;
          },  
          headerStyle: {
            height: 90,  
            elevation:0,
            backgroundColor:'#ffff',            
            },
          headerTitle: props => <DetailsTitle {...props} />,        
          headerTitleAlign: 'center' ,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

// import React, { Component } from 'react'
// import TabScreen from './screens/TabScreen';

// export default class App extends Component {
//   render() {
//     return (
//       <TabScreen/>
//     )
//   }
// }


