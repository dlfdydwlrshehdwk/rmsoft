// 템프 모듈 - Temp.js
import $ from "jquery";
import "./css/layout.css";
import { Outlet } from 'react-router-dom';

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //

function Layout(props){
    return(
        <>
        {/* 코드구역 */}
        {/* 1.상단영역 */}
        <header className="top">
            {/* 네비게이션 파트 */}
            <nav className="gnb">
                
            </nav>
        </header>

        {/* 2. 메인영역 */}
        <main className="cont">
            {/* 출력파트 : 각 페이지의 컴포넌트가 출력됨 */}
            <Outlet />
        </main>

        {/* 3.하단영역 */}
        <footer className="info">
        </footer>

        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};

export default Layout;