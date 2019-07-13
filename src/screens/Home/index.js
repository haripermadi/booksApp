import React, { Component } from 'react'
import { Text, View, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import styles from './style'
import Cards from '../../components/Cards'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Actions} from 'react-native-router-flux'

import Header from '../../components/Header'
import dataRaw from '../data'

export class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataBook:[],
      search: '',
    }
  }

  componentDidMount () {
    this.initData()
  }
  
  initData() {
    this.setState({
      dataBook:dataRaw,
    })
  }

  renderSearch() {
    return (
      <View style={styles.containerSearch}>
        <View style={{flex:1}}>
          <TextInput
          style={styles.inputStyles}
          onChangeText={(text) => this.setState({search:text})}
          value={this.state.search}
          maxLength={20}
          multiline={false}
          placeholder={'Search Books'}
        />
        </View>
        <View style={{flex:0,paddingHorizontal:10}}>
          <Icon name={'magnify'} color={'#0652DD'} size={25} />
          {/* <Text>Icon search</Text> */}
        </View>
    </View>
    )
  }

  renderList() {
    let result = []
    let books =  this.state.dataBook
    console.log('renderlist---', books)
    books.map((item, index) => {
      let wordSearch = new RegExp(this.state.search.toLowerCase() + '.*')
      // console.log('search word---->', wordSearch)
      if (item.title.toLowerCase().match(wordSearch)) {
        result.push(item)
      }
    })
    console.log('renderlist-result--', result)
    if(result.length > 0 ) {
      return (
        <View style={{
          flex:1,
          marginVertical:5,
        }}>
          <FlatList
          data={result}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({item, index}) => (
            <Cards 
            key={index} 
            data={item} 
            i={index} 
            handleEdit={this.handleEditBook.bind(this)} 
            handleDelete={this.handleDeleteBook.bind(this)}
            />
          )}/>
        </View>
      )
    } else {
      return (
        <View style={styles.containerEmp}>
          <Text style={styles.textTitle}>Data tidak ditemukan</Text>
        </View>
      )
    }
  }

  handleEditBook(data,index){
    console.log('handleEditBook----data---', data,'--index---', index)
  }

  handleDeleteBook(data,index){
    console.log('handleDeleteBook----data---', data,'--state---', this.state)
    let newBooks = this.state.dataBook.filter(item => item.id !== data.id)
    console.log(newBooks)
    this.setState({
      dataBook:newBooks
    })
  }

  render() {
    console.log('renderHome---state-------',this.state)
    return (
      <View style={{
        flex:1,
        backgroundColor:'#fff'
      }}>
        {/* <Header headerText={'My Book List'}/> */}
        {this.renderSearch()}
        <TouchableOpacity style={styles.containerAdd} onPress={() => Actions.addScreen()}>
          <Text style={styles.textTitle}> Add Books </Text>
        </TouchableOpacity>
        {this.state.dataBook.length > 0 ?this.renderList():null}
      </View>
    )
  }
}

export default Home
