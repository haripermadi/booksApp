import React, { Component } from 'react'
import { Text, View, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import styles from './style'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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

  // static getDerivedStateFromProps(nextProps,prevProps) {
  //   console.log('getDerivedStateFromProps----', prevProps,'--next---',nextProps)
  //   if(prevProps.data !== nextProps.data) {
  //     return {    
  //       title:nextProps.data.title,
  //       author: nextProps.data.author,
  //       datePublished:nextProps.data.date_published,
  //       numberOfPage: nextProps.data.number_of_pages,
  //       typeOfBook: nextProps.data.type_of_book,
  //       imageUrl: nextProps.data.image_url
  //     }
  //   } else {
  //     return null
  //   }
  // }

  // UNSAFE_componentWillReceiveProps(nextProps){
  //   console.log('componentwillreceiveprops----',nextProps)
  //   this.handleEditData(nextProps)
  // }
  componentDidMount(){
    console.log('didmount----', this.props,'---state---', this.state)
    this.handleEditData(this.props)
  }
  
  handleEditData(nextProps) {
    this.setState({
      title:nextProps.data.title,
      author: nextProps.data.author,
      datePublished:nextProps.data.date_published,
      numberOfPage: nextProps.data.number_of_pages,
      typeOfBook: nextProps.data.type_of_book,
      imageUrl: nextProps.data.image_url,
    })
  }

  renderField(title,value,desc,isNumber) {
    console.log('renderField-------', this.state[value])
    return (
      <View style={{
        // flex:1,
        backgroundColor:'yellow',
        marginHorizontal:10,
        marginVertical:5
      }}>
        <View style={{backgroundColor:'#fff'}}>
          <Text style={styles.textTitleForm}>{title}</Text>
        </View>
        <View style={{
          backgroundColor:'#fff'
        }}>
          <TextInput
          style={styles.inputStyles}
          onChangeText={(text) => this.hanldeInput(value,text)}
          value={this.state[value].toString()}
          multiline={false}
          placeholder={desc}
          keyboardType={isNumber?'decimal-pad':'default'}
          defaultValue={'halo'}
        />
        </View>
    </View>
    )
  }

  hanldeInput(stateName,input) {
    console.log(stateName,input)
    this.setState({
      [stateName]:input
    })
  }

  render() {
    console.log('renderAddScreen---state-------',this.state,'---props---', this.props)
    return (
      <View style={{
        flex:1,
        backgroundColor:'#fff'
      }}>
        <KeyboardAwareScrollView>
          <View style={{
            flex:0,
            justifyContent:'center',
            alignItems:'center',
            marginVertical:10,
            flexDirection:'row'
          }}>
            <Text style={styles.textTitle}>Add New Book</Text>
            <Icon name={'book-open-page-variant'} color={'#16a085'} size={25} />
          </View>
          <View style={{flex:1}}>
            {this.renderField('Title *','title','book title...',false)}
            {this.renderField('Author *','author','author name...',false)}
            {this.renderField('Published Date','datePublished','date...',false)}
            {this.renderField('Number of Pages','numberOfPage','1',true)}
            {this.renderField('Type of Book / Genre','typeOfBook','romance',false)}
            {this.renderField('Image Url','imageUrl','http://myimage.png',false)}
            <TouchableOpacity style={{
              marginTop:20,
              marginHorizontal:10,
              paddingHorizontal:20,
              paddingVertical:10,
              backgroundColor:'#16a085',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:5
            }}>
              <Text style={styles.textButton}>Add Book</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default AddScreen
