import { useState } from "react";
import { getExpectedDrops } from "../utils/dropCalculator";

function DropSimulator({ drops }) {
    const [kills, setKills] = useState("");

    return (
        <div className="drop-simulator">
            <h3>Drop Simulator</h3>

            <label className="kills-input">
                Kills

                <input
                    type="number"
                    min="1"
                    placeholder="Digite aqui"
                    value={kills}
                    onChange={(e) => setKills(e.target.value)}
                />
            </label>

            {kills && Number(kills) > 0 && (
                <div className="drop-simulator-results">
                    {drops.map((drop) => {
                        const expected = getExpectedDrops(
                            drop,
                            Number(kills)
                        );

                        return (
                            <div
                                key={drop.name}
                                className="drop-simulator-result"
                            >
                                <strong>{drop.name}</strong>

                                <span>
                                    {Math.floor(expected)}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default DropSimulator;