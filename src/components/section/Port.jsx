import React from 'react';
import {Link} from 'react-router-dom'


const portText = [
    {
        Img: '../../assets/images/port/image 11.png',
        icImg: '../../assets/images/port/head.png',
        title: '익스트림 TOUR 2022',
        desc: '헤드',
    },
    {
        Img: '../../assets/images/port/image 7.png',
        icImg: '../../assets/images/port/wilson.png',
        title: '윌슨 테니스라켓 블레이드26 BLADE26 V8 WR079210U 그린 255g',
        desc: '윌슨',
    },
    {
        Img: '../../assets/images/port/image 10.png',
        icImg: '../../assets/images/port/head.png',
        title: 'Q PLUS 15 BLUE V3 프로케넥스테니스라켓 G3',
        desc: '헤드',
    },
    {
        Img: '../../assets/images/port/image 9.png',
        icImg: '../../assets/images/port/babol.png',
        title: 'BOOST RAFA U CV 바볼랏테니스라켓 G2',
        desc: '바볼랏',
    },
    {
        Img: '../../assets/images/port/image 6.png',
        icImg: '../../assets/images/port/wilson.png',
        title: 'BLX FIERCE RKT 윌슨테니스라켓 G2',
        desc: '윌슨',
    },
    {
        Img: '../../assets/images/port/image 8.png',
        icImg: '../../assets/images/port/babol.png',
        title: 'TF X1 285 테크니화이버테니스라켓 G2',
        desc: '바볼랏',
    },
];

function PortDesc({portImg, iconImg, title, desc}) {
    return (
        <div className="port">
            <figure className="port__header">
                <img src={portImg} alt="색을 고르는 법" />
            </figure>
            <div className="port__body">
                <span className="pic">
                    <img src={iconImg} alt="/" />
                </span>
                <div className="title">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}

function Port(props) {
    return (
        <section id="portSection" className={props.attr}>
            <h3>라켓 소개</h3>
            <div className="port__inner container">
                <div className="port__btn">
                    <Link to="/">윌슨</Link>
                    <Link to="/">바볼랏</Link>
                    <Link to="/">헤드</Link>
                    <Link to="/">요넥스</Link>
                </div>
                <div className="port__cont">
                    {portText.map((text, index) => (
                        <PortDesc
                            key={index}
                            portImg = {text.Img}
                            iconImg = {text.icImg}
                            title ={ text.title}
                            desc = {text.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Port;
