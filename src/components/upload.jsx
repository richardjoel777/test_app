import React, { Component } from "react";
import CSVReader from "react-csv-reader";

class Upload extends Component {
  state = {
    fileData: {},
  };

  render() {
    return (
      <div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submitted");
            }}
          >
            <CSVReader
              onFileLoaded={(data, fileInfo) => console.log(data)}
              onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Upload;
