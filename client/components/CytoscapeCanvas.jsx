import React from "react";
import cytoscape from "cytoscape";

class CytoscapeCanvas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderCytoscapeElement();
  }

  componentDidUpdate() {
    console.log("running componentDidUpdate() in cyto component");
  }

  renderCytoscapeElement() {
    console.log("Creating cytoscape graph...");

    this.cy = cytoscape({
      container: document.getElementById("cyto"),
      style: cytoscape
        .stylesheet()
        .selector("node")
        .css({
          height: 40,
          width: 40,
          "background-fit": "cover",
          "background-color": "#bbb",
          "border-color": "#000",
          "border-width": 1,
          "border-opacity": 0.5,
          content: "data(name)",
          label: "data(id)"
        })
        .selector("edge")
        .css({
          width: 4,
          "target-arrow-shape": "triangle",
          "line-color": "#ffaaaa",
          "target-arrow-color": "#ffaaaa",
          "curve-style": "bezier"
        }),
      elements: {
        nodes: [
          { data: { id: "A" } },
          { data: { id: "B" } },
          { data: { id: "C" } },
          { data: { id: "D" } },
          { data: { id: "E" } },
          { data: { id: "F" } }
        ],
        edges: [
          {
            data: {
              id: "AB",
              source: "A",
              target: "B"
            }
          },
          {
            data: {
              id: "CD",
              source: "C",
              target: "D"
            }
          },
          {
            data: {
              id: "EF",
              source: "E",
              target: "F"
            }
          },
          {
            data: {
              id: "AC",
              source: "A",
              target: "C"
            }
          },
          {
            data: {
              id: "BE",
              source: "B",
              target: "E"
            }
          }
        ]
      },
      layout: { name: "circle" }
    });

    console.log("graph created");

    console.log("setting graph to parent state");
    this.props.setGraph(this.cy);
  }

  render() {
    console.log("rendering Cyto Component!");
    return <div id="cyto" />;
  }
}

export default CytoscapeCanvas;
