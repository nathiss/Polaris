import { Box } from '@material-ui/core';
import React from 'react';
import LazyLoad from 'react-lazyload';
import './Jumbotron.scss';

import BrandImage from '../images/brand-512x512.png';

class Jumbotron extends React.Component {
    render() {
        return (
            <header className="site-header">
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <LazyLoad once>
                        <img className="brand-image" src={BrandImage} alt="Brand" />
                    </LazyLoad>
                    <h1 className="disable-select">Polaris</h1>
                </Box>

                <small>
                    A vector graphics gallery. View on<span> </span>
                    <a href="https://github.com/nathiss/Polaris">GitHub</a>.
                </small>
                <hr />
            </header>
        );
    }
}

export default Jumbotron;