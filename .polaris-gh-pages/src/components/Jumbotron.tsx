import React from 'react';
import './Jumbotron.scss';

class Jumbotron extends React.Component {
    render() {
        return (
            <header className="site-header">
                <h1>Polaris</h1>
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