import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerMain : {
    backgroundColor : '#fcfcfc',
    justifyContent : 'center',
    alignItems: 'center',
    paddingTop:20,
    height: 60,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {width:0, height:2},
    position:'relative',
    elevation:2
  },
  containerField: {
    flex:1,
    marginVertical:5,
    marginHorizontal:15,
    backgroundColor:'#F3F3F3',
    borderColor: 'grey',
    borderWidth: 1,
    alignItems:'center'
  },
  inputStyles:{
    paddingHorizontal:5,
    paddingVertical:5,
    borderBottomWidth:0.5,
    borderBottomColor:'grey'
  },
  containerMainFilter:{
    flex:0,
    marginVertical:10,
    flexDirection:'row',
    marginHorizontal:10
  },
  textTitle: {
    color:'#000',
    fontSize:16,
    textAlign: 'center',
    marginRight:10
  },
  containerEmpty:{
    flex:1,
    marginHorizontal:15,
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center'
  },
  textButton: {
    color:'#fff',
    fontSize:12,
    textAlign: 'center',
    fontWeight:'bold'
  },
  textTitleForm: {
    color:'#000',
    fontSize:12,
    fontWeight:'bold',
    paddingBottom:5
  },
})
