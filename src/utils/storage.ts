import {Team} from "../interfaces";

export function addTeamsToLS(teams: Team[]) {
    localStorage.setItem('teams', JSON.stringify(teams))
}