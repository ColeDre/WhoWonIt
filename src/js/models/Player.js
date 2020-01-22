export default class Player {
    
    async getPlayers(){
        this.Players = []
        try {
            //AWAIT IS USED TO TO WAIT FOR THE RESPONSE TO FINISH WITHOUT HALTIN THE LEXICAL CALLING OF THE CODE BOYS
            let res = await fetch(`https://www.balldontlie.io/api/v1/players`);
            const results = await res.json();

            // for(let i = 0; i < results.meta.total_pages; i++){
            //     let j = await fetch(`https://www.balldontlie.io/api/v1/players?page=${i}`);
                
            // }
            //WE ALSO USE AWAIT HERE BECAUSE WE HAVE TO WAIT FOR THE VALUES OF THE RESOLVED PROMISE *res = await fetch(url)* TO BE RETURNED 
            //WITHOUT THE AWAIT THE CODE IS JUST RAN BOYS with out the RESOLVE OR REJECT VALUES

            //LOOPING THROUGH THE ARRAY OF PLAYERS RETURNED FROM THE FETCH USING FOR OF 
            for (const el of results.data) {
                this.Players.push(el);
            }
            
        } catch(err)    {
            console.log(err);
        }; 
    }

    findPlayer(name){
        this.getPlayers()
        
    }


}