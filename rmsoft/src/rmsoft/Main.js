// 템프 모듈 - Temp.js
import $ from "jquery";
import "./css/main.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeWheel, wheelDown, wheelUp } from '../store.js';
import pofoldata from './data/pofoldata'; 

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //

function Main(props){

    let copy = [...pofoldata]
    // idx를 기준으로해서 역으로 배열정렬
    copy = copy.sort((x,y)=>{
        return x.idx === y.idx ? 0 : x.idx > y.idx ? -1 : 1;
    })

    // let [wheel, setWheel] = useState(0)
    let a = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    let [w,setW] = useState(0)
    
    {
        let t = 0;
        $('body').on('wheel',function(e){

            let d = e.originalEvent.wheelDelta
            
            if(d == -120){
                if(w >= 7) setW(7)
                else setW(w = w + 1)
            }

            else if(d == 120){
                if(w <= 0) setW(0)
                else setW(w = w - 1)
            }


            console.log('휠값은 : ',w)
        })
    }

    useEffect(()=>{
        // 리턴에 있는거 실행되고 나서 실행

        // 불릿 알맞는거 색칠해줌
        $('.bullit li').eq(w).css({
            backgroundColor : 'white'
        })

        // 화면에따른 애니메이션 실행값 저장공간
        if(w == 1){
            $('.left1').css({
                position: 'absolute',
                width: '25%',
                bottom: '10%'
            })
            $('.right1').css({
                position: 'absolute',
                top: '10%',
                right: '0%',
                width: '25%'
            })
        }
        if(w == 2) console.log('2화면')
        if(w == 3) console.log('3화면')
        if(w == 4) console.log('4화면')
        if(w == 5) console.log('5화면')
        if(w == 6) console.log('6화면')
        if(w == 7) console.log('7화면')


        // 제일먼저 실행될코드
        return () => {
            // 불릿 색칠 초기화
            $('.bullit li').css({
                backgroundColor : 'black'
            })
            // 화면에따른 애니메이션 초기화 값 저장공간
            if(w == 1) console.log('1화면')
            if(w == 2) console.log('2화면')
            if(w == 3) console.log('3화면')
            if(w == 4) console.log('4화면')
            if(w == 5) console.log('5화면')
            if(w == 6) console.log('6화면')
            if(w == 7) console.log('7화면')
        }
    },[w])

    return(
        <>
        {/* 코드구역 */}
        <section className='main_sec'>
            {
                w === 0 ?
                <img src='./../images/bg3.jpg' />
                :
                <img src={copy[w - 1].isrc} />
            }
            {
                w === 0 ?
                <>
                <div className='main_mainbx'>
                    <h4>안녕하세요</h4>
                    <p>김동호의 포폴사이트</p>
                    <p>마우스 휠을하여 다른 포폴을 만나보셈</p>
                </div>
                </>
                :
                // console.log(pofoldata[w])
                <>
                <div className='main_mainbx'>
                    <div>
                        <img src={copy[w - 1].txt} />
                    </div>
                </div>
                    <div className='left1'>
                        <img src={copy[w - 1].left1} />
                    </div>
                    <div className='left2'>
                            <img src={copy[w - 1].left2} />
                        </div>
                    {
                        copy[w - 1].left3 != '' ?
                        <div className='left2'>
                            <img src={copy[w - 1].left3} />
                        </div>
                        : null
                    }
                    <div className='right1'>
                        <img src={copy[w - 1].right1} />
                    </div>
                    <div className='right1'>
                        <img src={copy[w - 1].right2} />
                    </div>
                    {
                        copy[w - 1].right3 != '' ?
                        <div className='left2'>
                            <img src={copy[w - 1].right3} />
                        </div>
                        : null
                    }
                </>
            }


            {/* 인디케이터 */}
            <ul className='bullit'>
                <li onClick={()=>{setW(0)}}></li>
                {
                    copy.map((x,i)=>
                        <li key={i}
                        onClick={()=>{
                            setW(i + 1)
                        }}
                        ></li>
                    )
                }
            </ul>
            {/* 인디케이터 */}

            {/* 스크롤 이미지 */}
            <div className='mit'>
                <img src='./../images/scroll.png' />
            </div>
            {/* 스크롤 이미지 */}
        </section>
        </>
        
    )
};

export default Main;