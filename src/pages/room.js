import { Link } from "react-router-dom";
import { useState } from "react"; 
// 최근 업데이트 내용 띄우기 
function Rooms({ rooms }) { 
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup)
    };

    return (
        <div>
            <div className="App">
                <div>create room
                <button className="open" onClick={togglePopup} value={false}>click</button>
                </div>
                {showPopup ? (
                    <div className="popup">
                        <div className="popup_inner">
                            <div>Success!</div>
                            <button className="close" onClick={togglePopup}>
                                create
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
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