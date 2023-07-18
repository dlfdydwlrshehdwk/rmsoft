import $ from "jquery";
import "./css/intro.css";
import { useDispatch, useSelector } from 'react-redux'
import { changeIntro } from '../store.js';


// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{
    }); // JQB // 
} // jqFn 함수 //

function Intro(props){

    let ab = useSelector((state)=>{return state})
    let dispatch = useDispatch()

    return(
        <>
        <div className='introwrap'>
            <div className='introbx'>
                <div className='intro_textbx'>
                    <div>RM Soft</div>
                    <h1>김동호의 포트폴리오</h1>
                </div>
                <div className='intro_rmimgbx'>
                    <img src='./../images/test.png'/>
                </div>
                <button onClick={()=>{
                    dispatch(changeIntro())}}>Show portfolio</button>
            </div>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </div>
        </>
        
    )
};

export default Intro;