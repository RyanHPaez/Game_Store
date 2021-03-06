import React, { useContext, useState } from "react";
import { GameDataContext } from "../context/gameDataContext";
import { CartContext } from "../context/cartContext";
import '../GameDetails.css'
import { isTrivialHref } from "@restart/ui/esm/Anchor";


function GameDetails (props) {

    const gameData = useContext(GameDataContext);
    

    return(props.trigger) ?(

        <div className="popup">
            <div key="" className="popup-inner">
                <img src={props.gameImage}/>
                {props.children}
                
            </div>

        </div>
    ) : "";


}

export default GameDetails;