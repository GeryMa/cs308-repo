class playerClass{
    constructor(type){
        if(type == 1){
            this._health = 150;
            this._AC = 17;
            this._intim = 16;
            this._wis = 14;
            this._hitBonus = 4;
        }else if(type == 2){
            this._health = 75;
            this._AC = 15;
            this._intim = 13;
            this._wis = 18;
            this._mana = 50;
            this._hitBonus = 4;
        }
    }
    setHealth(newHealth){
        if(newHealth > 150){
            this._health = 150;
        }else if(newHealth < 150 && newHealth > 0){
            this._health = newHealth;
        }else{
            this._health = 0;
        }
    }
    canCast(manaCost){
        if(this._mana - manaCost > 0){
            return true;
        }
    }
    castSpell(manaReduction){
        this._mana = this._mana - manaReduction();
    }
    generateSpells(){
        for(var i = 0; i < 5; i++){
            this._SpellList = [];
            this._SpellList.push(new Spells((i + 1), (i + 3)));
        }
    }
}
module.exports = playerClass;