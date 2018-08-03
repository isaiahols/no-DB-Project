import React, { Component } from "react";

import MakeList from "./MakeList/MakeList";


class JokeList extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <p>JokeList</p>
                <MakeList />
            </div>
        )
    }
};

export default JokeList;