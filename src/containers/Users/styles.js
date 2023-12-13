import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0A0A10;
    background-size: cover;// para cobrir toda a area
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;


export const Image = styled.img`
    margin-top: 30px;
`;


export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    background: rgba(255,255,255,0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    color:#ffffff;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;

    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }


`
