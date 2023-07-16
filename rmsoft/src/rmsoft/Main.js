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
        $('.bullit li').eq(w).css({
            backgroundColor : 'white'
        })
        return () => {
            $('.bullit li').css({
                backgroundColor : 'black'
            })
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
                <div className='main_mainbx' 
                style={{
                    backgroundColor : copy[w - 1].bgc,
                    color : copy[w - 1].font,
                    borderColor : copy[w - 1].bdc
                }}>
                    <h4>{copy[w - 1].title}</h4>
                    <p>{copy[w - 1].language}</p>
                    <p>{copy[w - 1].desc}</p>
                </div>
                </>
            }

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
        </section>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};

export default Main;