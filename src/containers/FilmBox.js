import { useState } from "react";
import "./FilmBox.css";
import Header from "../components/Header";
import FilmList from "../components/FilmList";
import Releases from "../components/Releases";

const FilmBox = () => {

    const [films, setFilms] = useState([
        {id: 1, title: "Violent Night", url:"https://www.imdb.com/title/tt12003946/"},
        {id: 2, title: "The Infernal Machine", url:"https://www.imdb.com/title/tt15275256/"},
        {id: 3, title: "India Sweets & Spice", url:"https://www.imdb.com/title/tt9896876/"},
        {id: 4, title: "The Silent Twins", url:"https://www.imdb.com/title/tt11052678/"}
    ]);
    const [header, setHeader] = useState("Upcoming Film Releases for UK");
    const [releasesLink, setReleasesLink] = useState("https://www.imdb.com/calendar/?region=gb")

    return (
        <div className="film-box">
            <Header header={header}/>
            <hr></hr>
            <FilmList films={films}/>
            <hr></hr>
            <Releases releases={releasesLink}/>
        </div>
    );
}

export default FilmBox;