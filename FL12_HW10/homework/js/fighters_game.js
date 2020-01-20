function Fighter(obj) {
    let name = obj.name;        
    let damage = obj.damage;
    let hp = obj.hp;
    let strength = obj.strength;
    let agility = obj.agility;
    let wins = 0;
    let looses = 0;
    const HUNDRED = 100;
    return {
        getName: () => name,
        getDamage: () => damage,
        getStrength: () => strength,
        getAgility: () => agility,
        getHealth: () => hp,
        attack: (attackersName, attackersDamage) => {
            const SUCCESS_PROBABILITY = strength + agility;
            const ATTACK_IS_LOST = Math.round(Math.random() * (HUNDRED + 1)) > SUCCESS_PROBABILITY;
            if (ATTACK_IS_LOST) {
                hp -= attackersDamage;
                console.log(`${attackersName} makes ${attackersDamage} damage to ${name}`);
            } else {
                console.log(`${attackersName} attack missed`);
            }
        },
        logCombatHistory: () => console.log(`Name: ${name}, Wins: ${wins}, Losses: ${looses}`),
        heal: healthPoints => {
            hp += healthPoints;
            if (hp >= HUNDRED) {
                hp = HUNDRED;
            }
        },
        dealDamage: healthPoints => {
            hp -= healthPoints;
            if (hp <= 0) {
                hp = 0;
            }
        },
        addWin: () => wins++,
        addLoss: () => looses++
    };
}

function battle(fighter1, fighter2) {
    
    function isDead(...fighters) {
        for (let fighter of fighters) {
            if (fighter.getHealth() === 0) {
                console.log(`${fighter.getName()} is dead and can't fight`);
                return;
            }
        }
    }
    isDead(fighter1, fighter2);
    
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        fighter1.attack(fighter2.getName(), fighter2.getDamage());
        if (fighter1.getHealth() === 0) {
            break;
        }
        fighter2.attack(fighter1.getName(), fighter1.getDamage());
    }
    
    let winner;
    let looser;
    if (fighter1.getHealth > 0) {
        winner = fighter1;
        looser = fighter2;
    } else {
        winner = fighter2;
        looser = fighter1;
    }
    
    function battleResult() {
        winner.addWin();
        looser.addLoss();
        console.log(`${winner.getName()} has won!`);
    }
    battleResult();
}
