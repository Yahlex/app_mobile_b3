import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../styles/HomeScreenStyle'

export default function HomeScreen ({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Profile')
  }
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='Go to Profile' onPress={handlePress} />
    </View>
  )
}
