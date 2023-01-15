import React from 'react';
import "./Error.css";
import { routes } from '../utils/constants/routes';
import { useNavigate } from "react-router-dom";

function Error() {
    const Navigate = useNavigate();

    return (
        <div className="mtb-40">
            <div className="container">
                <div className="error-404">
                    <h1>404</h1>
                    <h2>There is nothing here!</h2>
                    <p>Sorry, the page you were looking for in this app does not exist.</p>
                    <button type="button" color="success" shape="round" onClick={() => {
                        Navigate(routes.Crud);
                    }}> Go Back </button>
                </div>
            </div>
        </div>
    )
}

export default Error
