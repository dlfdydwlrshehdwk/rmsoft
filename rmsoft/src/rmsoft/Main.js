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
    let [t, setT] = useState(1)


    {

        $('body').on('wheel',function(e){
            console.log(t)
            if(t) return;
            console.log(t)
            let d = e.originalEvent.wheelDelta
            
            if(d == -120){
                if(w >= 7) setW(7)
                else setW(w = w + 1)
            }

            else if(d == 120){
                if(w <= 0) setW(0)
                else setW(w = w - 1)
            }


            // console.log('휠값은 : ',w)
        })
    }

    useEffect(()=>{
        // 리턴에 있는거 실행되고 나서 실행
        // clearTimeout(a)
        // clearTimeout(b)
        // 불릿 알맞는거 색칠해줌
        $('.bullit li').eq(w).css({
            backgroundColor : 'white'
        })

        var aaa;
        var bbb;
        clearTimeout(aaa)
        clearTimeout(bbb)
        $('.left1').off('setTimeout')
        // clearTimeout(b)
        // 화면에따른 애니메이션 실행값 저장공간
        if(w == 0) setT(0)
        else setT(1)
        if(w == 1){

            setTimeout(()=>{
                setT(0)
            },3000)
            
                // setTimeout(()=>{
                //     setT(0)
                // },3000)

            function ani1(){
                setTimeout(()=>{
                    $('.left1').css({
                        transition : '.5s',
                        position: 'absolute',
                        width: '20%',
                        top : '',
                        bottom: '10%',
                        zIndex : 1,
                        aspectRatio : 'auto',
                        opacity: 1
                    })
    
                    $('.right1').css({
                        transition : '.5s',
                        position: 'absolute',
                        top: '50%',
                        right: '5%',
                        width: '20%',
                        transform : 'translateY(-50%)',
                        zIndex : 1,
                        aspectRatio : 'auto',
                        opacity : 1
                    })
                },1000)
    
                setTimeout(()=>{
                    $('.left2').css({
                        opacity : 1
                    })
    
                    $('.right2').css({
                        opacity : 1
                    })
                },1100)
    
                setTimeout(()=>{
                    $('.left2').css({
                        transition : '.5s',
                        position: 'absolute',
                        width: '20%',
                        top : '',
                        bottom: '5%',
                        left : '3%',
                        aspectRatio : 'auto',
                    })
                    
                    $('.right2').css({
                        transition : '.5s',
                        position: 'absolute',
                        top: '60%',
                        right: '0%',
                        width: '20%',
                        transform : 'translateY(-50%)',
                        aspectRatio : 'auto',
                        zIndex : 0,
                        opacity : 1
                    })
                },1500)
                setTimeout(()=>{
                    $('.main_mainbx').css({
                        transition : '1s',
                        opacity : 1
                    })
                },2000)

            }
            function astart(){
                console.log('시작a')
                aaa = setTimeout(()=> ani1(),1)
            }
            astart()
        }

        if(w == 2){
            
            function ani2(){
                setTimeout(()=>{
                    $('.left1').css({
                        opacity : 1,
                        transition : '.5s',
                        width: '25%',
                        top : '0%',
                        bottom: '',
                        zIndex : 1,
                        aspectRatio : 1/1.2,
                        position: 'absolute',
                    })
                },500)
                setTimeout(()=>{
                    $('.left2').css({
                        opacity : 1,
                        transition : ' .5s .1s',
                        position: 'absolute',
                        width: '28%',
                        bottom: '-1%',
                        left : '2%',
                    })
                },1000)
                setTimeout(()=>{
                    $('.right1').css({
                        transition : '.5s',
                        position: 'absolute',
                        top: '0%',
                        right: '0%',
                        width: '22%',
                        transform : 'translateY(0%)',
                        zIndex : 3,
                        aspectRatio : 1/1.5,
                        opacity : 1
                    })
                    $('.right2').css({
                        transition : '.5s',
                        position: 'absolute',
                        top: '0%',
                        right: '0%',
                        width: '22%',
                        transform : 'translateY(0%)',
                        zIndex : 2,
                        aspectRatio : 1/1.5,
                        opacity : 1
                    })
                    $('.right3').css({
                        transition : '.5s',
                        position: 'absolute',
                        top: '0%',
                        right: '0%',
                        width: '22%',
                        transform : 'translateY(0%)',
                        zIndex : 2,
                        aspectRatio : 1/1.5,
                        opacity : 1
                    })
                },1500)
                setTimeout(()=>{
                    $('.right1').css({
                        position: 'absolute',
                        top: '14%',
                        right: '10%',
                        width: '22%',
                        transform : 'translateY(0%)',
                        zIndex : 4,
                        aspectRatio : 1/1.5,
                        opacity : 1
                    })
                    $('.right2').css({
                        position: 'absolute',
                        top: '7%',
                        right: '5%',
                        width: '22%',
                        transform : 'translateY(0%)',
                        zIndex : 3,
                        aspectRatio : 1/1.5,
                        opacity : 1
                    })  
                    $('.right3').css({
                        position: 'absolute',
                        top: '0%',
                        right: '0%',
                        width: '22%',
                        transform : 'translateY(0%)',
                        aspectRatio : 1/1.5,
                        opacity : 1
                    })
                },2500)
                setTimeout(()=>{
                    $('.main_mainbx').css({
                        transition : '1s',
                        opacity : 1
                    })
                },3000)
            }
            function bstart(){
                console.log('시작b')
                bbb = setTimeout(ani2,1)
            }
            bstart()
        }
        if(w == 3){
            setTimeout(()=>{
                $('.main_mainbx').css({
                    transition : '1s',
                    opacity : 1
                })
            },1000)
        }
        if(w == 4){
            setTimeout(()=>{
                $('.left1').css({
                    transition : 'opacity .4s',
                    position : 'absolute',
                    top : '20%',
                    left : '0%',
                    width  : '20%',
                    opacity : 1
                })
            },1000)
            setTimeout(()=>{
                $('.right1').css({
                    transition : 'opacity .4s',
                    position : 'absolute',
                    top : '8%',
                    right : '0%',
                    width : '26%',
                    opacity : 1,
                })
            },1500)
            setTimeout(()=>{
                $('.right2').css({
                    transition : 'opacity .4s',
                    position : 'absolute',
                    right : '14%',
                    width : '20%',
                    bottom  : '7%',
                    opacity : 1,
                })
            },2000)
            setTimeout(()=>{
                $('.main_mainbx').css({
                    transition : '1s',
                    opacity : 1
                })
            },2500)
        }
        if(w == 5){
            setTimeout(()=>{

            
            $('.left1').css({
                transition : '.5s',
                opacity : 1,
                position : 'absolute',
                top : '0%',
                left : '15%',
                width : '10%',
                transform: 'translateY(0%)'
            })
            $('.left2').css({
                transition : '.5s',
                opacity : 1,
                position : 'absolute',
                top : '',
                bottom : '3%',
                left : '3%',
                width : '20%',
                transform: 'translate(0%)'
            })

            $('.right1').css({
                transition : '.5s',
                opacity : 1,
                position : 'absolute',
                top : '8%',
                right : '0%',
                width : '35%',
                transform: 'translateX(0%)'
            })
            $('.right2').css({
                transition : '.5s',
                opacity : 1,
                position : 'absolute',
                bottom : '0%',
                right : '10%',
                width : '10%',
                transform: 'translateY(0%)'
            })
            $('.right3').css({
                transition : '1s',
                opacity : 1,
                position : 'absolute',
                bottom : '0%',
                right : '0%',
                width : '10%',
                transform: 'translateY(0%)'
                })
            },1000)
            setTimeout(()=>{
                $('.main_mainbx').css({
                    transition : '1s',
                    opacity : 1
                })
            },1500)

        }
        if(w == 6){
            setTimeout(()=>[
                $('.left1').css({
                    transition : '.4s',
                    opacity : 1,
                    position : 'absolute',
                    top :'0%',
                    left : '21%',
                    width : '23%',
                    bottom : '',
                    transform : 'translateY(0%)'
                })
            ],1000)
            setTimeout(()=>{
                $('.left2').css({
                    transition : '.4s',
                    opacity : 1,
                    position : 'absolute',
                    bottom :'3%',
                    left : '0%',
                    width : '16%',
                    transform : 'translateX(0%)'
                })
            },1500)
            setTimeout(()=>{
                $('.right1').css({
                    transition : '.4s',
                    position:'absolute',
                    top : '',
                    bottom: '2%',
                    right: '2%',
                    width: '17%',
                    opacity: 1,
                })
            },2000)
            setTimeout(()=>{
                $('.main_mainbx').css({
                    transition : '1s',
                    opacity : 1
                })
            },2500)
        }
        if(w == 7){
            setTimeout(()=>{
                $('.left1').css({
                    transition : '.4s',
                    position: 'absolute',
                    bottom: '11%',
                    left: '0%',
                    width: '25%',
                    opacity: 1,
                })
            },1000)
            setTimeout(()=>{
                $('.right1').css({
                    transition : '.4s',
                    position: 'absolute',
                    top: '4%',
                    right: '12%',
                    width: '23%',
                    opacity: 1,
                })
            },1500)
            setTimeout(()=>{
                $('.right2').css({
                    transition : '.4s',
                    position : 'absolute',
                    top: '42%',
                    right: '4%',
                    width: '25%',
                    opacity: 1,
                })
            },2000)
            setTimeout(()=>{
                $('.main_mainbx').css({
                    transition : '1s',
                    opacity : 1
                })
            },2500)
        }


        // 제일먼저 실행될코드
        return () => {
            // 불릿 색칠 초기화
            $('.bullit li').css({
                backgroundColor : 'black'
            })
            $('.left1, .left2, .left3, .right1, .right2, .right3').css({
                transition : 'none',
                top : '',
                bottom : '',
                left : '',
                bottom : '',
                width : '',
            })
            $('.main_mainbx').css({
                transition : 'none',
                opacity : 0
                })
            
            // 화면에따른 애니메이션 초기화 값 저장공간
            if(w == 1){

                

                $('.left1').css({
                    transition : 'none',
                    position: 'absolute',
                    width: '20%',
                    top : '',
                    bottom: '10%',
                    zIndex : 1,
                    aspectRatio : 'auto',
                    opacity : 0

                })
                $('.left2').css({
                    transition : 'none',
                    position: 'absolute',
                    width: '20%',
                    top : '',
                    bottom: '10%',
                    left : '0%',
                    aspectRatio : 'auto',
                    opacity : 0
                })
                $('.right1').css({
                    transition : 'none',
                    position: 'absolute',
                    top: '50%',
                    right: '5%',
                    width: '20%',
                    transform : 'translateY(-50%)',
                    zIndex : 1,
                    aspectRatio : 'auto',
                    opacity : 0
                })
                $('.right2').css({
                    transition : 'none',
                    position: 'absolute',
                    top: '50%',
                    right: '5%',
                    width: '20%',
                    transform : 'translateY(-50%)',
                    aspectRatio : 'auto',
                    zIndex : 0,
                    opacity : 0
                })
                $('.main_mainbx').css({
                    opacity : 0
                })
            }
            if(w == 2){
                $('.left1').css({
                    transition : 'none',
                    position: 'absolute',
                    width: '0%',
                    height : 'auto',
                    top : '0%',
                    bottom: '',
                    zIndex : 1,
                    aspectRatio : 1/1.2,
                    opacity : 0
                })
                $('.left2').css({
                    transition : 'none',
                    position: 'absolute',
                    width: '0%',
                    height : 'auto',
                    bottom: '-1%',
                    left : '2%',
                    opacity : 0
                })
                $('.right1').css({
                    transition : 'none',
                    position: 'absolute',
                    top: '0%',
                    right: '0%',
                    width: '22%',
                    transform : 'translateY(0%)',
                    zIndex : 2,
                    aspectRatio : 1/1.5,
                    opacity : 0
                })
                $('.right2').css({
                    transition : 'none',
                    position: 'absolute',
                    top: '0%',
                    right: '0%',
                    width: '22%',
                    transform : 'translateY(0%)',
                    zIndex : 1,
                    aspectRatio : 1/1.5,
                    opacity : 0
                })
                $('.right3').css({
                    transition : 'none',
                    position: 'absolute',
                    top: '0%',
                    right: '0%',
                    width: '22%',
                    transform : 'translateY(0%)',
                    aspectRatio : 1/1.5,
                    opacity : 0
                })
                $('.main_mainbx').css({
                    opacity : 0
                })
            }
            if(w == 3){
                console.log('3화면')
                $('.main_mainbx').css({
                    opacity : 0
                })
            }
            if(w == 4){ 
                console.log('4화면')
                $('.left1').css({
                    transition : 'none',
                    position : 'absolute',
                    top : '20%',
                    left : '0%',
                    width  : '20%',
                    opacity : 0,
                })
                $('.right1').css({
                    transition : 'none',
                    position : 'absolute',
                    top : '8%',
                    right : '0%',
                    width : '26%',
                    opacity : 0,
                })
                $('.right2').css({
                    transition : 'none',
                    position : 'absolute',
                    right : '14%',
                    width : '20%',
                    bottom  : '7%',
                    opacity : 0,
                })
                $('.main_mainbx').css({
                    opacity : 0
                })
            }

            if(w == 5){ 
                console.log('5화면')
                $('.left1').css({
                    opacity : 1,
                    position : 'absolute',
                    top : '0%',
                    left : '15%',
                    width : '10%',
                    transform: 'translateY(-100%)'
                })
                $('.left2').css({
                    opacity : 1,
                    position : 'absolute',
                    top : '',
                    bottom : '-3%',
                    left : '-3%',
                    transform: 'translate(-100%,100%)',
                    width : '20%'
                })

                $('.right1').css({
                    opacity : 1,
                    position : 'absolute',
                    top : '8%',
                    right : '0%',
                    width : '35%',
                    transform: 'translateX(100%)'
                })
                $('.right2').css({
                    opacity : 1,
                    position : 'absolute',
                    bottom : '0%',
                    right : '10%',
                    width : '10%',
                    transform: 'translateY(100%)'
                })
                $('.right3').css({
                    opacity : 1,
                    position : 'absolute',
                    bottom : '0%',
                    right : '0%',
                    width : '10%',
                    transform: 'translateY(100%)'
                })
                $('.main_mainbx').css({
                    opacity : 0
                })


            }
            if(w == 6){ 
                console.log('6화면')
                $('.left1').css({
                    opacity : 1,
                    position : 'absolute',
                    top :'0%',
                    left : '21%',
                    width : '23%',
                    bottom : '',
                    transform : 'translateY(-100%)'
                })
                $('.left2').css({
                    opacity : 1,
                    position : 'absolute',
                    bottom :'3%',
                    left : '0%',
                    width : '16%',
                    transform : 'translateX(-100%)'
                })
                $('.right1').css({
                    position:'absolute',
                    top : '',
                    bottom: '2%',
                    right: '2%',
                    width: '17%',
                    opacity: 0,
                })
                $('.main_mainbx').css({
                    opacity : 0
                })
            }
            if(w == 7){ 
                console.log('7화면')
                $('.left1').css({
                    position: 'absolute',
                    bottom: '11%',
                    left: '0%',
                    width: '25%',
                    opacity: 0,
                })
                $('.right1').css({
                    position: 'absolute',
                    top: '4%',
                    right: '12%',
                    width: '23%',
                    opacity: 0,
                })
                $('.right2').css({
                    position : 'absolute',
                    top: '42%',
                    right: '4%',
                    width: '25%',
                    opacity: 0,
                })
                $('.main_mainbx').css({
                    opacity : 0
                })
            }
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
                <>
                <div className='main_mainbx'>
                    <div>
                        <img src={copy[w - 1].txt} />
                    </div>
                </div>
                    {
                        copy[w - 1].left1 != '' ?
                        <div className='left1'>
                            <img src={copy[w - 1].left1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left2 != '' ?
                        <div className='left2'>
                            <img src={copy[w - 1].left2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left3 != '' ?
                        <div className='left3'>
                            <img src={copy[w - 1].left3} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right1 != '' ?
                        <div className='right1'>
                            <img src={copy[w - 1].right1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right2 != '' ?
                        <div className='right2'>
                            <img src={copy[w - 1].right2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right3 != '' ?
                        <div className='right3'>
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