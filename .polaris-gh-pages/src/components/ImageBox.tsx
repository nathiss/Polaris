import { Grid, GridSize } from '@material-ui/core';
import React, { FC } from 'react';
import LazyLoad from 'react-lazyload';

import './ImageBox.scss';

import PhotoIcon from './photo-icon.svg';
import PhotoIconLight from './photo-icon-light.svg';

import config from '../config.json';

interface ImageProps {
    src: string;
    alt: string;
}

const Image: FC<ImageProps> = ({ src, alt }) => {
    return (
        <LazyLoad once>
            <img className="main-image" src={src} alt={alt} />
        </LazyLoad>
    );
};

interface ImageBoxProps {
    name: string;
    image: string;
    folderPath: string;
    iconStyle?: "dark" | "light";
    sm?: GridSize;
    md?: GridSize;
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

    getPhotoIcon() {
        return (this.props.iconStyle ?? "dark") === "dark" ?
            PhotoIcon :
            PhotoIconLight;
    }

    render() {
        return (
            <Grid item sm={this.props.sm ?? 12} md={this.props.md ?? 6}>
                <a href={this.buildFolderUrl(this.props.folderPath)} className="no-link image-link">
                    <div className="image-box">
                        <div className={`image-icon-box ${this.props.iconStyle === "light" ? "light" : "dark"}`}>
                            <img src={this.getPhotoIcon()} alt="Link" />
                            {this.ImageName !== null && <p className={this.props.iconStyle ?? "dark"}>{this.ImageName}</p>}
                        </div>
                        <div className="image-border">
                            <Image src={this.props.image} alt={this.props.name} />
                        </div>
                    </div>
                </a>
            </Grid>
        );
    }
}

export default ImageBox;
