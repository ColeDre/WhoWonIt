import PlayerData from './models/Player.js'
import {elements} from './views/base'
import * as searchView from './views/searchView'
import * as playerView from './views/playerView'


const state = {};

const controlPlayerSearch = async () => {
    
    //GET INPUT OF SEARCH BAR
    //Using Destructuing assignment in this case query0 = the first elements getInput() returns and query1 gets the second element
    const [query0, query1] = searchView.getInput();

    //INPUT CHECK ---CHECKING IF QUERY IS A NUMBER
    if(isNaN(query0) && isNaN(query1)){

        console.log('QUERY1: ', query0);
        console.log('QUERY2:', query1);

        //THIS IS A GOOD TIME TO ADD TO STATE BECAUSE WE ARE CHANGING THE DATA OF THIS APP WITH THIS QUERY
        //We are giving both player queries their own methods to find players and populate data in relation to their own instance 
        state.player0SearchQuery = new PlayerData();
        state.player1SearchQuery = new PlayerData();

        //checking the state of player0SearchQuery
        console.log('STATE', state.player0SearchQuery);
        
        //WE'LL HAVE TO CLEAR THE SEARCH INPUT HERE AND CLEAR THE PREVIOUS SEARCH RESULTS

        try{
            
            //Okay so these are going to return their own instance of playerResults, because they are both their own instance so in this case to access their playerResults we would use state.player0SearchQuery.playerResults
            await state.player0SearchQuery.findPlayer(query0);
            await state.player1SearchQuery.findPlayer(query1);
            
            //input check to see if too many player results came back in both state.playerResults query
            //LATER WE’LL ADD CODE TO CIRCUMVENT THIS 
            if(state.player0SearchQuery.playerResults.length > 1 || state.player1SearchQuery.playerResults.length > 1){
                console.log('Need Specific Name ');
            }
            
            else{
                /*
                playerResults is an array of objects including the players eg: if we queried 'James' in PlayerData.findplayer('james') we would get an array of james eg: [{first_name: james}, {last_name:james}]
                What we want to do is get to the point where if we have multiple names we give them a choice to select...for now we give them an Error saying too many 
                */

                //We use playerResults[0][0] cause like stated above we get back an array and because we checked ig
                console.log('Player 1 Results: ', state.player0SearchQuery.playerResults[0][0]);
                console.log('Player 2 Results: ', state.player1SearchQuery.playerResults[0][0]);
                
                state.player0SearchQuery.populatePlayer(state.player0SearchQuery.playerResults[0][0]);
                console.log(state.player0SearchQuery);
                
                //This function is going to render the players pictures on the page 
                playerView.renderPlayer(state.player0SearchQuery.playerResults[0][0], state.player1SearchQuery.playerResults[0][0]); 
            }

            
            

        } catch (err){

        }
        // console.log(state);

    } else {
        
        alert('yeer');

    };

}


elements.player0SearchQuery.addEventListener('click', e=> {
    elements.player0SearchQuery.classList.toggle('player-active')
    // controlPlayerSearch();
    //HAVE TO TOGGLE ACTIVE CLASS ON CLICK 

})

elements.player1SearchQuery.addEventListener('click', e=> {
    elements.player1SearchQuery.classList.toggle('player-active')
    // controlPlayerSearch();
    //HAVE TO TOGGLE ACTIVE CLASS ON CLICK 

})

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlPlayerSearch();
    console.log(e);
});

//**************PLAYER SEARCHES *********************/

// const controlPlayerSearch = () => {
//     const query = 
// }