import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../../utils/tokenUtils";
import {useState} from "react";
import Ek from "../../../components/common/Ek";
import {callPostNoticeAPI} from "../../../apis/NoticeAPICalls";

function NoticeModal() {

    const dispatch = useDispatch();
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const [form, setForm] = useState({
        memCode: token.sub,
        title: '',
        content: '',
        docType: '',
        isPinned : 0
    })

    const [noteEditor, setNoteEditor] = useState('');
    const [docAttachments, setDocAttachments] = useState('');

    const onChangeHanlder = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }
    const pinChangeHandler = (e) => {
        if(e.target.checked == true){
            setForm({
                ...form,
                [e.target.name]: 1
            })
        } else{
            setForm({
                ...form,
                [e.target.name]: 0
            })
        }
    }

    const clearFilesHandler = () => {

        document.querySelector('input[type=file]').value = null;
        setDocAttachments('');
    }

    const closeModalHandler = () => {
        document.querySelector('input[type=file]').value = null;
        document.querySelector('#title').value = null;
        if (noteEditor) {
            noteEditor.setData('');
        }

        setForm({
            memCode: token.sub,
            title: '',
            content: '',
            isPinned: 0
        })
        document.querySelector('#isPinned').checked = false;
        setDocAttachments([]);
    }

    const onClickFileHandler = () => {
        document.querySelector('input[type=file]').click();
    }

    const fileUploadHandler = (e) => {

        const files = e.target.files;
        const fileArray = [];

        for (let i = 0; i < files?.length; i++) {
            fileArray.push(files[i]);
        }
        setDocAttachments(fileArray);
    }

    const onClickSendFormHandler = () => {

        const formData = new FormData();
        if (docAttachments?.length !== 0) {
            for (let i = 0; i < docAttachments.length; i++) {
                formData.append("file", docAttachments[i]);
            }
        }

        document.querySelector('input[type=file]').value = null;

        dispatch(callPostNoticeAPI(form, formData))
        .then(() => {document.querySelector('#closeModal').click()});
        window.alert('등록 되었습니다.');
        window.location.reload();
    }

    return (
        <>
            <div className="modal fade modal-dialog-scrollable " id="NoticeModal" data-bs-backdrop="static"
                 data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">공지사항</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={closeModalHandler}></button>
                        </div>
                        <div className="modal-body">
                            <div width="80%" radius={10} className="sc-lbVpMG ieOMJV">
                                <div className="sc-gScZFl cyBdCS">
                                    <div className="modal-body-content">
                                        <div className="form-group">
                                            <div className="d-flex-space">
                                                <div className="mb-1">
                                                    <div className="dropdown bootstrap-select">
                                                        <div className="custom-control custom-checkbox"
                                                             style={{minHeight: 'auto', paddingBottom: '5px'}}>
                                                            <input type="checkbox" className="checkbox-disable custom-control-input"
                                                            id="isPinned" name="isPinned" onChange={pinChangeHandler}/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="isPinned">
                                                                이 글을 상단에 고정합니다
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="position-relative">
                                                <p className="micro">제목</p>
                                                <input type="text" className="form-control bg-white "
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
                                                    <div tabIndex={0} className="file-drop-zone"
                                                         onClick={onClickFileHandler}>
                                                        <input multiple type="file" autoComplete="off" tabIndex={-1}
                                                               style={{display: "none"}}
                                                               onChange={fileUploadHandler}/>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button id="closeModal" type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={closeModalHandler}>취소
                            </button>
                            <button type="button" className="btn btn-primary" onClick={onClickSendFormHandler}>확인
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}

export default NoticeModal;