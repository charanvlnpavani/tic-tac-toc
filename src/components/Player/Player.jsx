import { useState } from "react";
import './Player.css';
export default function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing ] = useState(false);
    function handleEditClick(){
        setIsEditing((editing) => !editing);
        if(isEditing){

            onChangeName(symbol, playerName);
        }
    }
    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className='playerName'>{playerName}</span>;

    if(isEditing){
        editablePlayerName = <input type="text" className='textInput' value={playerName}  required onChange={handleChange}/>;
    }

    return(
        <>
            <li className={isActive ? 'active' : undefined}>
                <span className="player" id="player1">
                    {editablePlayerName}
                    <span className='playerSymbol'>{symbol}</span>
                </span>
                <button onClick={handleEditClick}>  {isEditing? 'Save' : 'Edit' } </button>
            </li>
        </>
    );
}