import React from "react";

const Intro = () => {
    return (
        <div className="intro__page container">
            <div className="intro__tennis">
                <div className="tennis__img"></div>
            </div>
            <div className="tennis__info">
            <h3>테니스란?</h3>
            <p>
테니스는 두 명 또는 네 명의 선수가 서로 경기를 벌이는 실내 또는 야외에서 플레이하는 스포츠입니다. <br />테니스는 각각의 선수가 라켓을 사용하여 작은 공을 네트를 넘겨 상대방에게 반격하며 점수를 얻는 게임입니다. 
            </p>
            </div>
            <h3>기본규칙 & 경기방식</h3>
            <div className="court">
                <div className="court__img"></div>
                <div className="court__info">
                    <h4>코트와 네트</h4>
                    <p>
                    테니스 경기는 사각형 모양의 코트에서 진행됩니다. 코트는 길이 23.77m, 폭 8.23m로 정해져 있습니다.
코트를 가로지르는 중앙에는 테니스 네트가 있습니다. 넷은 중앙에서 높이 91.4cm로 설치되어 있습니다.
                    </p>
                </div>
            </div>
            <div className="serve">
                <div className="serve__info">
                <h4>서브</h4>
                    <p>
                    경기 시작 시, 선수는 각자의 베이스라인 뒤에서 서브를 합니다. 서브는 공을 상대 편 코트 반대쪽으로 넘겨야 하는 첫 번째 공격입니다.
서브는 네트를 넘어야 하며, 상대방은 서브를 받아 반격해야 합니다.
                    </p>
                </div>
                <div className="serve__img"></div>
            </div>
            <div className="rally">
                <div className="rally__img"></div>
                <div className="rally__info">
                <h4>랠리</h4>
                    <p>
                    경기에서는 랠리(공을 반복해서 넘기는 것)를 통해 점수를 얻습니다. 각각의 선수는 라켓을 사용하여 상대방이 보내는 공을 넘기려고 노력합니다.
한 선수가 공을 넘기지 못하거나 넷을 넘어가지 않으면 상대방에게 포인트가 주어집니다.
                    </p>
                </div>
            </div>
            <div className="score">
                <div className="score__info">
                <h4>점수</h4>
                    <p>
                    테니스에서는 15, 30, 40, 게임, 세트, 매치와 같은 점수 체계를 사용합니다.
게임은 한 선수가 4점을 먼저 획득하면 이기는 것으로, 각각의 점수는 0, 15, 30, 40로 표기됩니다. 만약 양 선수가 동점인 경우에는 "데우스"라고 불리는 추가 점수를 통해 승부를 가립니다.
                    </p>
                </div>
                <div className="score__img"></div>
            </div>
            <div className="game">
                <div className="game__img"></div>
                <div className="game__info">
                <h4>게임</h4>
                    <p>
                    게임은 한 선수가 6게임을 이기면 이기는 것으로, 동점인 경우 "데우스"를 통해 결정합니다.
세트는 일반적으로 6게임을 먼저 이긴 선수가 세트를 획득하며, 일정한 세트 수를 이기는 것으로
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Intro;
