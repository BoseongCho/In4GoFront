import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import rootReducer from "./modules";
import memberReducer from "./modules/MemberModule";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
    // Redux Store를 생성하기 위한 Redux 미들웨어의 하나.
)

export default store;