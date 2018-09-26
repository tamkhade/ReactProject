import React from 'react';
import Header from '../baselayout/header';
import TextField from '@material-ui/core/TextField';

class Medicine extends React.Component {
    constructor(){
        super()
    this.state = {
        medicineName: ''
      };
    }

    handleChange = name => event => {
        this.setState({
          medicineName: event.target.value,
        });
        alert(this.state.medicineName)
      };

    render() {
        
        return (
            <div>
                <Header />
                <div>
                    <TextField
                        id="standard-name"
                        label="MedicineName"
                        placeholder="please enter medicine name"
                        value="sbdb"
                        onClick={this.handleChange('name')}
                        margin="normal"
                    />
                </div>

            </div>
        );
    }

} export default Medicine