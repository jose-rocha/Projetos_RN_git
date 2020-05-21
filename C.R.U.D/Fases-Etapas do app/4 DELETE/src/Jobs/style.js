import styled from 'styled-components';



export const Container = styled.View`
    padding: 20px;
    border-radius: 5px;
    background: #fff;
    margin-bottom: 15px;
`;

export const Nome = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

export const Cargo = styled.Text`
    font-size: 20px;
    font-style: italic;
    font-weight: bold;

`;

export const CenterView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;

export const EditItem = styled.TouchableOpacity`
    background-color: #ddd;
    padding: 5px;
    border-radius: 5px;

`;



export const EditText = styled.Text`
    color: #000;
    font-size: 15px;
`;