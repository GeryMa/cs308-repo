const Spells = require('./Spells.js');
class Player{
    constructor(name, classType){
        this._name = name;
        this._classType = classType;
        if(this._classType == 1){
            this._plyerClass = new playerClass(1/* warrior */);
        }else if(this._classType == 2){
            this._plyerClass = new playerClass(2/* wizard */);
            this._plyerClass.generateSpells();
        }
    }
    castSpell(spellSlot){
        
    }
}
module.exports = Player;