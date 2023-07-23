import $ from "jquery";
import "./css/intro.css";
import { useDispatch, useSelector } from 'react-redux'
import { changeIntro } from '../store.js';
import { useEffect, useState } from 'react';


// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{
    }); // JQB // 
} // jqFn 함수 //

function Intro(props){

    let ab = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    useEffect(()=>{
            $('.introbx').css({
                transition : '1s',
                
            })
            setTimeout(()=>{
                $('.introbx').css({
                    opacity : 1
                    
                })
            })
    },[])
    return(
        <>
        <div className='introwrap'>
            {/* <img src='./images/bg3.jpg' /> */}
            <div className='introbx'>
                <h1 style={{textAlign : 'center'}}>김동호의 포트폴리오</h1>
                <div className='intro_rmimgbx'>
                    <img src='./../images/test.png'/>
                <button
                className='intro_btn'
                onMouseOver={()=>{
                    $('.intro_btn').css({
                        transition : '.4s',
                        color : 'white',
                        backgroundColor : 'black',
                        borderColor : 'white'
                    })
                }} 
                onMouseLeave={()=>{
                    $('.intro_btn').css({
                        transition : '.4s',
                        color : 'black',
                        backgroundColor : 'transparent',
                        borderColor : 'black'
                    })
                }} 
                onClick={()=>{
                    dispatch(changeIntro())}}>Show portfolio</button>
                </div>
            </div>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </div>
        </>
        
    )
};

export default Intro;