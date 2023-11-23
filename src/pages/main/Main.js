import MainCSS from './Main.module.css';
function Main() {

    return (
        <>
            <div className={`${MainCSS["one"]}`}>
                <div className={`${MainCSS["left"]}`}>
                    <div className={`${MainCSS["ppbox"]}`}>
                        <h4>이번 주 스케줄</h4>
                        <div></div>
                    </div>
                    <div className={`${MainCSS["ppbox"]}`}>
                        <h4>진척률</h4>
                        <div></div>
                    </div>
                </div>
                <div className={`${MainCSS["right"]}`}>
                    <div className={`${MainCSS["ppbox"]}`}>
                        <h4>공지사항</h4>
                        <div className={`${MainCSS["pplist"]}`}>
                            <ul>
                                <li>인사발령리스트</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${MainCSS["ppbox"]}`}>
                        <h4>메신저</h4>
                        <div className={`${MainCSS["pplist"]}`}>
                            <ul>
                                <li>메시지</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;