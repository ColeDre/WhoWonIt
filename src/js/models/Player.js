export default class PlayerData {
    
    
    async findPlayer(query){
        this.playerResults = []

        try{           
            
            //making sure the query is a string 
            if( typeof query === 'string') {
                //AWAIT IS USED TO TO WAIT FOR THE RESPONSE TO FINISH WITHOUT HALTIN THE LEXICAL CALLING OF THE CODE BOYS || HAS TO BE USED IN THE ASYNC FUNCTION...also it has to be used on a Promise mmmmm
                let res = await fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`);
                let results = await res.json();
                
                //iterator for checking if there are multiple pages for the name searched 
                let i = 1;

                while(results.meta.total_pages >= i){
                    res = await fetch(`https://www.balldontlie.io/api/v1/players?search=${query}&page=${i}`);
                    results = await res.json();
                    this.playerResults.push(results.data);
                    i++;
                }

                console.log(results);
                console.log(this.playerResults)
                return results;
            } 
            
            

        } catch (err){
            console.log(err);
        }
    }

    async getPlayers(){
        
        
        try {
            //AWAIT IS USED TO TO WAIT FOR THE RESPONSE TO FINISH WITHOUT HALTIN THE LEXICAL CALLING OF THE CODE BOYS || HAS TO BE USED IN THE ASYNC FUNCTION 
            // let res = await fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`);
            // let results = await res.json();
            this.findPlayer('davis')
            
            
            

            // for (let i = 2; i < 50; i++){
            //     this.Players.push(results.data);

            //     res = await fetch(`https://www.balldontlie.io/api/v1/players?page=${i}`);

            //     results = await res.json();
            // }
            
            // while(results.length > 0)

            //

            // for(let i = 0; i < results.meta.total_pages; i++){
            //     let j = await fetch(`https://www.balldontlie.io/api/v1/players?page=${i}`);
                
            // }
            //WE ALSO USE AWAIT HERE BECAUSE WE HAVE TO WAIT FOR THE VALUES OF THE RESOLVED PROMISE *res = await fetch(url)* TO BE RETURNED 
            //WITHOUT THE AWAIT THE CODE IS JUST RAN BOYS with out the RESOLVE OR REJECT VALUES

            // LOOPING THROUGH THE ARRAY OF PLAYERS RETURNED FROM THE FETCH USING FOR OF 
            // for (const el of results.data) {
            //     this.Players.push(el);
            // }
            
            return this.Players;

        } catch(err)    {
            console.log(err);
        }; 
    }

}