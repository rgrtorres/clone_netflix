import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png"></img>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-1318-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUCZYfPbupvQjzSa3egePk8TFNDy2A_w15DEAq50IqW8MYmOtmbWwN4Txem7mgNYEMPJ1BY6uasiIJQ8JeFO3EU.png?r=b97" alt=""></img>
                </a>
            </div>
        </header>
    );
}