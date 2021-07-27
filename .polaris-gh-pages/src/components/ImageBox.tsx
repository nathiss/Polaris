import { Grid } from '@material-ui/core';
import React from 'react';

import './ImageBox.scss';

import PhotoIcon from './photo-icon.svg';

import config from '../config.json';

interface ImageBoxProps {
    name: string;
    image: string;
    folderPath: string;
    iconStyle?: "dark" | "light";
}

class ImageBox extends React.Component<ImageBoxProps> {
    readonly ImageName: string|null = (() => {
        const trimmedName = this.props.name.trim();

        return trimmedName !== "" ?
            trimmedName :
            null;
    })();

    buildFolderUrl(folderName: string): string {
        return `${config.REPO_URL}/tree/${config.BRANCH}/${folderName}`;
    }

    render() {
        return (
            <Grid item sm={12} md={6}>
                <a href={this.buildFolderUrl(this.props.folderPath)} className="no-link image-link">
                    <div className="image-box">
                        <div className={`image-icon-box ${this.props.iconStyle === "light" ? "light" : "dark"}`}>
                            <img src={PhotoIcon} alt="Link" />
                            {this.ImageName !== null && <p>{this.ImageName}</p>}
                        </div>
                        <div className="image-border">
                            <img src={this.props.image} alt={this.props.name} />
                        </div>
                    </div>
                </a>
            </Grid>
        );
    }
}

export default ImageBox;
