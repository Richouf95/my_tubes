import React, { useState } from "react";
import LogoTube from '../logoYoutube.png'
import Config from "./Config";

let response;
let getVideos;
let show;

const Tubes = () => {

    const [state, setState] = useState();

    const [searchKey, setSearchKey] = useState('');

    const [videoSelected, setVideoSelected] = useState('');
   
    const hangleClique = async (e) => {
        e.preventDefault();
        response = await Config.get('/search', {
            params: {
                q: searchKey
            }
        })

        getVideos = await response.data.items;

        setState({
            getVideos
        })

        show = getVideos.map((item, index) => {
            return(
                <div key={index} >
                    <div className="card" style={{width: '18rem', margin: '20px'}}>
                        <img src={item.snippet.thumbnails.medium.url} className="card-img-top" alt="tube" onClick={() => {
                            const xxx = `http://www.youtube.com/embed/${item.id.videoId}`;
                            setVideoSelected(xxx);
                        }} />
                        <div className="card-body">
                            <h1 style={{fontSize: '1em', fontWeight: 'bold'}}>{item.snippet.title}</h1>
                            <p style={{fontSize: '0.8em'}} className="card-text">{item.snippet.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const choix = videoSelected ? (
        <iframe id="player" type="text/html" width="640" height="360"
            src={videoSelected}
            frameBorder="0" allow="autoplay">
        </iframe>
    ) : ('');
    
    return (
        <div className="container mt-5">
            <div className="mb-5">
                <img src={LogoTube} alt='Logo' style={{width: '200px'}} />
            </div>
            <div className="searchInputs">
                <form>
                    <input type='text' className="form-control w-50 m-auto" onChange={(e) => {setSearchKey(e.target.value)}} />
                    <button className="btn btn-danger mt-3" onClick={hangleClique}>Serach</button>
                </form>
            </div>
            <div className="row mt-5">
                <div className="col-8">
                    {choix}
                </div>
                <div className="col-4 rendu">
                    {show}
                </div>
            </div>
        </div>
    )
}

export default Tubes;