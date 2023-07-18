// 템프 모듈 - Temp.js
import $ from "jquery";
import "./css/layout.css";
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Intro from './Intro' 
import { useSelector } from 'react-redux';
import pofoldata from './data/pofoldata';


// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //

function Layout(props){

    let a = useSelector((state) => state)

    const [pjsoga , setPjsoga] = useState(0)

    useEffect(()=>{
        if(pjsoga == 1){
            $('.layout_header_ul').css({
                zIndex : 0
            })
        }
        if(pjsoga == 0){
            $('.layout_header_ul').css({
                zIndex : 10
            })
        }
    },[pjsoga])

    return(
        <>
        {
            a.intro == 1 && 
            // 버튼누르면 사이트 끄기전까지 다시 안뜨게 하기위해 세션스토리지사용
            sessionStorage.getItem('intro') != 1 &&
            <Intro />
        }
        

        <header>
                <nav>
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
        </>
        
    )
};

export default Layout;