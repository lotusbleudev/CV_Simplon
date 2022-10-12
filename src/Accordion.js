import React from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
    overflow: hidden;
    width: 35rem;
    border-radius: 0.6rem;
    background-color: #313134;
    color: #f9f9f9;
    max-width: 90vw;
    @media (max-width: 570px) {
        background-color: white;
      }
`;

const Inner = styled.div`
    position: absolute;
    padding: 0 1rem;
    color: #c3c1cb;
`;

const Header = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    font-size: 1rem;
    text-align: left;
    background: #313134;
    color: inherit;
    cursor: pointer;
    font-weight: bold;
`;

const HeaderIcon = styled.span`
    transform: rotate(${props => props.isActive ? -180 : 0}deg);
    transition: all 0.2s;
`;

const Content = styled.div`
    position: relative;
    overflow: hidden;
    height: ${props => {
        const inner = document.getElementById(props.itemName);
        return `${props.isActive && inner ? inner.clientHeight : 0}px`;
    }};
    transition: height 0.35s;
    display: flex;
    justify-content: center;
`;

const AccordionContent = ({onClick, itemName, itemContent, isActive}) => {
    return(
        <React.Fragment>
            <Header onClick={onClick}>
                {itemName}
                <HeaderIcon isActive={isActive} className="material-icons">
                    expand_more
                </HeaderIcon>
            </Header>
            <Content itemName={itemName} isActive={isActive}>
                <Inner id={itemName}>
                    {itemContent}
                </Inner>
            </Content>
        </React.Fragment>
    )
}

export { AccordionContainer, AccordionContent }