import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeSlider from "../youtube/YoutubeSlider";
import YoutubeTag from "../youtube/YoutubeTag";
import YoutubeCont from "../youtube/YoutubeCont";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);
  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=AIzaSyBTyYekqKdJKfjwf6aUYLwTbtRLG_jR2H8`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=프로그래머&key=AIzaSyBmD-yNiyzU1muLrsF_Gg7FKf5HgyXfxlo",
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=프로그래머&key=AIzaSyBTyYekqKdJKfjwf6aUYLwTbtRLG_jR2H8"
    )
      .then((response) => response.json())
      .then((result) => { 
        console.log(result);
        setYoutubes(result.items)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="youtube" />
        <YoutubeSlider youtubes={youtubes} />
        <YoutubeSearch onSearch={search} />
        <YoutubeTag onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
      </Contents>
    </>
  );
};

export default Youtube;
