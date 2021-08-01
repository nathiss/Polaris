import React from "react";
import './Footer.scss';

import config from '../config.json';

class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <hr />
                <p>
                    &copy;
                    <a href={config['GITHUB_PROFILE_URL']}>Kamil Rusin</a>
                </p>
            </footer>
        );
    }
}

export default Footer;
