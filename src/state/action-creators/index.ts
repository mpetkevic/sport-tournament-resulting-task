import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import {store} from "../store";
import {Team} from "../../interfaces";
import {addTeamsToLS} from "../../utils/storage";

export const addTeam = (name: string) => {
    const { teams } = store.getState().teams;

    const newTeam = {
        name,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    }
    teams.push(newTeam)

    addTeamsToLS(teams)

    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_TEAM,
            payload: teams,
        });
    }

}