import "./Releases.css";

const Releases = ({releases}) => {

    return (
        <a href={releases}><button type="button">View more upcoming releases</button></a>
    );
}

export default Releases;