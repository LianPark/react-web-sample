import React from 'react';

const youtubeTag = [
  {name:"gsap"},
  {name:"hiphop"},
  {name:"dog"},
  {name:"cat"},
  {name:"music"},
  {name:"fifa"},
]

const YoutubeTag = ({onSearch}) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag score3">
        <ul>
          {youtubeTag.map((tag, index)=>(
            <button onClick={btnClick} key={index}>
              {tag.name}
            </button>
          ))}
        </ul>
      </div>
  );
};

export default YoutubeTag;
