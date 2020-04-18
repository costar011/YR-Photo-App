import React from "react";
import "./styles/app.css";
import img1 from "./img/poto.jpg";
import img2 from "./img/poto1.jpg";
import img3 from "./img/poto2.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgPath: "",
      btnClickFlag: false
    };
  }
  render() {
    const { imgPath, btnClickFlag } = this.state;
    return (
      <div className="poto_box">
        <div className="poto_btn">
          <div>
            <input
              type="button"
              value="POTO"
              onClick={this._potoHandler}
            ></input>
          </div>

          <div>
            <input
              type="button"
              value="POTO1"
              onClick={this._potoHandler1}
            ></input>
          </div>

          <div>
            <input
              type="button"
              value="POTO2"
              onClick={this._potoHandler2}
            ></input>
          </div>
        </div>

        <div className="sc">
          {btnClickFlag ? <img src={imgPath} /> : <div>loading...</div>}
        </div>
      </div>
    );
  }

  _potoHandler = () => {
    this.setState({
      btnClickFlag: false
    });

    setTimeout(() => {
      this.setState({
        btnClickFlag: true
      });
    }, 2000);

    this.setState({
      imgPath: img1
    });
  };

  _potoHandler1 = () => {
    this.setState({
      btnClickFlag: false
    });

    setTimeout(() => {
      this.setState({
        btnClickFlag: true
      });
    }, 2000);

    this.setState({
      imgPath: img2
    });
  };

  _potoHandler2 = () => {
    this.setState({
      btnClickFlag: false
    });

    setTimeout(() => {
      this.setState({
        btnClickFlag: true
      });
    }, 2000);

    this.setState({
      imgPath: img3
    });
  };
}

export default App;
