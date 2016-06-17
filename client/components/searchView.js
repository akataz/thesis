import React, { Component, View, TextInput } from 'react-native';

export default class SearchComponent extends Component {
  
  constructor() {
    super(props);
    this.state({
      search: '',
      location: ''  
    })
  }
  
  render() {
    
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.search}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(location) => this.setState({location})}
          value={this.state.location}
        />
      </View>
    );
  }
}



