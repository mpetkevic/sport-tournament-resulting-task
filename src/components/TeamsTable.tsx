import React from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Team} from "../interfaces";

const TeamsTable = () => {

    const {teams} = useTypedSelector(
        (state) => state.teams
    );

    const teamsList = teams.map((team: Team, index: number) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{team.name}</td>
                <td>{team.played}</td>
                <td>{team.wins}</td>
                <td>{team.draws}</td>
                <td>{team.losses}</td>
                <td>{team.points}</td>
            </tr>
        )
    })

    return (
        <div className="teams-table-wrapper">
            <table>
                <thead>
                    <tr>
                        <td>Place</td>
                        <td>Team</td>
                        <td>Played</td>
                        <td>Win</td>
                        <td>Draw</td>
                        <td>Lost</td>
                        <td>Point</td>
                    </tr>
                </thead>
                <tbody>
                    {teamsList}
                </tbody>
            </table>
            {!teams.length && <p>No data.</p>}

        </div>
    )
}

export default TeamsTable;