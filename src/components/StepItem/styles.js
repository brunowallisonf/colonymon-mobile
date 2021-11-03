import styled from "styled-components";

export const StepItem = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 100px;
    background: ${props => props.selected ? "#FFFFFF" : "#FF6000"};
    align-items: center;
    justify-content: center;
    
`

export const Text = styled.Text`
    color:  ${props => props.selected ? "#FF6000" : "#FFFFFF"};
    font-size: 30px;
    font-weight: bold;
    
`