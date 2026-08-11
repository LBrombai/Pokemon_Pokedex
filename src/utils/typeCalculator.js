import typeChart from "../data/typeChart.js";

const ALL_TYPES = Object.keys(typeChart);

function getMultiplier(attackType, defenderTypes) {
    let multiplier = 1;

    for (const defenderType of defenderTypes) {
        const value = typeChart[attackType][defenderType] ?? 1;
        multiplier *= value;
    }

    return multiplier;
}

function getEffectiveness(defenderTypes) {
    const effectiveness = {
        effective: [],
        normal: [],
        ineffective: [],
        veryIneffective: [],
        noEffect: [],
    };

    for (const attackType of ALL_TYPES) {
    const multiplier = getMultiplier(
        attackType,
        defenderTypes
    );

switch (multiplier) {
    case 4:
    case 2:
        effectiveness.effective.push(attackType);
        break;

    case 1:
        effectiveness.normal.push(attackType);
        break;

    case 0.5:
        effectiveness.ineffective.push(attackType);
        break;

    case 0.25:
        effectiveness.veryIneffective.push(attackType);
        break;

    case 0:
        effectiveness.noEffect.push(attackType);
        break;
}


}

return effectiveness;
}



export { getMultiplier, getEffectiveness };
