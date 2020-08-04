import styled from 'styled-components/native';

const themeLight = {
   backgroundColor: "#075e54",
   statusBar: "#054d44",
   primary: "#055d54",
   accent: "#25D366",
   block: "#ECE5DD",
   color: "#FFF",
   text: "#777",
};

const themeDark = {
   backgroundColor: "#075E54",
   primary: "#128C7E",
   accenty: "#25D366",
   block: "#ECE5DD"
};

const theme = { ...themeLight };

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.backgroundColor};
`
export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  color: ${theme.color};
`

export const TopIcons = styled.View`
  flex-direction: row;
`

export const TabsText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: ${theme.color};
`

export const AvatarPhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 12px;
`

export const AvatarName = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const AvatarChat = styled.Text`
  color: ${theme.text};
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 8px;
`

export const AvatarTime = styled.Text`
  color: ${theme.accent};
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 8px;
`
export const AvatarChatNumber = styled.Text`
  align-self: center;
  text-align: center;
  background-color: ${theme.accent};
  color: ${theme.color};
  font-size: 12px;
  width: 20px;
  height: 20px;
  line-height: 18px;
  border-radius: 10px;
`