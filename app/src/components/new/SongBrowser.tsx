import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const SongBrowser = () => {
    const { url } = useRouteMatch();

    return (
        <div className="SongBrowser">
            <div className="SongBrowser-song">
                <Link to="#">
                    <div className="SongBrowser-thumbnail"></div>
                    <div className="SongBrowser-name">Song 1</div>
                </Link>
            </div>

            <div className="SongBrowser-song">
                <Link to={`${url}/SelectMode`}>
                    <div
                        className="SongBrowser-thumbnail"
                        style={{
                            backgroundImage: "url(https://img.youtube.com/vi/_IkopJwRDKU/mqdefault.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                    <div className="SongBrowser-name">Gurenge - LiSA</div>
                </Link>
            </div>

            <div className="SongBrowser-song">
                <Link to="#">
                    <div className="SongBrowser-thumbnail"></div>
                    <div className="SongBrowser-name">Song 3</div>
                </Link>
            </div>

            <div className="SongBrowser-song">
                <div className="SongBrowser-thumbnail"></div>
                <Link to="#">Song 4</Link>
            </div>

            <div className="SongBrowser-song">
                <div className="SongBrowser-thumbnail"></div>
                <Link to="#">Song 5</Link>
            </div>

            <div className="SongBrowser-song">
                <div className="SongBrowser-thumbnail"></div>
                <Link to="#">Song 6</Link>
            </div>
        </div>
    );
};

export default SongBrowser;
