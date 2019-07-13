import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  const { textStyle, viewStyle} = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  textStyle : {
    fontSize : 20
  },
  viewStyle : {
    backgroundColor : '#fcfcfc',
    justifyContent : 'center',
    alignItems: 'center',
    paddingTop:20,
    height: 60,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {width:0, height:2},
    position:'relative',
    elevation:2,

  }
}

export default Header
