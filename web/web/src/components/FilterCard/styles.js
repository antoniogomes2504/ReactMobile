import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#FF6F0F' : '#20295F'};
    padding: 10px;
    cursor: pointer;

    border-radius: 5px;
    
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover{
        background: #FF6F0F;
    }
    
`