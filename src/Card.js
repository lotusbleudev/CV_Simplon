import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 32rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.4rem;
    border: solid 1px #c3c1cb;
    margin-bottom: 0.8em;
    padding-left: 1em;
    text-align: center;
    
      @media (max-width: 570px) {
        width: 15rem;
        flex-direction: column;
        padding-bottom: 1em;
        justify-content: center;
      }
`

const YearBadge = styled.div`
    background-color: #34403A;
    color: #9AE6B4;
    padding: 0.4em;
    border-radius: 0.4em;
    margin-right: 1em;
`

const SchoolYearBadge = styled.div`
    background-color: #421A33;
    color: #FF63C3;
    padding: 0.4em;
    border-radius: 0.4em;
    margin-right: 1em;
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