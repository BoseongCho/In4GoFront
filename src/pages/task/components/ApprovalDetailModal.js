import '../taskCSS/ApprovalDetail.css'
function ApprovalDetailModal() {

    return (
        <div className="modal fade modal-dialog-scrollable " id="apvModal2" data-bs-backdrop="static"
             data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl ">
            <div className="modal-content ">
                <div className="modal-body-header"><h4 className="h4"></h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                        className="material-icons">close</span></button>
                </div>
                <div className="modal-body">
                    <div tabIndex="0" style={{outline: '0px'}}>
                        <div className="sc-bWOGAC bZDmKl"><h4 className="ApvHeader-title">123123</h4>
                            <div className="sc-eGugkK iZoAAQ StyledApvDl">
                                <div className="ApvDl-item"><span className="ApvDl-dt">문서번호:</span><span
                                    className="ApvDl-dd">123123</span></div>
                                <div className="ApvDl-item"><span className="ApvDl-dt">보존연한:</span><span
                                    className="ApvDl-dd">영구</span></div>
                                <div className="ApvDl-item"><span className="ApvDl-dt">작성자:</span><span
                                    className="ApvDl-dd">조토니 (creba1234@gmail.com)</span></div>
                                <div className="ApvDl-item"><span className="ApvDl-dt">작성일:</span><span
                                    className="ApvDl-dd">2023-12-17 14:08</span></div>
                            </div>
                        </div>
                        <div className="sc-csDkEv ieDqXT">
                            <div className="ApvHeader-footer">
                                <div className="ApvHeader-footer_column">
                                    <button className="Apv-button is-neutral" title="복사하기"><span
                                        className="material-icons cursor-pointer">content_paste</span>문서 복사
                                    </button>
                                    <button className="Apv-button is-neutral" title="인쇄하기"><span
                                        className="material-icons">print</span>문서 출력
                                    </button>
                                    <button className="Apv-button is-neutral" type="button"><span
                                        className="material-icons">star_outline</span>북마크 하기
                                    </button>
                                    <button className="Apv-button is-neutral" type="button"><span
                                        className="material-icons">link</span>링크 복사
                                    </button>
                                </div>
                                <div className="ApvHeader-footer_column">
                                    <button type="button" className="Apv-button is-danger">닫기</button>
                                    <button type="button" className="Apv-button is-danger">결재 취소</button>
                                    <button type="button" className="Apv-button is-primary is-ghost">수정</button>
                                </div>
                            </div>
                        </div>
                        <div className="sc-brePNt dKqAkS">
                            <div className="ApvSection-header"><h2 className="ApvSection-title">결재경로</h2>
                                <button type="button" className="Apv-button is-text is-primary">+참조자 추가</button>
                            </div>
                            <div className="ApvSection-body">
                                <div className="sc-GKYbw dSYOmc">
                                    <div className="thead">
                                        <div className="tr">
                                            <div className="cell">순서</div>
                                            <div className="cell">이름</div>
                                            <div className="cell">결재 상태</div>
                                            <div className="cell">구분</div>
                                        </div>
                                    </div>
                                    <div className="tbody">
                                        <div className="tr-group is-active has-border">
                                            <div className="tr">
                                                <div className="cell">1</div>
                                                <div className="cell" title="creba@naver.com">조성일</div>
                                                <div className="cell"><span className="sc-gsGlKL fEuiZV">대기</span></div>
                                                <div className="cell">결재자 / 팀리더</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-brePNt dKqAkS">
                            <div className="ApvSection-header"><h2 className="ApvSection-title">내용</h2></div>
                            <div className="ApvSection-body">
                                <div className="sc-gJqSRm gudzTW">
                                    <div className="sc-jRwbcX gMsGbp">
                                        <div className="fr-view"><p>12311231</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-brePNt dKqAkS">
                            <div className="ApvSection-header"><h2 className="ApvSection-title">댓글보기 </h2>
                                <button className="Apv-button is-text is-primary">+댓글쓰기</button>
                            </div>
                            <div className="ApvSection-body">
                                <div className="sc-evzXkX Umavi">작성된 댓글이 없습니다</div>
                                <div className="sc-fvEvSO cPZPrX"></div>
                                <form className="sc-fcCDlF gtBzxE StyledApvCommentForm"><textarea id="apvCommentForm"
                                                                                                  rows="2"
                                                                                                  placeholder="댓글을 입력해주세요"
                                                                                                  className="ApvCommentForm-input"></textarea>
                                    <div className="ApvCommentForm-footer">
                                        <button type="submit" className="Apv-button is-primary" disabled="">입력</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="sc-brePNt dKqAkS">
                            <div className="ApvSection-header"><h2 className="ApvSection-title">첨부파일 </h2>
                                <button className="Apv-button is-text is-primary">+파일첨부</button>
                            </div>
                            <div className="ApvSection-body">
                                <div className="sc-fHSyak jiYotQ">
                                    <div className="sc-evzXkX Umavi">첨부된 파일이 없어요</div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-brePNt dKqAkS">
                            <div className="ApvSection-header"><h2 className="ApvSection-title">관련문서 </h2>
                                <button className="Apv-button is-text is-primary">+관련문서 추가</button>
                            </div>
                            <div className="ApvSection-body">
                                <div className="sc-fHSyak jiYotQ">
                                    <div className="sc-evzXkX Umavi">관련문서가 없어요</div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-brePNt dKqAkS">
                            <div className="ApvSection-header"><h2 className="ApvSection-title">의견 </h2></div>
                            <div className="ApvSection-body">
                                <div className="sc-evzXkX Umavi">작성된 의견이 없습니다</div>
                                <div className="sc-fvEvSO cPZPrX"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer" style={{ zIndex: 100 }}></div>
            </div>
        </div>
    </div>
    );
}

export default ApprovalDetailModal;