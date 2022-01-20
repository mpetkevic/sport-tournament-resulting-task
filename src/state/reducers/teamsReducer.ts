import {ActionType} from "../action-types";
import {Action} from "../actions";
import {Team} from "../../interfaces";

interface InitialState {
    teams: Team[]
}

const initialState = {
    teams: []
}

const reducer = (
    state: InitialState  = initialState,
    action: Action
): InitialState => {
    switch (action.type) {
        case ActionType.ADD_TEAM:
            return { ...state, teams: action.payload};
        case ActionType.SET_TEAMS_FROM_LS:
            return { ...state, teams: action.payload};
        default:
            return state;
    }
};

export default reducer;