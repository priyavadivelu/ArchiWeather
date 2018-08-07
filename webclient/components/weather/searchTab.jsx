import React from 'react';
import {Button,Icon} from 'semantic-ui-react'
import {Container} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'
import {Divider} from 'semantic-ui-react'

class searchTab extends React.Component {
    constructor() {
        super();
        this.state = {
            wcity: ""
        }
    }
    changecity(e)
    {
        this.setState({wcity: e.target.value});
    }

    searchWeather() {
        this.props.getWeatherFromQueryProp(this.state.wcity);
    }
    render() {
        return (
            <Container textAlign="center">
                <Input style={{textAlign:'center'}} focus placeholder='Search City' ref="wcity"
                onChange={this.changecity.bind(this)}/>&nbsp;&nbsp;&nbsp;
                <Button size='big' inverted color='blue' icon onClick={this.searchWeather.bind(this)}><Icon name='search' /></Button>
                
                   
            </Container>
        );
    }
}

export default searchTab;
