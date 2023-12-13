import styled from 'styled-components';

export const Container = styled.div`
    background-size: cover;// para cobrir toda a area
    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    color: #eeeeee;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    font-style: normal;
    margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255,255,255,0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    
    color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 34px;


`;



export const Image = styled.img`
    margin-top: 30px;
`;




