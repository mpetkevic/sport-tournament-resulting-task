import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import {store} from "../store";
import {Team} from "../../interfaces";
import {addTeamsToLS} from "../../utils/storage";

export const addTeam = (name: string) => {
    const { teams } = store.getState().teams;

    const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1)

    const newTeam = {
        name: capitalizeName,
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

export const setTeamsFromLS = (teams: Team[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_TEAMS_FROM_LS,
            payload: teams,
        });
    }
}