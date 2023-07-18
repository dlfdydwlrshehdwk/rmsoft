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

    let qwe = '<Show Project>'
    let ewq = "</Show Project>"
    let copy = [...pofoldata]
    // idx를 기준으로해서 역으로 배열정렬
    copy = copy.sort((x,y)=>{
        return x.idx === y.idx ? 0 : x.idx > y.idx ? -1 : 1;
    })

    // let [wheel, setWheel] = useState(0)
    let a = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    let [w,setW] = useState(0)
    let [tt, setTt] = useState(0)

    let ab = useSelector((state)=>{return state})

    console.log('ab',ab.intro)


    console.log(copy)











    
    
    function wheelFn(){

        $('body').on('wheel',function(e){

            let d = e.originalEvent.wheelDelta

            
            console.log(d)
            if(d <= -120){
                if(w >= 7){
                    setW(7)
                }
                else{
                    setW(w = w + 1)
                } 
            }
            else if(d >= 120){
                if(w <= 0) setW(0)
                else setW(w = w - 1)
            }
            setTt(w)
        })
    }

    wheelFn()

    useEffect(()=>{
        console.log('tt',tt)
        // 리턴에 있는거 실행되고 나서 실행

        // 불릿 알맞는거 색칠해줌
        $('.bullit li').eq(w).css({
            backgroundColor : 'white'
        })

        if(w == 0){
            setTimeout(()=>{
                $('.main_mainbx').css({
                    transition : '1s',
                    opacity : 1
                })
                // 흔들흔들 나타나게하기 값
                $('.showpj').css({
                    transition : '1s',
                    opacity : 1
                })
                
            },1000)
        }
        // 화면에따른 애니메이션 실행값 저장공간
        if(w == 1){
                setTimeout(()=>{
                    $('.a_left1').css({
                        transition : '.5s',
                        position: 'absolute',
                        width: '20%',
                        top : '',
                        bottom: '10%',
                        zIndex : 1,
                        aspectRatio : 'auto',
                        opacity: 1
                    })
                    $('.a_right1').css({
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
                    $('.a_left2').css({
                        opacity : 1
                    })
    
                    $('.a_right2').css({
                        opacity : 1
                    })
                },1100)
    
                setTimeout(()=>{
                    $('.a_left2').css({
                        transition : '.5s',
                        position: 'absolute',
                        width: '20%',
                        top : '',
                        bottom: '5%',
                        left : '3%',
                        aspectRatio : 'auto',
                    })
                    $('.a_right2').css({
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

        if(w == 2){

                setTimeout(()=>{
                    $('.b_left1').css({
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
                    $('.b_left2').css({
                        opacity : 1,
                        transition : ' .5s .1s',
                        position: 'absolute',
                        width: '28%',
                        bottom: '-1%',
                        left : '2%',
                    })
                },1000)

                setTimeout(()=>{
                    $('.b_right1').css({
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
                    $('.b_right2').css({
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
                    $('.b_right3').css({
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
                    $('.b_right1').css({
                        position: 'absolute',
                        top: '14%',
                        right: '10%',
                        width: '22%',
                        transform : 'translateY(0%)',
                        zIndex : 4,
                        aspectRatio : 1/1.5,
                        opacity : 1
                    })
                    $('.b_right2').css({
                        position: 'absolute',
                        top: '7%',
                        right: '5%',
                        width: '22%',
                        transform : 'translateY(0%)',
                        zIndex : 3,
                        aspectRatio : 1/1.5,
                        opacity : 1
                    })  
                    $('.b_right3').css({
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
                $('.d_left1').css({
                    transition : 'opacity .4s',
                    position : 'absolute',
                    top : '20%',
                    left : '0%',
                    width  : '20%',
                    opacity : 1
                })
            },1000)
            setTimeout(()=>{
                $('.d_right1').css({
                    transition : 'opacity .4s',
                    position : 'absolute',
                    top : '8%',
                    right : '0%',
                    width : '26%',
                    opacity : 1,
                })
            },1500)
            setTimeout(()=>{
                $('.d_right2').css({
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
            $('.e_left1').css({
                transition : '.5s',
                opacity : 1,
                position : 'absolute',
                top : '0%',
                left : '15%',
                width : '10%',
                transform: 'translateY(0%)'
            })
            $('.e_left2').css({
                transition : '.5s',
                opacity : 1,
                position : 'absolute',
                top : '',
                bottom : '3%',
                left : '3%',
                width : '20%',
                transform: 'translate(0%)'
            })

            $('.e_right1').css({
                transition : '.5s',
                opacity : 1,
                position : 'absolute',
                top : '8%',
                right : '0%',
                width : '35%',
                transform: 'translateX(0%)'
            })
            $('.e_right2').css({
                transition : '.5s',
                opacity : 1,
                position : 'absolute',
                bottom : '0%',
                right : '10%',
                width : '10%',
                transform: 'translateY(0%)'
            })
            $('.e_right3').css({
                transition : '.5s',
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
                $('.f_left1').css({
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
                $('.f_left2').css({
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
                $('.f_right1').css({
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
                $('.g_left1').css({
                    transition : '.4s',
                    position: 'absolute',
                    bottom: '11%',
                    left: '0%',
                    width: '25%',
                    opacity: 1,
                })
            },1000)
            setTimeout(()=>{
                $('.g_right1').css({
                    transition : '.4s',
                    position: 'absolute',
                    top: '4%',
                    right: '12%',
                    width: '23%',
                    opacity: 1,
                })
            },1500)
            setTimeout(()=>{
                $('.g_right2').css({
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

            // 흔들흔들 초기화
            $('.showpj').css({
                transition : 'none',
                opacity : 0
            })
            // 불릿 색칠 초기화
            $('.bullit li').css({
                backgroundColor : 'black'
            })
            // 프로젝트보러가기 버튼 css설정
            $('.showpj').css({
                position: 'absolute',
                bottom: '5%',
                zIndex: 1,
                left: '50%',
                transform: 'translateX(-50%)',
                padding:' 10px',
                cursor : 'pointer',
                color : 'white',
                fontWeight : 'bold',
                display : 'flex',
                flexDirection :'column',
                alignItems : 'center',
                gap : '13px'
            })
            $('.showpjimg').css({
                width : '40px',
                height : '40px'
            })
            $('.main_mainbx').css({
                transition : 'none',
                opacity : 0
                })
            
            // 화면에따른 애니메이션 초기화 값 저장공간
            if(w == 1){

                $('.a_left1').css({
                    transition : 'none',
                    position: 'absolute',
                    width: '20%',
                    top : '',
                    bottom: '10%',
                    zIndex : 1,
                    aspectRatio : 'auto',
                    opacity : 0

                })
                $('.a_left2').css({
                    transition : 'none',
                    position: 'absolute',
                    width: '20%',
                    top : '',
                    bottom: '10%',
                    left : '0%',
                    aspectRatio : 'auto',
                    opacity : 0
                })
                $('.a_right1').css({
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
                $('.a_right2').css({
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
                $('.b_left1').css({
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
                $('.b_left2').css({
                    transition : 'none',
                    position: 'absolute',
                    width: '0%',
                    height : 'auto',
                    bottom: '-1%',
                    left : '2%',
                    opacity : 0
                })
                $('.b_right1').css({
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
                $('.b_right2').css({
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
                $('.b_right3').css({
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
                // console.log('3화면')
                $('.main_mainbx').css({
                    opacity : 0
                })
            }
            if(w == 4){ 
                // console.log('4화면')
                $('.d_left1').css({
                    transition : 'none',
                    position : 'absolute',
                    top : '20%',
                    left : '0%',
                    width  : '20%',
                    opacity : 0,
                })
                $('.d_right1').css({
                    transition : 'none',
                    position : 'absolute',
                    top : '8%',
                    right : '0%',
                    width : '26%',
                    opacity : 0,
                })
                $('.d_right2').css({
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
                // console.log('5화면')
                $('.e_left1').css({
                    opacity : 1,
                    position : 'absolute',
                    top : '0%',
                    left : '15%',
                    width : '10%',
                    transform: 'translateY(-100%)'
                })
                $('.e_left2').css({
                    opacity : 1,
                    position : 'absolute',
                    top : '',
                    bottom : '-3%',
                    left : '-3%',
                    transform: 'translate(-100%,100%)',
                    width : '20%'
                })

                $('.e_right1').css({
                    opacity : 1,
                    position : 'absolute',
                    top : '8%',
                    right : '0%',
                    width : '35%',
                    transform: 'translateX(100%)'
                })
                $('.e_right2').css({
                    opacity : 1,
                    position : 'absolute',
                    bottom : '0%',
                    right : '10%',
                    width : '10%',
                    transform: 'translateY(100%)'
                })
                $('.e_right3').css({
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
                // console.log('6화면')
                $('.f_left1').css({
                    opacity : 1,
                    position : 'absolute',
                    top :'0%',
                    left : '21%',
                    width : '23%',
                    bottom : '',
                    transform : 'translateY(-100%)'
                })
                $('.f_left2').css({
                    opacity : 1,
                    position : 'absolute',
                    bottom :'3%',
                    left : '0%',
                    width : '16%',
                    transform : 'translateX(-100%)'
                })
                $('.f_right1').css({
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
                // console.log('7화면')
                $('.g_left1').css({
                    position: 'absolute',
                    bottom: '11%',
                    left: '0%',
                    width: '25%',
                    opacity: 0,
                })
                $('.g_right1').css({
                    position: 'absolute',
                    top: '4%',
                    right: '12%',
                    width: '23%',
                    opacity: 0,
                })
                $('.g_right2').css({
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

    useEffect(()=>{
        $('.main_mainbx').css({
            opacity : 0
        })
        $('.showpj').css({
            opacity : 0
        })
        setTimeout(()=>{
            $('.main_mainbx').css({
                transition : '1s',
                opacity : 1
            })
        },10)
        setTimeout(()=>{
            $('.showpj').css({
                transition : '1s',
                opacity : 1
            })
        },10)
    })
    useEffect(()=>{
        setTimeout(()=>{
            $('.main_mainbx').css({
                transition : '1s',
                opacity : 1
            })
            $('.showpj').css({
                transition : '1s',
                opacity : 1
            })
        },10)
    },[ab])

    return(
        <>
        {/* 코드구역 */}
        <section className='main_sec'>
            {
                w === 0 ?
                <img src='./images/bg3.jpg' />
                :
                <img src={copy[w - 1].isrc} />
            }
            {

                w === 0 &&
                ab.intro == 0 &&
                <>
                <div className='main_mainbx'>
                    <img src='./images/txt.png'/>
                </div>
                </>
            }
            {

                w === 0 &&
                ab.intro == 1 &&
                <>
                <div className='main_mainbx'>
                    <img src='./images/txt.png'/>
                </div>
                </>
            }
            {
                w == 1 &&
                <>
                <div className='main_mainbx'>
                    <div>
                        <img src={copy[w - 1].txt} />
                    </div>
                </div>
                    {
                        copy[w - 1].left1 != '' ?
                        <div className='a_left1'>
                            <img src={copy[w - 1].left1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left2 != '' ?
                        <div className='a_left2'>
                            <img src={copy[w - 1].left2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left3 != '' ?
                        <div className='a_left3'>
                            <img src={copy[w - 1].left3} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right1 != '' ?
                        <div className='a_right1'>
                            <img src={copy[w - 1].right1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right2 != '' ?
                        <div className='a_right2'>
                            <img src={copy[w - 1].right2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right3 != '' ?
                        <div className='a_right3'>
                            <img src={copy[w - 1].right3} />
                        </div>
                        : null
                    }
                </>
            }
            {
                w == 2 &&
                <>
                <div className='main_mainbx'>
                    <div>
                        <img src={copy[w - 1].txt} />
                    </div>
                </div>
                    {
                        copy[w - 1].left1 != '' ?
                        <div className='b_left1'>
                            <img src={copy[w - 1].left1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left2 != '' ?
                        <div className='b_left2'>
                            <img src={copy[w - 1].left2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left3 != '' ?
                        <div className='b_left3'>
                            <img src={copy[w - 1].left3} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right1 != '' ?
                        <div className='b_right1'>
                            <img src={copy[w - 1].right1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right2 != '' ?
                        <div className='b_right2'>
                            <img src={copy[w - 1].right2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right3 != '' ?
                        <div className='b_right3'>
                            <img src={copy[w - 1].right3} />
                        </div>
                        : null
                    }
                </>
            }
            {
                w == 3 &&
                <>
                <div className='main_mainbx'>
                    <div>
                        <img src={copy[w - 1].txt} />
                    </div>
                </div>
                    {
                        copy[w - 1].left1 != '' ?
                        <div className='c_left1'>
                            <img src={copy[w - 1].left1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left2 != '' ?
                        <div className='c_left2'>
                            <img src={copy[w - 1].left2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left3 != '' ?
                        <div className='c_left3'>
                            <img src={copy[w - 1].left3} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right1 != '' ?
                        <div className='c_right1'>
                            <img src={copy[w - 1].right1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right2 != '' ?
                        <div className='c_right2'>
                            <img src={copy[w - 1].right2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right3 != '' ?
                        <div className='c_right3'>
                            <img src={copy[w - 1].right3} />
                        </div>
                        : null
                    }
                </>
            }
            {
                w == 4 &&
                <>
                <div className='main_mainbx'>
                    <div>
                        <img src={copy[w - 1].txt} />
                    </div>
                </div>
                    {
                        copy[w - 1].left1 != '' ?
                        <div className='d_left1'>
                            <img src={copy[w - 1].left1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left2 != '' ?
                        <div className='d_left2'>
                            <img src={copy[w - 1].left2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left3 != '' ?
                        <div className='d_left3'>
                            <img src={copy[w - 1].left3} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right1 != '' ?
                        <div className='d_right1'>
                            <img src={copy[w - 1].right1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right2 != '' ?
                        <div className='d_right2'>
                            <img src={copy[w - 1].right2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right3 != '' ?
                        <div className='d_right3'>
                            <img src={copy[w - 1].right3} />
                        </div>
                        : null
                    }
                </>
            }

            {/* 디씨 */}
            {
                w == 5 &&
                <>
                <div className='main_mainbx'>
                    <div>
                        <img src={copy[w - 1].txt} />
                    </div>
                </div>
                    {
                        copy[w - 1].left1 != '' ?
                        <div className='e_left1'>
                            <img src={copy[w - 1].left1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left2 != '' ?
                        <div className='e_left2'>
                            <img src={copy[w - 1].left2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left3 != '' ?
                        <div className='e_left3'>
                            <img src={copy[w - 1].left3} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right1 != '' ?
                        <div className='e_right1'>
                            <img src={copy[w - 1].right1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right2 != '' ?
                        <div className='e_right2'>
                            <img src={copy[w - 1].right2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right3 != '' ?
                        <div className='e_right3'>
                            <img src={copy[w - 1].right3} />
                        </div>
                        : null
                    }
                </>
            }

            {/* 보구 */}
            {
                w == 6 &&
                <>
                <div className='main_mainbx'>
                    <div>
                        <img src={copy[w - 1].txt} />
                    </div>
                </div>
                    {
                        copy[w - 1].left1 != '' ?
                        <div className='f_left1'>
                            <img src={copy[w - 1].left1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left2 != '' ?
                        <div className='f_left2'>
                            <img src={copy[w - 1].left2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left3 != '' ?
                        <div className='f_left3'>
                            <img src={copy[w - 1].left3} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right1 != '' ?
                        <div className='f_right1'>
                            <img src={copy[w - 1].right1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right2 != '' ?
                        <div className='f_right2'>
                            <img src={copy[w - 1].right2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right3 != '' ?
                        <div className='f_right3'>
                            <img src={copy[w - 1].right3} />
                        </div>
                        : null
                    }
                </>
            }

            {/* 도깨비 */}
            {
                w == 7 &&
                <>
                <div className='main_mainbx'>
                    <div>
                        <img src={copy[w - 1].txt} />
                    </div>
                </div>
                    {
                        copy[w - 1].left1 != '' ?
                        <div className='g_left1'>
                            <img src={copy[w - 1].left1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left2 != '' ?
                        <div className='g_left2'>
                            <img src={copy[w - 1].left2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].left3 != '' ?
                        <div className='g_left3'>
                            <img src={copy[w - 1].left3} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right1 != '' ?
                        <div className='g_right1'>
                            <img src={copy[w - 1].right1} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right2 != '' ?
                        <div className='g_right2'>
                            <img src={copy[w - 1].right2} />
                        </div>
                        : null
                    }
                    {
                        copy[w - 1].right3 != '' ?
                        <div className='g_right3'>
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
                        ></li>
                    )
                }
            </ul>
            {/* 인디케이터 */}

            {/* 스크롤 이미지 */}
            {
                w == 0 ? 
                <div className='mit'>
                <img src='./images/scroll.png' />
                </div>
                :
                <div className="showpj"
                onClick={()=>{window.open(copy[w - 1].address)}}
                >
                    <div>{qwe}</div>
                    <div className="showpjimg">
                    <img src="./images/hand.png"/>
                    </div>
                    <div>{ewq}</div>
                </div>
            }
            {/* 스크롤 이미지 */}
        </section>
        
        </>
        
    )
};

export default Main;