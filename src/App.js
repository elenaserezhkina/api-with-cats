import React from "react";
import GifsList from "./Components/GifsList";
// const gifs = [
//   {
//     img:
//       "https://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/10/lol-cat.jpg",
//     title: "Image One"
//   },
//   {
//     img:
//       "https://yearinreview.rplechnercpa.com/rbinternet/images/cookielolcat2.jpg",
//     title: "Image Two"
//   }
// ];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }
  componentDidMount() {
    // fetch API
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=FAq8B6u5HNIxDEBAJDUcNvqHQ0PAObZS&q=birthday cats&limit=28&offset=0&rating=G&lang=en"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          // isLoaded: true,
          gifs: result.data
        });
        console.log(result);
        console.log(result.data[1].images.downsized_large.url);
      });
  }
  render() {
    const { gifs } = this.state;
    return (
      <div>
        <h1>С Днем Рождения Надин!</h1>
        <GifsList gifs={gifs} />
      </div>
    );
  }
}

export default App;
