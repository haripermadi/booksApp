import React, { Component } from 'react'
import { Text, View, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import styles from './style'

export class AddScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title:'',
      author:'',
      datePublished:'',
      numberOfPage:0,
      typeOfBook:'',
      imageUrl:''
    }
  }

  renderField(title,value,desc,isNumber) {
    return (
      <View style={{
        // flex:1,
        backgroundColor:'yellow',
        marginHorizontal:10,
        marginVertical:5
      }}>
        <View style={{backgroundColor:'pink'}}>
          <Text>{title}</Text>
        </View>
        <View style={{
          backgroundColor:'lime'
        }}>
          <TextInput
          style={styles.inputStyles}
          onChangeText={(text) => this.setState({[value]:text})}
          value={this.state[value]}
          multiline={false}
          placeholder={desc}
          keyboardType={isNumber?'decimal-pad':'default'}
        />
        </View>
    </View>
    )
  }

  render() {
    console.log('renderAddScreen---state-------',this.state)
    return (
      <View style={{
        flex:1,
        backgroundColor:'#fff'
      }}>
        <View style={{flex:0,backgroundColor:'red', justifyContent:'center',alignItems:'center'}}>
          <Text>Add New Book</Text>
        </View>
        <View style={{flex:1}}>
        {this.renderField('Title','title','book title...',false)}
        {this.renderField('Author','author','author name...',false)}
        {this.renderField('Published Date','datePublished','date...',false)}
        {this.renderField('Number of Pages','numberOfPage','1',true)}
        {this.renderField('Type of Book / Genre','typeOfBook','romance',false)}
        {this.renderField('Image Url','imageUrl','http://myimage.png',false)}
        <TouchableOpacity style={{
          // flex:1,
          marginTop:20,
          marginHorizontal:10,
          paddingHorizontal:20,
          paddingVertical:10,
          backgroundColor:'orange',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:5
        }}>
          <Text>Add Book</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default AddScreen
