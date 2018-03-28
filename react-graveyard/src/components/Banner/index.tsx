import * as React from 'react';
import { Carousel } from 'antd';

interface BannerProps {
    images: ReadonlyArray<any>;
    parseConfig?: any;
}
export default class Banner extends React.Component<BannerProps, any> {
    parseConfig = image => {
        return (
            <div key={image} style={{
                    width: '100vw',
                    height: '200px'
            }}>
                <img src={image} />
            </div>
        )
    }

    render() {
        let {
            images,
            parseConfig = this.parseConfig
        } = this.props;
        return (
            <Carousel autoplay>
               {images.map( image => parseConfig(image))}
            </Carousel>
        )
    }
}

