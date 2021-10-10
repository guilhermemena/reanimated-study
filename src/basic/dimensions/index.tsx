import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: 'red'
  }
})

const Dimensions = () => {
  const [toggled, setToggled] = useState(false)
  const dimension = useSharedValue(150);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      width: dimension.value,
      height: dimension.value,
    }
  })

  const handleToggle = () => {
    let config = {
      duration: 300
    }

    toggled ? dimension.value = withTiming(150, config) : dimension.value = withTiming(300, config)

    setToggled(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleToggle()}>
        <Animated.View style={[styles.square, reanimatedStyle]}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laborum, dolorum! Laudantium libero eligendi, expedita temporibus porro eaque beatae ad ab
            nostrum aut sapiente doloribus ea nemo dolorem tenetur sed eius?
          </Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

export default Dimensions;

/*
  NOTES!!!

  Animating width and height values will effect layout.
  These may not always be the most performant however sometimes they are necessary.
  These are commonly used when you have predefined sizing.
  They are also typically used for dynamic sizing.
  With React Native you are able to measure the size of elements asynchronously.

  One common animation is an accordion.
  With dynamic measurement you could measure the height of some content then animate the content from a predefined height to it's actual height.
  This may not be performant on larger blocks of content and is actually a very difficult animation.

*/