import {ActionType} from "../action-types";
import {Team} from "../../interfaces";

interface AddTeam {
    type: ActionType.ADD_TEAM;
    payload: Team[];
}

interface SetTeamFromLS {
    type: ActionType.SET_TEAMS_FROM_LS,
    payload: Team[]
}

export type Action =
    | AddTeam
    | SetTeamFromLS