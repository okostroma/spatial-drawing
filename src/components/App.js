import React, {useEffect} from "react";
import './App.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {setData} from "../actions";
import Map from "./Map/Map";

class App extends React.Component {
    componentDidMount() {
        this.props.setData()
    }

    render() {

    return (
        <div className="App">
          <Map data={this.props.data}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        data: state.appReducer.data
    }
}

export default connect(mapStateToProps, {setData})(App);
