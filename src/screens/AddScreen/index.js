import React, { Component } from 'react'
import { 
  Text, 
  View,
  TextInput,
  TouchableOpacity
 } from 'react-native'
import styles from './style'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Actions} from'react-native-router-flux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'

import {getBook, addNewBook, updateBook} from '../../store/book/book.actions'
import Header from '../../components/Header'

export class AddScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title:'',
      author:'',
      datePublished:'',
      numberOfPage:0,
      typeOfBook:'',
      imageUrl:'',
      isButtonEnable:false,
      isDateTimePickerVisible: false
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
    if(this.props.type === 'edit') {
      this.handleEditData(this.props)
    }
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
    setTimeout(() => this.handleCheckButton(), 1000)
  }

  renderField(title,value,desc,isNumber,isPicker) {
    console.log('renderField-------', this.state[value])
    return (
      <View style={{
        // flex:1,
        backgroundColor:'#fff',
        marginHorizontal:10,
        marginVertical:5
      }}>
        <View style={{backgroundColor:'#fff'}}>
          <Text style={styles.textTitleForm}>{title}</Text>
        </View>
        {
          isPicker ? (
          <TouchableOpacity style={styles.inputStyles}
          onPress={() => this.setState({isDateTimePickerVisible:!this.state.isDateTimePickerVisible})}
          >
            <Text>{this.state[value] ? this.state[value] : desc}</Text>
          </TouchableOpacity>)
        :(
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
        </View>)
        }
    </View>
    )
  }

  hanldeInput(stateName,input) {
    console.log(stateName,input)
    this.setState({
      [stateName]:input
    })
    setTimeout(() => this.handleCheckButton(), 1000)
  }

  async handleAddBook(){
    let input = {
      title: this.state.title,
      author: this.state.author,
      datePublished: this.state.datePublished,
      numberOfPage: this.state.numberOfPage,
      typeOfBook:this.state.typeOfBook,
      imageUrl:this.state.imageUrl
    }
    let response = await this.props.addNewBook(input)
    console.log('addbook---',response)
    if(response.status === 'success') {
      Actions.home()
    }
  }

  async handleUpdateBook(){
    let input = {
      id:this.props.data.id,
      title: this.state.title,
      author: this.state.author,
      datePublished: this.state.datePublished,
      numberOfPage: this.state.numberOfPage,
      typeOfBook:this.state.typeOfBook,
      imageUrl:this.state.imageUrl
    }
    let response = await this.props.updateBook(input, this.props.indexBook)
    console.log('handleupdate-----res----',response)
    if(response.status === 'updated') {
      Actions.home()
    }
  }

  handleCheckButton() {
    if (this.state.title !== '' && this.state.author !== '') {
      this.setState({
        isButtonEnable: true
      })
    } else {
      this.setState({
        isButtonEnable: false
      })
    }
  }

  handleSaveButton(){
    if (this.props.type === 'edit') {
      this.handleUpdateBook()
    }else {
      this.handleAddBook()
    }
  }

  handleDatePicked = date => {
    let pickedDate = moment(date).format("MMMM Do YYYY")
    console.log('date----', date,'---picked----', pickedDate)
    this.setState({
      isDateTimePickerVisible:false,
      datePublished: pickedDate.toString()
    })
  }

  render() {
    console.log('renderAddScreen---state-------',this.state,'---props---', this.props)
    return (
      <View style={{
        flex:1,
        backgroundColor:'#fff'
      }}>
        <Header 
        headerText={'Add Book'}
        isBackButton={true}
        backButtonPress={Actions.pop}
        />
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
            {this.renderField('Title *','title','book title...',false, false)}
            {this.renderField('Author *','author','author name...',false, false)}
            {this.renderField('Published Date','datePublished','pick a date',false, true)}
            {this.renderField('Number of Pages','numberOfPage','1',true, false)}
            {this.renderField('Type of Book / Genre','typeOfBook','romance',false, false)}
            {this.renderField('Image Url','imageUrl','http://myimage.png',false, false)}
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={() => this.setState({isDateTimePickerVisible:false})}
            />
            <TouchableOpacity style={{
              marginTop:20,
              marginHorizontal:10,
              paddingHorizontal:20,
              paddingVertical:10,
              backgroundColor:this.state.isButtonEnable ? '#16a085' : 'grey',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:5
            }}
            onPress={() => this.state.isButtonEnable ? this.handleSaveButton() : null}
            >
              <Text style={styles.textButton}>{this.props.type === 'edit'? 'Update Book':'Add Book'}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataBookList : state.books.bookList
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getBook,
  addNewBook,
  updateBook
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps) (AddScreen)
