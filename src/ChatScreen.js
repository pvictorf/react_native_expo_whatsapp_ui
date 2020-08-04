import React, {useState, useEffect} from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { MaterialIcons } from '@expo/vector-icons';
import { AvatarPhoto, AvatarName, AvatarChat, AvatarChatNumber, AvatarTime } from './style'; 

import ChatsData from '../db/chats-db.json';


const ChatScreen = () => {
   const [chats, setChats] = useState([]);

   useEffect(() => {
      async function renderMessages() {
         const chats = await ChatsData.data;
         setChats(chats);
      }
      renderMessages();
   }, []);


  return (
   <>  
   <ScrollView>  
    <View style={{ marginBottom:100 }}>
      {chats.map( (chat) => 

      <View key={chat.id} style={{flexDirection:'row',  paddingHorizontal: 12, marginVertical: 6, alignItems:'center' }} >
         <AvatarPhoto source={{uri: chat.avatar}}/>
         <View style={{flex:1, flexDirection:'row', borderBottomWidth: 1, borderBottomColor: '#f1f1f1', paddingBottom: 4}}>
            <View style={{flex: 1 }}>
               <AvatarName>{chat.first_name}</AvatarName>
               <AvatarChat ellipsizeMode='tail' numberOfLines={1}>{chat.menssage}</AvatarChat>
            </View>
            <View style={{marginLeft: 30 }}>
               <AvatarTime>{chat.time}</AvatarTime>
               <AvatarChatNumber>{chat.id}</AvatarChatNumber>
            </View>
         </View>     
      </View> 

      )}
      </View>
   </ScrollView>
      <FloatingAction
         color={"#25D366"}
         floatingIcon={<MaterialIcons name="message" size={24} color="white" />}
         onPressItem={name => {
            console.log(`selected button: ${name}`);
         }}  />
   </>
  );
}

export default ChatScreen;