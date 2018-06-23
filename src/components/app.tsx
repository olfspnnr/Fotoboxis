import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import { getImages } from "./appLogix";

export interface AppProps {}
export interface AppState {
  currentImages: any[];
  loading: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  componentDidMount() {
    let Images = getImages().then((images: any[]) => {
      this.setState({
        currentImages: images,
        loading: true
      });
    });
  }

  render() {
    return (
      <div className="bg-black w-full h-screen font-sans flex flex-col">
        {!this.state && <div className="text-5xl flex flex-1 justify-center">Lade Daten</div>}
        {this.state && (
          <div className="h-6 text-md flex flex-row items-center pl-4  border-grey-darkest border-b z-20">
            <span className="font-thin text-white text-md">Fotoboxis</span>
          </div>
        )}
        {this.state &&
          (this.state.currentImages === undefined || this.state.loading) && (
            <div className="flex h-4 text-xs mt-6 w-full justify-start font-thin text-white pin-t absolute items-center z-10 px-4 bg-grey-darkest opacity-75">
              <span>Verarbeite 1202 weitere Bilder...</span>
            </div>
          )}
        {this.state &&
          this.state.currentImages && (
            <div className="flex flex-1 justify-center items-center">
              <Carousel
                infiniteLoop={true}
                showArrows={true}
                className="flex flex-col justify-center items-center h-full flex-1"
                showThumbs={false}
              >
                {this.state.currentImages.map(pic => (
                  <div key={pic} className="h-full flex ">
                    <img key={pic} className="h-screen" style={{ objectFit: "contain" }} src={pic.url} alt="Kitty" />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
      </div>
    );
  }
}
