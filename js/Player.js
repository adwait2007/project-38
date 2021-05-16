class Player{
    constructor(){
        this.distance=0;
        this.rank=null;
        this.index=null;
        this.name=null;
    }

    getCount(){
        let palyerCountRef=database.ref('playerCount');
        palyerCountRef.on('value',(data)=>{
            playerCount=data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count,
        });
    }

    update(){
        let playerIndex='players/player'+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
        });
    }

    static getPlayerInfo(){
        let playerInfoRef=database.ref('players');
        playerInfoRef.on('value',(data)=>{
            allPlayers=data.val();
        });
    }

    getCarsAtEnd(){
        database.ref('carsAtEnd').on('value',(data)=>{
            this.rank=data.val();
        });
    }

    static updateCarsAtEnd(rank){
        database.ref('/').update({
            carsAtEnd:rank,
        });
    }

}