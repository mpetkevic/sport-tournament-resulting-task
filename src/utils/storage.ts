import {Team} from "../interfaces";

export function addTeamsToLS(teams: Team[]) {
    window.localStorage.setItem('teams', JSON.stringify(teams))
}

export function getTeamsFromLS() {
    const teamsFromLS: string | null = window.localStorage.getItem('teams')
    const teams: Team[] | null = teamsFromLS && JSON.parse(teamsFromLS)

    return teams;
}
