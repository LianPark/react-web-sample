import React from "react";

const youtubeItem = [
    {
        img: "../../assets/images/youtube/y01.png",
        title: "2023 롤랑가로스 결승",
        num: "dkelkt442",
    },
    {
        img: "../../assets/images/youtube/y02.png",
        title: "포핸드 배우기!",
        num: "dkelkt442",
    },
    {
        img: "../../assets/images/youtube/y03.png",
        title: "포핸드 잘치는 방법",
        num: "dkelkt442",
    },
    {
        img: "../../assets/images/youtube/y04.png",
        title: "피니쉬 동작?",
        num: "dkelkt442",
    },
];

function YoutubeDesc({ img, num, title }) {
    return (
        <div>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{num}</p>
        </div>
    );
}

function YoutubeSection(props) {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>테니스 유튜브</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                        <br />
                        구독과 좋아요! 부탁드립니다.
                    </p>
                    <a href="https://www.youtube.com/results?search_query=%ED%85%8C%EB%8B%88%EC%8A%A4">자세히 보기</a>
                </div>
                <div className="youtube__item">
                    {youtubeItem.map((text, index) => (
                        <YoutubeDesc
                            key={index}
                            img={text.img}
                            title={text.title}
                            num={text.titlnume}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default YoutubeSection;
