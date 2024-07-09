import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHang";
// gán để xử lí
const rootReducer = combineReducers({
    stateGioHang : BaiTapGioHangReducer,
   
})
export default rootReducer;
