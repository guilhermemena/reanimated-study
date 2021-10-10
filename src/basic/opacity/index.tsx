import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  touch: {
    width: '100%',
    height: '100%',
  }
})

const Opacity = () => {
  const [toggled, setToggled] = useState(false);
  const opacity = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  })

  const handleToggle = () => {
    if (toggled) {
      opacity.value = withTiming(0, {
        duration: 1000
      })
    } else {
      opacity.value = withTiming(1, {
        duration: 1000
      })
    }
    setToggled(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, reanimatedStyle]}>
        <TouchableOpacity style={styles.touch} onPress={() => handleToggle()} />
      </Animated.View>
    </View>
  )
}

export default Opacity;

/*
  NOTES!!!

  Opacity is purely visual and operates the same as it does on the web.
  Meaning the element will have layout, the item just won't be visible.
  If there is any content behind the element with opacity they will become visible but will not be interactable with.
*/
