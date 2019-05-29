import React from "react";
import CytoscapeCanvas from "./CytoscapeCanvas.jsx";
import DataTable from "./DataTable.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.counter = 1;

    this.state = {
      cyGraph: "",
      number: 0
    };

    this.setStatetoCy = this.setStatetoCy.bind(this);
    this.addNode = this.addNode.bind(this);
    this.incCount = this.incCount.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextState", nextState);
    console.log("currState", this.state.cyGraph);
    return nextState.cyGraph === this.state.cyGraph;
  }

  setStatetoCy(cyGraph) {
    this.setState(
      {
        cyGraph: cyGraph
      },
      () => {
        console.log("graph set to state", this.state);
      }
    );
  }

  addNode() {
    console.log("adding Node");
    this.state.cyGraph.add({
      group: "nodes",
      data: { id: `hey${this.counter}` },
      position: { x: 200, y: 200 }
    });

    this.counter++;
  }

  incCount() {
    this.setState(
      {
        number: ++this.state.number
      },
      () => {
        console.log("increased count!", this.state);
      }
    );
  }

  render() {
    console.log("rendered App Component");
    return (
      <React.Fragment>
        <div id="appHeader">Joon's Cytoscape.js/React Demo</div>
        <DataTable number={this.state.number} incCount={this.incCount} />
        <CytoscapeCanvas setGraph={this.setStatetoCy} />
        <button onClick={this.addNode}>add node</button>
      </React.Fragment>
    );
  }
}

export default App;
