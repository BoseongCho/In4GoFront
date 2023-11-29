import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Xmark() {

    return ( 
        <>
             <FontAwesomeIcon icon={faXmark} color="red" style={{paddingLeft:10}} />
        </>
    )
}

export default Xmark;