
import React from 'react'

const withColorChange = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                color: 'black',
            }
        }
        handleColorChange = () => {
            const newColor = this.state.color === 'black' ? 'blue': 'black'
            this.setState({color: newColor});
        }
        render() {
            return (
                <div style={{ color: this.state.color}}> 
                    <WrappedComponent 
                        {...this.props}
                        handleColorChange = {this.handleColorChange}
                    />
                </div>
            )
        }
    }
}

export default withColorChange