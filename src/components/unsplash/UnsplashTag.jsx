import React from 'react';

const unsplashTag = [
  {name:"man"},
  {name:"hiphop"},
  {name:"dog"},
  {name:"cat"},
  {name:"music"},
  {name:"fifa"},
]

const UnsplashTag = ({onSearch}) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="unsplash__tag score3 container center">
        <ul>
          {unsplashTag.map((tag, index)=>(
            <button onClick={btnClick} key={index}>
              {tag.name}
            </button>
          ))}
        </ul>
      </div>
  );
};

export default UnsplashTag;

