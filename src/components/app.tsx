import * as React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export interface AppProps {}
export interface AppState {}

export class App extends React.Component<AppProps, {}> {
  render() {
    const images = [
      {
        original: "http://lorempixel.com/1000/600/nature/1/",
        thumbnail: "http://lorempixel.com/250/150/nature/1/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/2/",
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/3/",
        thumbnail: "http://lorempixel.com/250/150/nature/3/"
      }
    ];

    return (
      <div className="bg-grey-darkest w-full h-full font-sans flex flex-col">
        <div
          style={{ fontSize: "8vw" }}
          className="h-48 font-thin flex justify-center items-center p-1 text-white border-white border-b"
        >
          Fotoboxis
        </div>
        <ImageGallery items={images} />
      </div>
    );
  }
}
