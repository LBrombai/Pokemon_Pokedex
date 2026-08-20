import typeIcons from "../utils/typeIcons";

function TypeBadge({ type }) {
    return (
        <div className={`type-badge type-${type}`}>
            <img
                src={typeIcons[type]}
                alt={type}
                className="type-icon"
            />

            <span>{type}</span>
            
        </div>
        
    );


}

export default TypeBadge;