import React from 'react'
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'

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
        <Text style={styles.textContent}>{props.data.author}</Text>
        <Text style={styles.textContent}>{props.data.date_published}</Text>
        <Text style={styles.textContent}>{props.data.number_of_pages}</Text>
        <Text style={styles.textContent}>{props.data.type_of_book}</Text>
      </View>
      <View style={styles.containerAction}>
        <TouchableOpacity onPress={()=>props.handleEdit(props.data,props.i)}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.handleDelete(props.data,props.i)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  containerMain : {
    flex:1,
    backgroundColor:'#fff',
    padding:10,
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
    backgroundColor:'lime'
  },
  thumbnailStyle :{
    width:screenWidth * 0.3,
    height:screenHeight*0.2
  },
  containerView:{
    flex:1,
    backgroundColor:'pink'
  },
  containerAction:{
    flex:0,
    backgroundColor:'lime',
    alignItems:'center',
    justifyContent:'center'

  },
  textTitle: {
    color:'#000',
    fontSize:14,
    textAlign: 'center',
    fontWeight:'bold'
  },
  textDesc: {
    color:'#000',
    fontSize:10,
    textAlign: 'justify',
  },
  textContent: {
    color:'#1B1464',
    fontSize:12,
  },
}

export default Cards