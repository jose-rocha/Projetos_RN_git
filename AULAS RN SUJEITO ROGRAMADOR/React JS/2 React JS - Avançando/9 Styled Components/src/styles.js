import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;

`;

export const Head = styled.header`
    width: 100%;
    height: 70px;
    background-color: brown;
    align-items: center;
    display: flex;
    justify-content: center;

`;


export const Titulo = styled.a`
    font-size: 25px;
    color: #fff ;


`;


export const BemVindo = styled.h1`
    font-size:${props => `${props.tamanho}px`};
    color: ${props =>  `#${props.cor}`};
`;


