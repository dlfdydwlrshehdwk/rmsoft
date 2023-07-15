import $ from "jquery";
import "./css/main.css";

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //

function Main(props){
    return(
        <>
        {/* 코드구역 */}
        <div className='mainbx'>
            <div className='main_textbx'>
                <div>알엠소프트</div>
                <h1>김동호의 포트폴리오</h1>
            </div>
            <div className='main_rmimgbx'>
                <img src='./images/test.png'/>
            </div>
            <button>Show portfolio</button>
        </div>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};

export default Main;