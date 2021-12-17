import React, { Component } from "react";
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from "../mapChooser";
import axios from "axios";

class StoreLocator extends Component {
    shops = [{
        "location": "Portland",
        "address" : "123 Portland Dr"
    }, {
        "location": "Astoria",
        "address" : "123 Astoria Dr"
    }, {
        "location": "",
        "address" : ""
    }];

    constructor(props) {
        super(props);

        this.state = {
            currentMap: "none.png",
            shops: []
        };

        this.setState(() => {
            return {shops: this.shops}
        });

        this.chooseMap = this.chooseMap.bind(this);
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    {this.shops.map((shop, index) =>
                        <Button handleClick={this.chooseMap} key={index} location={shop.location} address={shop.address} />
                    )}
                </div>
                <Map imagename={this.state.currentMap} location={this.props.location} />
            </div>
        );
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:3000/data/shops.json'); //.catch((error) => {
            // if (error.response) {
            //     // The request was made and the server responded with a status code
            //     // that falls out of the range of 2xx
            //     console.log(error.response.data);
            //     console.log(error.response.status);
            //     console.log(error.response.headers);
            //   } else if (error.request) {
            //     // The request was made but no response was received
            //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //     // http.ClientRequest in node.js
            //     console.log(error.request);
            //   } else {
            //     // Something happened in setting up the request that triggered an Error
            //     console.log('Error', error.message);
            //   }
            //   console.log(error.config);
        //});

        if (response) {
            this.setState(() => {
                return {shops: response.data}
            });
        }
    }

    chooseMap = (e) => {
        this.setState({
            currentMap: mapChooser(e.target.value)
        });
    }
}

export default StoreLocator