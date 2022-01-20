import { combineReducers } from 'redux';
import teamsReducer from "./teamsReducer";

const reducers = combineReducers({
    teams: teamsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;