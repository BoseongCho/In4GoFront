import NoticeModal from "./components/NoticeModal";

function NoticeMain() {

    return (
        <>
            <div className="sc-eJDSGI jbTrWz">
                <div>
                    <div></div>
                    <div className="sc-gGvHcT cWMamh bread-title">
                        <div className="title">
                            <h2 className="h3">공지사항</h2>
                        </div>
                        <div className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#NoticeModal" >공지사항 추가</div>
                        <NoticeModal/>
                    </div>
                    <div className="sc-gGvHcT cWMamh">
                        <table className="table table-hover table-fixed">
                            <caption className="sr-only">공지사항</caption>
                            <colgroup>
                                <col/>
                                <col style={{width: '160px'}}/>
                                <col style={{width: '160px'}}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">제목</th>
                                <th scope="col">작성일</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="wide">
                                    <div data-toggle="modal">📌 123123</div>
                                </td>
                                <td className="wide">2023년 12월 21일(목)</td>
                                <td className="wide">
                                    <div className="btn text-primary cursor-pointer">앱 알림 보내기</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="wide">
                                    <div data-toggle="modal"> 16</div>
                                </td>
                                <td className="wide">2023년 12월 21일(목)</td>
                                <td className="wide">
                                    <div className="btn text-primary cursor-pointer">앱 알림 보내기</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="wide">
                                    <div data-toggle="modal"> 1</div>
                                </td>
                                <td className="wide">2023년 12월 21일(목)</td>
                                <td className="wide">
                                    <div className="btn text-primary cursor-pointer">앱 알림 보내기</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="wide">
                                    <div data-toggle="modal"> 1</div>
                                </td>
                                <td className="wide">2023년 12월 21일(목)</td>
                                <td className="wide">
                                    <div className="btn text-primary cursor-pointer">앱 알림 보내기</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="wide">
                                    <div data-toggle="modal"> 1</div>
                                </td>
                                <td className="wide">2023년 12월 21일(목)</td>
                                <td className="wide">
                                    <div className="btn text-primary cursor-pointer">앱 알림 보내기</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="wide">
                                    <div data-toggle="modal"> 123</div>
                                </td>
                                <td className="wide">2023년 12월 21일(목)</td>
                                <td className="wide">
                                    <div className="btn text-primary cursor-pointer">앱 알림 보내기</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="wide">
                                    <div data-toggle="modal"> 제목</div>
                                </td>
                                <td className="wide">2023년 12월 20일(수)</td>
                                <td className="wide">
                                    <div className="btn text-primary cursor-pointer">앱 알림 보내기</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div></div>
                    <div id="errorToast" className="toast toast-danger" data-delay="3000"
                         style={{position: 'fixed', bottom: '16px', right: '8px'}}>
                        <div className="toast-body">
                            <div className="toast-body-content"><p><br/></p></div>
                            <div className="ml-auto text-nowrap">
                                <button type="button" className="close" data-dismiss="toast"><i
                                    className="ic-close text-secondary"></i></button>
                            </div>
                        </div>
                    </div>
                    <div id="toastGreen" className="toast toast-success" data-delay="3000"
                         style={{position: 'fixed', bottom: '16px', right: '8px'}}>
                        <div className="toast-body">
                            <div className="toast-body-content"><p><br/></p></div>
                            <div className="ml-auto text-nowrap">
                                <button type="button" className="close" data-dismiss="toast"><i
                                    className="ic-close text-secondary"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="sc-gswNZR ggMbCF">
                        <div id="modal5" className="modal fade" tabIndex="-1" role="dialog">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered   "
                                 role="document">
                                <div className="modal-content  ">
                                    <div className="modal-body-header"><h4 className="h4">(을)를 삭제하시겠습니까?</h4>
                                        <button type="button" className="close" data-dismiss="modal"
                                                aria-label="Close"><span
                                            className="material-icons">close</span></button>
                                    </div>
                                    <div className="modal-body"></div>
                                    <div className="modal-footer" style={{zIndex: 100}}>
                                        <button type="button" className="btn">취소</button>
                                        <button type="button" className="btn btn-primary ">확인</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sc-gswNZR ggMbCF">
                        <div id="modal5" className="modal fade" tabIndex="-1" role="dialog">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered   "
                                 role="document">
                                <div className="modal-content max-height-initial ">
                                    <div className="modal-body-header"><h4 className="h4">댓글달기</h4>
                                        <button type="button" className="close" data-dismiss="modal"
                                                aria-label="Close"><span
                                            className="material-icons">close</span></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-body-content">
                                            <div className="form-group">
                                                <div className="position-relative">
                                                    <div><textarea className="form-control" rows="7"
                                                                   placeholder="댓글을 입력해주세요"
                                                                   name="replyContent"></textarea></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer" style={{zIndex: 100}}>
                                        <div>
                                            <button type="button" className="btn btn-secondary mr-1">취소</button>
                                            <button type="button" className="btn btn-primary">확인</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoticeMain;
