import {ActionType} from "../action-types";
import {Team} from "../../interfaces";

interface AddTeam {
    type: ActionType.ADD_TEAM;
    payload: Team[];
}

export type Action =
    | AddTeam