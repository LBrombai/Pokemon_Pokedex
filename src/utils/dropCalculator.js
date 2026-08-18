function getAverageQuantity(drop) {
    return (drop.quantity.min + drop.quantity.max) / 2;
}

function getAveragePerKill(drop) {
    const averageQuantity = getAverageQuantity(drop);

    return (drop.chance / 100) * averageQuantity;
}

function getExpectedDrops(drop, kills) {
    return getAveragePerKill(drop) * kills;
}

function getRequiredKills(drop, desiredQuantity) {
    const averagePerKill = getAveragePerKill(drop);

    if (averagePerKill <= 0) {
        return Infinity;
    }

    return Math.ceil(desiredQuantity / averagePerKill);
}

export {
    getAverageQuantity,
    getAveragePerKill,
    getExpectedDrops,
    getRequiredKills,
};