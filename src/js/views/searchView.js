import {elements} from './base'

export const getInput = () => {
    
    //This checks if the element player0SearchQuery has the 'player-active' class;
    // console.log(elements.player0SearchQuery.classList.contains('player-active'));
    
    return [elements.player0SearchQuery.value, elements.player1SearchQuery.value];
}