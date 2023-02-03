class Spells{
    constructor(manaCost, damage){
        this._manaCost = manaCost;
        this._damage = damage;
    }
    getManaCost(){
        return this._manaCost;
    }
    getDamage(){
        return this._damage;
    }
}
module.exports = Spells;