import { Grid } from '@material-ui/core';
import './App.scss';

import Jumbotron from './components/Jumbotron';
import ImageBox from './components/ImageBox';
import Footer from './components/Footer';

import Tumbleweed from './images/tumbleweed-1920x1080.png';
import Bulbs from './images/bulbs-1920x1080.png';
import PlantPots from './images/plant-pots-1920x1080.png';
import Planet from './images/planet-1920x1080.png';
import SteamOnTheHorizon from './images/steam-on-the-horizon-1920x1080.png';

function App() {
    return (
        <div className="App">
            <Jumbotron />

            <Grid className="image-container" container
                columnSpacing={3} rowSpacing={{sm:2, md: 4}}
                justifyContent="center">

                <ImageBox name="Tumbleweed"
                    image={Tumbleweed}
                    folderPath="Tumbleweed" />

                <ImageBox name="Bulbs"
                    image={Bulbs}
                    folderPath="Bulbs" />

                <ImageBox name="PlantPots"
                    image={PlantPots}
                    folderPath="Plant-Pots" />

                <ImageBox name="Planet"
                    image={Planet}
                    folderPath="Planet"
                    iconStyle="light" />

                <ImageBox name="Steam on the horizon"
                    image={SteamOnTheHorizon}
                    folderPath="Steam-on-the-horizon"
                    md={7} />

            </Grid>

            <Footer />
        </div>
    );
}

export default App;
