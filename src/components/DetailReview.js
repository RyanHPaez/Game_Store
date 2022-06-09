import React, { useContext, useState } from "react";
import { GameDataContext } from "../context/gameDataContext";
import { CartContext } from "../context/cartContext";
import '../DetailedReview.css'
import { isTrivialHref } from "@restart/ui/esm/Anchor";


function DetailedReview (props) {

    const gameData = useContext(GameDataContext);
    

    return(props.triggerTwo) ?(

        <div className="popupTwo">
            <div key="" className="popup-innerTwo">
                <img src={props.gameImage}/>
                {props.children}
                
            </div>

        </div>
    ) : "";


}

export default DetailedReview;