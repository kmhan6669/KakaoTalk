// 채팅방 리스트 보여주기
import YouTubePlayer from "react-youtube";
const YOUTUBE_URL = 'https://www.youtube.com/watch?v=tZixREYOIZQ';
const ID = 'tZixREYOIZQ';
function Karina() {
    const options = {
        width: "560",
        height: "315",
        playerVars: {
            autoplay: 1, //자동재생 O
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
        },
    };

    return (
        <div>
            <YouTubePlayer videoId={ID} opts={options} />
        </div>
    )
}

export default Karina;