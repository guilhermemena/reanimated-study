import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  }
})

const Translate = () => {
  const [ toggled, setToggled ] = useState(false)
  const translate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translate.value
        }
      ]
    }
  })

  const handleToggle = () => {
    toggled ? translate.value = withSpring(300) : translate.value = withSpring(0)
    setToggled(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleToggle()}>
        <Animated.View style={[styles.square, animatedStyle]} />
      </TouchableOpacity>
    </View>
  )
}

export default Translate