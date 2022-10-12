import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    border: solid 1px #c3c1cb;
    text-align: center;    
    padding: 0 1em 1em 1em;
    margin-bottom: 0.8em;

    @media (min-width: 425px) {
        padding-bottom: 0;
        width: 20rem;
        flex-direction: row;
        justify-content: space-between;
      }
    
    @media (min-width: 768px) {
        width: 32rem;
        flex-direction: row;
        justify-content: space-between;
    }
`

const YearBadge = styled.div`
    background-color: #34403A;
    color: #9AE6B4;
    padding: 0.4em;
    border-radius: 0.4em;
    
`

const SchoolYearBadge = styled.div`
    background-color: #421A33;
    color: #FF63C3;
    padding: 0.4em;
    border-radius: 0.4em;
    
`

const JobBadge = styled.div`
    background-color: #4FD1C5;
    color: #313134;
    font-weight: bold;
    padding: 0.4em;
    border-radius: 0.4em;
    margin-right: 0.5em;
`


export { Card, YearBadge, SchoolYearBadge, JobBadge }