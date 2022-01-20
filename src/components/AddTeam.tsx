import React, {useState} from "react";
import {useActions} from "../hooks/useActions";

const AddTeam = () => {
    const [teamValue, setTeamValue] = useState<string>('')
    const [isError, setError] = useState(false)

    const { addTeam} = useActions()

    const onAddTeamClick = () => {
      if(!teamValue) {
          return setError(true)
      }

        console.log("Team: ", teamValue)
        addTeam(teamValue)
        setTeamValue('')
    }

    return (
        <div className="add-team-wrapper">
            <input
                type="text"
                onChange={(e) => setTeamValue(e.target.value)}
                value={teamValue}
                placeholder="Add new team"/>
            <button onClick={onAddTeamClick}>Add</button>
            {isError && <p>Input can't be empty</p>}
        </div>
    )
}

export default AddTeam;