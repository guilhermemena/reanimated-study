import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})

const Scale = () => {
  const [toggled, setToggled] = useState(false)
  const scale = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        }
      ]
    }
  })

  const handleToggle = () => {

    if (toggled) {
      scale.value = withSpring(1)
    } else {
      scale.value = withSpring(2.2)
    }

    setToggled(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleToggle()}>
        <Animated.View style={[styles.square, reanimatedStyle]} />
      </TouchableOpacity>
    </View>
  )
}

export default Scale