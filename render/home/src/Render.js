import React from "react";
import { useItem } from "./index";

const Render = () =>{
	const [item, setItem] = useItem();
	pr(item)
	function update_cards(){
		setItem((prev) => ({...prev, cards_of_player: prev.cards_of_player + ["green_5"]}))
	}
   return (
		<>
   	<h1>
         Welcome to the UNO Lobby.
      </h1>
		Cards: {item.cards_of_player}
		<button onClick={update_cards}>Update Cards</button>
		</>
    )
}

export default Render
