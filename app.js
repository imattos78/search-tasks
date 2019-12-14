import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import 'bulma/bulma'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                "Go to work",
                "Clean the house",
                "Learn some code stuff"
            ]
        }
    }
    render() {
        return (
            <div className="content">
                <div className="container">
                    <section className="section">
                        <ul>
                            {this.state.list.map(item =>(
                                <li key={item}>{item}</li>
                                ))}
                        </ul>
                    </section>
                    <hr />
                    <section className="section">
                        <form className="form" id="addItemForm">
                            <input type="text" className="input" id="addInput" placeholder="Something that needs to be done..." />
                            <button className="button is-info" onClick={this.addItem}>
                                Add Item
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))