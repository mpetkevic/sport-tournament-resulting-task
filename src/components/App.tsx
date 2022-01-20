import React, {useEffect} from "react";
import AddTeam from "./AddTeam";
import TeamsTable from "./TeamsTable";
import {useActions} from "../hooks/useActions";
import {getTeamsFromLS} from "../utils/storage";

const App = () => {

    const {setTeamsFromLS} = useActions()

    useEffect(() => {
        const teams = getTeamsFromLS()
        if(teams) {
            setTeamsFromLS(teams)
        }
    }, [])

    return (
        <div className="content-wrapper">
            <h1>Sport Tournament Resulting Tool</h1>
            <AddTeam />
            <TeamsTable />
        </div>
    )
}

export default App;