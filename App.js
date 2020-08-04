import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, StatusBar } from 'react-native';
import {MaterialIcons, Entypo} from '@expo/vector-icons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { Header, Title, TopIcons, TabsText } from './src/style';

import ChatScreen from './src/ChatScreen';
import CameraScreen from './src/CameraScreen';
/* expo build:android -t apk */ 

const SecondRoute = () => (
   <View style={{ backgroundColor: '#f5f5f5', flex:1 }} />
);

const ThirdRoute = () => (
   <View style={{ backgroundColor: '#f8f8f8', flex:1 }} />
);


const App = () => {

  const [index, setIndex] = useState(1);

  const [routes, setRoutes] = useState([
    { key: 'camera', title: 'CAMERA' },
    { key: 'chat', title: 'CHATS' },
    { key: 'status', title: 'STATUS' },
    { key: 'call', title: 'CALLS' },
  ]); 

  return (
    <>
      <Header>
        <Title>WhatsApp</Title>
        <TopIcons>
          <MaterialIcons name="search" size={26} color="white" style={{marginHorizontal: 8}} />
          <Entypo name="dots-three-vertical" size={20} color="white" style={{marginHorizontal: 12}} />
        </TopIcons>
      </Header>
        <StatusBar backgroundColor={'#054d44'}/>
        <TabView
          navigationState={{ index, routes }}
          renderScene={SceneMap({
            camera: CameraScreen,
            chat: ChatScreen,
            status: SecondRoute,
            call: ThirdRoute,
          })}
          renderTabBar={ props => 
            <TabBar 
              {...props}
              style={{ backgroundColor: '#075e54', elevation: 0.2 }}
              indicatorStyle={{ backgroundColor: '#dee5e4' }}
              tabStyle={TabsText}
              renderLabel={({ route, focused, color }) => (
                
                (route.key === "camera") 
                ? 
                <Text style={{ color, fontWeight: "bold" }}>
                  <MaterialIcons name="camera-alt" size={24}  />
                </Text> 
                :
                <Text style={{ color, fontWeight: "bold" }}>
                  {route.title}
                </Text>   
              )}
            />
          }
          onIndexChange={index => { setIndex(index) }}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
    </>
  );
};


export default App;