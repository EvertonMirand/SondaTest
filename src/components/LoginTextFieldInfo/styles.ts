import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

const fontSize = 'font-size: 20px';

export const Text = styled.Text`
  ${fontSize}
`;

export const LastWord = styled.Text`
  ${fontSize}
  font-weight: bold;
`;
