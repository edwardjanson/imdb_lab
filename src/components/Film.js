const Film = ({filmObj}) => {

    return (
        <li><a href={filmObj.url}>{filmObj.title}</a></li>
    );
}

export default Film;