class Enemy{
    constructor(name){
        //warrior class
        this._name = name;
        this._health = 150;
        this._AC = 19;
        this._wis = 13;
        this._intim = 15;
        this._hitBonus = 4;
        this._gold = 0;
}
takeDamage(damage, rta){
    if(rta > this._AC){
        this._health =- damage;
    }
}
attack(enemy, rta, damage){
    enemy.takeDamage(damage, rta);
}


//getters
getHealth(){
    return this._health;
}
getAC(){
    return this._AC;
}
getWis(){
    return this._wis;
}
getIntim(){
    return this._intim;
}
getHitBonus(){
    return this._hitBonus;
}
//setters
setHealth(x){
    this._health = x;
}
setAC(x){
    this._AC = x;
}
setWis(x){
    this._wis = x;
}
setIntim(x){
    this._intim = x;
}
setHitBonus(x){
    this._hitBonus = x;
}

}