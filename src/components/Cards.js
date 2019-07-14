import React from 'react'
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Cards = (props) => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerImage}>
        <Image source={{uri:props.data.image_url}} style={styles.thumbnailStyle}/>
      </View>
      <View style={styles.containerView}>
        <Text style={styles.textTitle}>{props.data.title}</Text>
        <Text style={styles.textContent}>by {props.data.author}</Text>
        <Text style={styles.textContent}>Pages : {props.data.number_of_pages ? props.data.number_of_pages : ' - '} pages</Text>
        <Text style={styles.textContent}>Genre : <Text style={styles.textGenre}>{props.data.type_of_book ? props.data.type_of_book : ' - '}</Text></Text>
        <Text style={styles.textContent}>Published in {props.data.date_published ? props.data.date_published : ' - '}</Text>
      </View>
      <View style={styles.containerAction}>
        <TouchableOpacity 
        style={[styles.containerActionButton, {backgroundColor:'#f1c40f'}]}
        onPress={()=>props.handleEdit(props.data,props.i)}>
          <Icon name={'pencil'} color={'#fff'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.containerActionButton, {backgroundColor:'red'}]}
        onPress={()=>props.handleDelete(props.data,props.i)}>
          <Icon name={'delete'} color={'#fff'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  containerMain : {
    flex:1,
    backgroundColor:'#fff',
    padding:5,
    marginHorizontal:5,
    marginVertical:10,
    borderWidth : 1,
    borderColor : '#ddd',
    borderRadius : 2,
    borderBottomWidth:0,
    shadowColor : '#000',
    shadowOffset : {width:0,heigth:2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation : 1,
    flexDirection:'row'
  },
  containerImage:{
    flex:0,
    padding:5,
    backgroundColor:'#fff'
  },
  thumbnailStyle :{
    width:screenWidth * 0.22,
    height:screenHeight * 0.15
  },
  containerView:{
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:5
  },
  containerAction:{
    flex:0,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  textTitle: {
    color:'#000',
    fontSize:12,
    textAlign: 'center',
    fontWeight:'bold',
    paddingTop:5,
    paddingBottom:10
  },
  textGenre: {
    color:'#7f8c8d',
    fontSize:12,
    fontStyle:'italic'
  },
  textContent: {
    color:'#000',
    fontSize:12,
    paddingBottom:5
  },
  containerActionButton:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:5,
    paddingHorizontal:10,
    marginVertical:10,
    borderRadius:5
  }
}

export default Cards