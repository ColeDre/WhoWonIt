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

                // console.log(results);
                // console.log(this.playerResults)
                return this.playerResults;
            } 
            
            

        } catch (err){
            console.log(err);
        }
    }

    //this method adds players names and stats to their queries instance 
    async populatePlayer(playerData){
        this.id = playerData.id;
        this.first_name = playerData.first_name;
        this.last_name = playerData.last_name;
        
        try{


        } catch(err) {
            console.log(err);
        }
    }

}