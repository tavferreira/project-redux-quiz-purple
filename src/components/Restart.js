import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'
import { RestartIcon } from 'icons/RestartIcon'

export const Restart = () => {
    const dispatch = useDispatch()

    return (
        <RestartButton type="button" onClick={() => (dispatch(quiz.actions.restart()))}>
            <RestartIcon />
        </RestartButton>
    )
}

const RestartButton = styled.button`
    background-color: transparent;
    border: none;
    background-repeat: no-repeat;
    overflow: hidden;
    transition: transform 1s;

    &:hover {
        transform: rotate(90deg);
    }
`