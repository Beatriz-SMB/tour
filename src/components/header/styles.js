import styled from 'styled-components';
import SVG from "react-inlinesvg";

export const ContainerHeader = styled.nav`
    align-items: center;
    background: #FFFFFF;
    box-sizing: border-box;
    display: flex;
    height: 8vh;
    justify-content: space-evenly;
    width: 100%;

    ul{
        box-sizing: border-box;
        display: flex;
        flex: 1.5;
        list-style: none;
        li{
            border: 2px solid transparent;
            cursor: pointer;
            font-size: 18px;
            margin: 0 10px;
            padding: 5px;

            &:hover{
                border-bottom: 2px solid #284b63;
            }
        }
    }
`;

export const SvgIcon = styled(SVG)`
    flex: 1;
    height: 60px;
    width: 60px;

`;