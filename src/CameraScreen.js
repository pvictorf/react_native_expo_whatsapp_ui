import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Camera } from 'expo-camera';

export default function App() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

   if (hasPermission === null) {
      return <View />;
   }
   if (hasPermission === false) {
      return <Text>No access to camera</Text>;
   }

   const flipCamera = async () => {
      setType(type === Camera.Constants.Type.back
         ? Camera.Constants.Type.front
         : Camera.Constants.Type.back
      );
   };

   const takePhoto = async () => {
      if(camRef) {
         const data = await camRef.current.takePictureAsync();
         Alert.alert(JSON.stringify(data));
      }
   };

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={camRef}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            backgroundColor: 'transparent',
            flexDirection: 'row',
            padding: 20 }}>

         <TouchableOpacity onPress={() => {}}>
            <Text style={{ alignSelf: 'flex-end', }}> 
               <Ionicons name="ios-flash" size={30} color="white" />
            </Text>
         </TouchableOpacity>    

         <TouchableOpacity onPress={() => {  takePhoto() }}>
            <Text style={{ borderColor: "#FFF", borderWidth: 3, width: 70, height: 70, borderRadius: 70/2 }}> 
            </Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => { flipCamera()  }}>
            <Text style={{ alignSelf: 'flex-end', }}> 
               <Ionicons name="ios-reverse-camera" size={30} color="white" /> 
            </Text>
         </TouchableOpacity>

        </View>
        <Text style={{textAlign: 'center', color: '#fff', paddingVertical: 8}}>Tap to take a picute</Text>
      </Camera>
    </View>
  );
}