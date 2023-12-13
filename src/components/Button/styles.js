import styled from 'styled-components';


export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 76px;
    background: ${ props => props.isBack ? '#808080' : '#D93856' } ;
    color: #ffffff;
    border: ${ props => props.isBack ? ' 1px solid #808080': 'none'} ;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.5;
        }

        img{
            transform: ${ props => props.isBack ? 'rotateY(180deg)' : '' } ;
        }


`;