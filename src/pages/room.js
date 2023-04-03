import { Link } from "react-router-dom";

function Rooms({ rooms }) { 
    return (
        <div>
            {rooms.map((room) => { 
                return (
                    <div key={room}>
                        <Link to={`/rooms/${room}`}>{room}</Link>
                    </div>
                )
            })
            }
        </div>

    )
}

export default Rooms;