import styled from "styled-components";

type ContainerProps ={
    done:boolean;
}

export const Conatiner = styled.div(({ done }:ContainerProps)=>(`
    display: flex;
    align-items: center;
    background-color: #20212c;
    padding: 10px;
    margin-bottom: 10px;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label{
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`));