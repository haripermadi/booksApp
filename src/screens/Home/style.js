import { StyleSheet, Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
  containerAdd : {
    backgroundColor : 'red',
    justifyContent : 'center',
    alignItems: 'center',
    paddingVertical:10,
    marginHorizontal:15,
    width:screenWidth * 0.3,
    marginTop:5,
    borderRadius:5
    
  },
  containerFilter:{
    flex:1,
    borderWidth: 0.5,
    borderColor:'grey',
    marginHorizontal:20,
  },
  textFilter :{
    color:'#000',
    fontSize:12,
    textAlign: 'center'
  },
  containerSearch: {
    flex:0,
    marginVertical:5,
    marginTop:20,
    marginHorizontal:15,
    backgroundColor:'#F3F3F3',
    flexDirection:'row',
    borderColor: 'grey',
    borderWidth: 1,
    alignItems:'center'
  },
  inputStyles:{
    paddingHorizontal:5,
    paddingVertical:10
  },
  containerMainFilter:{
    flex:0,
    marginVertical:10,
    flexDirection:'row',
    marginHorizontal:10
  },
  textTitle: {
    color:'#fff',
    fontSize:12,
    textAlign: 'center',
    fontWeight:'bold'
  },
  containerEmpty:{
    flex:1,
    marginHorizontal:15,
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center'
  }
})
