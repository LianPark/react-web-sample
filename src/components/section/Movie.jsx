import React from "react";
const movieItem = [
    {
        img: "../../assets/images/movie/movies01.png",
        title: "d",
        num: "dkelkt442",
    },
    {
        img: "../../assets/images/movie/movies02.png",
        title: " ",
        num: "dkelkt442",
    },
    {
        img: "../../assets/images/movie/movies03.png",
        title: " ",
        num: "dkelkt442",
    },
    {
        img: "../../assets/images/movie/movies04.png",
        title: " ",
        num: "dkelkt442",
    },
    {
        img: "../../assets/images/movie/movies05.png",
        title: " ",
        num: "dkelkt442",
    },
    {
        img: "../../assets/images/movie/movies01.png",
        title: " ",
        num: "dkelkt442",
    },
];

function MovieDesc({ img, num, title }) {
    return (
        <div>
            <img src={img} alt=" " />
        </div>
    );
}

function MovieSection(props) {
    return (
        <section id="moviesSection" className={props.attr}>
            <div className="movies__inner container ">
                <div className="movies__text">
                    <h3>테니스 관련 추천 영화</h3>
                </div>
                <div className="movies__item">
                    {movieItem.map((text, index) => (
                        <MovieDesc key={index} img={text.img}
                        title={text.title}
                        num={text.num}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default MovieSection;
