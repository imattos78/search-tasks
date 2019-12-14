import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
       
        
    }
    render() {
        return (
            
              <ul>
                    {this.props.item.map(item =>(
                        <li key={item}>{item} &nbsp;
                            <span className="delete" onClick={() => this.props.removeItem(item)} />
                        </li>
                    ))}
               </ul>
            
        
        )
    }
}

export default List;