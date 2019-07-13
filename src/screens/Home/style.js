import { StyleSheet, Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
  containerAdd : {
    backgroundColor : '#16a085',
    justifyContent : 'center',
    alignItems: 'center',
    paddingVertical:10,
    marginHorizontal:15,
    width:screenWidth * 0.3,
    marginTop:5,
    borderRadius:5
    
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
    backgroundColor:'#ecf0f1',
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
