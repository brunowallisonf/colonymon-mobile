import styled from "styled-components";

export const RadioButton = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    border-radius: 100px;
    border-width: 2px;
    border-color: #000000;
    background: #FFFFFF;
    align-items: center;
    justify-content: center;
  
`

export const RadioCheckMarker = styled.View`
    height: 25px;
    width:25px;
    border-radius: 100px;
    background: #000000
    align-items: center;
    justify-content: center;
`
export const View = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`
export const RadioLabel = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 5px;
`