import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../../utils/tokenUtils";
import {useState} from "react";
import Xmark from "../../../components/icon/Xmark";
import Ek from "../taskApproval/Ek";
import {CLEAR_INFO} from "../../../modules/ModalModule";
import '../taskCSS/MakeApproval.css';

function ApprovalModal() {

    const getInfo = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();
    const token = decodeJwt(window.localStorage.getItem("accessToken"));


    const [form, setForm] = useState({
        memCode: token.sub,
        title: '',
        content: '',
        approverList: [],
        refereeList: []
    })

    const [mouseOverIndex, setMouseOverIndex] = useState();
    const [whereMouseAt, setWhereMouseAt] = useState('');
    const [noteEditor, setNoteEditor] = useState('');
    const [docAttachments, setDocAttachments] = useState('');

    const onChangeHanlder = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const clearFilesHandler = () => {

        document.querySelector('input[type=file]').value = null;
        setDocAttachments('');
    }
    const onClickXmarkHandler = ({index, type}) => {

        let temp = [];

        type === "approver" ? temp = form.approverList : temp = form.refereeList;

        temp.splice(index, 1);
        dispatch({type: CLEAR_INFO});
    }

    const closeModalHandler = () => {
        document.querySelector('input[type=file]').value = null;
        document.querySelector('#title').value = null;
        if (noteEditor) {
            noteEditor.setData('');
        }
        document.querySelector('#searchInput').value = null;

        setForm({
            memCode: token.sub,
            title: '',
            approverList: [],
            refereeList: [],
            content: ''
        })
        setDocAttachments([]);
        // dispatch({ type: CLEAR_INFO });
    }

    const onClickFileHandler = () => {
        document.querySelector('input[type=file]').click();
    }

    const fileUploadHandler = (e) => {

        const files = e.target.files;
        const fileArray = [];

        for(let i = 0; i < files?.length; i++){
            fileArray.push(files[i]);
        }
        setDocAttachments(fileArray);
    }

    return (
        <>
            <div className="modal fade modal-dialog-scrollable " id="staticBackdrop" data-bs-backdrop="static"
                 data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">결재 상신</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={closeModalHandler}></button>
                        </div>
                        <div className="modal-body">
                            <div width="80%" radius={10} className="sc-lbVpMG ieOMJV">
                                <div className="sc-gScZFl cyBdCS">
                                    <div className="modal-body-content">
                                        <div className="form-group">
                                            <div className="position-relative">
                                                <p className="micro">제목</p>
                                                <input type="text" className="form-control bg-white"
                                                       placeholder="제목을 입력해주세요"
                                                       name="title" maxLength={100} id="title"
                                                       onChange={onChangeHanlder}
                                                />
                                            </div>
                                        </div>
                                        {/* 노트 자리 */}
                                        <div className="form-group">
                                            <span style={{color: 'black'}}>
                                                <Ek setNoteEditor={setNoteEditor} form={form} setForm={setForm}/>
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <p className="h6">파일첨부</p>
                                            <div className="position-relative">
                                                <div className="d-flex-space">
                                                    <p style={{fontStyle: "italic", fontSize: 12}}>
                                                        파일은 하나당 최대 10MByte 까지 업로드 가능합니다. 여러개를
                                                        첨부하려면 [Shift키] 또는 [Ctrl키]를 누르고 선택해주세요
                                                    </p>
                                                    <span className="text-primary cursor-pointer ml-3"
                                                          onClick={clearFilesHandler}>
                                                        파일 지우기
                                                    </span>
                                                </div>
                                                <div>
                                                    <div tabIndex={0} className="file-drop-zone" onClick={onClickFileHandler}>
                                                    <input multiple type="file" autoComplete="off" tabIndex={-1}
                                                           style={{display: "none"}} onChange={fileUploadHandler} />
                                                    <p>파일을 드래그 앤 드롭하거나 여기를 클릭해주세요.</p>
                                                </div>
                                            </div>
                                            <div className="mt-1">
                                                {docAttachments?.length > 0 && docAttachments.map((file) => (

                                                    <div key={file.name}>{file.name}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <p className="h6">관련문서</p>
                                        <div className="position-relative">
                                            <div className="text-primary cursor-pointer mt-1">
                                                + 관련문서 첨부하기
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div>
                                            <div>
                                                <div width="100%" className="sc-fXqpFg iBqTtj">
                                                    <div className="apv-wrapper">
                                                        <table className="table table-fixed my-3">
                                                            <caption className="sr-only"/>
                                                            <thead>
                                                            <tr>
                                                                <th className="sc-dwnOUR hMOodW">순서</th>
                                                                <th className="sc-dwnOUR hMOodW">결재자</th>
                                                                <th className="sc-dwnOUR hMOodW">직급</th>
                                                                <th className="sc-dwnOUR hMOodW">부서</th>

                                                            </tr>
                                                            </thead>
                                                            <thead>
                                                            {form.approverList?.length === 0 &&
                                                                <tr>
                                                                    <td colSpan={12} className="sc-ZqFbI cWjmER"
                                                                        style={{paddingBottom: 30}}>
                                                                        결재자가 없습니다.
                                                                    </td>
                                                                </tr>}

                                                            {form.approverList?.length > 0 && form.approverList.map((a, index) => (
                                                                <tr key={index} className="sc-UpCWa kiPXzL no-select"
                                                                    // onMouseOver={() => mouseOverHandler({ index, type: 'approver' })} onMouseOut={mouseOutHandler}
                                                                >
                                                                    <td className="sc-jIILKH gIRdvs">
                                                                        <div>{index + 1}</div>
                                                                    </td>
                                                                    <td className="sc-jIILKH gIRdvs">
                                                                        <div className="sc-gGvHcT gmJlZF">
                                                                            <div className="sc-ckEbSK hTJZdZ">
                                                                                <div
                                                                                    className="sc-GhhNo cMWDrM">{a.memName}</div>
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                    <td className="sc-jIILKH gIRdvs">
                                                                        <div className="sc-gGvHcT gmJlZF">
                                                                            <div className="sc-ckEbSK hTJZdZ">
                                                                                <div
                                                                                    className="sc-GhhNo cMWDrM">{a.positionCode.positionName}</div>
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                    <td className="sc-jIILKH gIRdvs">
                                                                        <div className="sc-gGvHcT gmJlZF">
                                                                            <div className="sc-ckEbSK hTJZdZ">
                                                                                <div
                                                                                    className="sc-GhhNo cMWDrM">{a.departmentCode.departmentName}</div>
                                                                            </div>
                                                                            {mouseOverIndex === index && whereMouseAt === 'approver' &&
                                                                                <div
                                                                                    onClick={() => onClickXmarkHandler({
                                                                                        index,
                                                                                        type: 'approver'
                                                                                    })}><Xmark size="xl"/></div>}
                                                                        </div>

                                                                    </td>

                                                                </tr>
                                                            ))}

                                                            </thead>
                                                            <tbody className="appTbody">

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="cr-wrapper" style={{paddingTop: 0}}>
                                                        <div>참조</div>
                                                        <div className="sc-hlLBRy zApTA">
                                                            {form.refereeList?.length === 0 &&
                                                                <div className="sc-ZqFbI cWjmER"> 참조자가 없습니다.</div>
                                                            }
                                                            {form.refereeList?.length > 0 && form.refereeList.map((r, index) => (
                                                                <div className="mr-3" key={index}
                                                                     onClick={() => onClickXmarkHandler({
                                                                         index,
                                                                         type: 'referee'
                                                                     })}>
                                                                    {/*// onMouseOver={() => mouseOverHandler({ index, type: 'referee' })} onMouseOut={mouseOutHandler}>*/}
                                                                    <span
                                                                        className="sc-jNJNQp bzwmyz">{r.positionCode.positionName}: {r.memName}</span>
                                                                    {mouseOverIndex === index && whereMouseAt === 'referee' &&
                                                                        <Xmark/>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <select className="form-select mr-3"
                                                    style={{height: '35px', width: '100px', display: 'inline-block'}}
                                                    id="searchValue1">
                                                <option value="이름">이름</option>
                                                <option value="직급">직급</option>
                                            </select>
                                            <div className="form-check  mr-3" style={{display: 'inline-block'}}>
                                                <input className="form-check-input" type="radio" name="checkApprover"
                                                       id="approverId" defaultChecked/>
                                                <label className="" htmlFor="approverId" value="결재자">
                                                    결재자
                                                </label>
                                            </div>
                                            <div className="form-check" style={{display: 'inline-block'}}>
                                                <input className="form-check-input" type="radio" name="checkApprover"
                                                       id="refereeId"/>
                                                <label className="form-check-label" htmlFor="refereeId" value="참조">
                                                    참조
                                                </label>
                                            </div>
                                            <input type="text" id="searchInput"
                                                   style={{width: '200px', display: 'block'}}/>
                                            {/*onChange={searchInfoHandler} />*/}
                                        </div>
                                        {getInfo.length > 0 && getInfo.map((a, index) => (
                                            <div className="mt-2" key={index}>
                                                {/*<span className="getInfo" onClick={() => onClickapproverListHandler(a)}>{a.memName} | {a.departmentCode.departmentName} | {a.positionCode.positionName} </span>*/}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/*<button id="closeModal" type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalHandler}>취소</button>*/}
                        {/*<button type="button" className="btn btn-primary" onClick={onClickSendFormHandler}>상신</button>*/}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ApprovalModal;