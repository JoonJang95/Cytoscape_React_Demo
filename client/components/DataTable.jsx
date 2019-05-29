import React from "react";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("rendering dataTable Component");

    return (
      <div id="dataTable">
        <table>
          <tbody>
            <tr>
              <th>UserId</th>
              <th>Classification</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
            <tr>
              <td>Alfred Futterrkiste</td>
              <td>Sender</td>
              <td>Message 1</td>
              <td>5/23/19</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Sender</td>
              <td>Message 2</td>
              <td>5/21/19</td>
            </tr>
            <tr>
              <td>Maria Anders</td>
              <td>Receiver</td>
              <td>Message 3</td>
              <td>8/29/19</td>
            </tr>
            <tr>
              <td>Roland Mendel</td>
              <td>Sender</td>
              <td>Message 4</td>
              <td>10/21/19</td>
            </tr>
            <tr>
              <td>Yoshi Tannamuri</td>
              <td>Receiver</td>
              <td>Message 5</td>
              <td>9/28/19</td>
            </tr>
            <tr>
              <td>Francisco Chang</td>
              <td>Sender</td>
              <td>Message 6</td>
              <td>7/26/19</td>
            </tr>
            <tr>
              <td>Yoshi Tannamuri</td>
              <td>Receiver</td>
              <td>Message 5</td>
              <td>9/28/19</td>
            </tr>
            <tr>
              <td>Maria Anders</td>
              <td>Receiver</td>
              <td>Message 3</td>
              <td>8/29/19</td>
            </tr>
            <tr>
              <td>Alfred Futterrkiste</td>
              <td>Sender</td>
              <td>Message 1</td>
              <td>5/23/19</td>
            </tr>
            <tr>
              <td>Francisco Chang</td>
              <td>Sender</td>
              <td>Message 6</td>
              <td>7/26/19</td>
            </tr>
            <tr>
              <td>Maria Anders</td>
              <td>Receiver</td>
              <td>Message 3</td>
              <td>8/29/19</td>
            </tr>
            <tr>
              <td>Roland Mendel</td>
              <td>Sender</td>
              <td>Message 4</td>
              <td>10/21/19</td>
            </tr>
            <tr>
              <td>Maria Anders</td>
              <td>Receiver</td>
              <td>Message 3</td>
              <td>8/29/19</td>
            </tr>
            <tr>
              <td>Yoshi Tannamuri</td>
              <td>Receiver</td>
              <td>Message 5</td>
              <td>9/28/19</td>
            </tr>
            <tr>
              <td>Maria Anders</td>
              <td>Receiver</td>
              <td>Message 3</td>
              <td>8/29/19</td>
            </tr>
            <tr>
              <td>Alfred Futterrkiste</td>
              <td>Sender</td>
              <td>Message 1</td>
              <td>5/23/19</td>
            </tr>
            <tr>
              <td>Roland Mendel</td>
              <td>Sender</td>
              <td>Message 4</td>
              <td>10/21/19</td>
            </tr>
            <tr>
              <td>Maria Anders</td>
              <td>Receiver</td>
              <td>Message 3</td>
              <td>8/29/19</td>
            </tr>
            <tr>
              <td>Yoshi Tannamuri</td>
              <td>Receiver</td>
              <td>Message 5</td>
              <td>9/28/19</td>
            </tr>
            <tr>
              <td>Maria Anders</td>
              <td>Receiver</td>
              <td>Message 3</td>
              <td>8/29/19</td>
            </tr>
            <tr>
              <td>Alfred Futterrkiste</td>
              <td>Sender</td>
              <td>Message 1</td>
              <td>5/23/19</td>
            </tr>
            <tr>
              <td>Francisco Chang</td>
              <td>Sender</td>
              <td>Message 6</td>
              <td>7/26/19</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <div>Number: {this.props.number}</div>
        <button className="numCounter" onClick={this.props.incCount}>
          Inc number Count
        </button>
      </div>
    );
  }
}

export default DataTable;
