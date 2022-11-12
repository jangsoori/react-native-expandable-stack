import * as React from 'react';
import { useState } from 'react';

import { StyleSheet, View, Text, Dimensions, Pressable } from 'react-native';
import { Stack } from 'react-native-expandable-stack';

const { width } = Dimensions.get('window');

const Item: React.FC<{ color: string }> = ({ color }) => {
  return (
    <View
      style={{
        width,
        height: 100,
        backgroundColor: color,
        borderRadius: 100,
      }}
    />
  );
};

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: 'white' }}>Above Stack</Text>
      </View>
      <Pressable
        onPress={() => {
          setIsExpanded((prevState) => !prevState);
        }}
      >
        <Stack
          // animation={{ type: 'spring', options: { mass: 0.6 } }}
          gap={10}
          offset={-100}
          expanded={isExpanded}
          onExpandStart={() => {
            console.warn('expand start');
          }}
          onExpandEnd={() => {
            console.warn('expand end');
          }}
        >
          <Item color="brown" />
          <Item color="purple" />
          <Item color="cyan" />
        </Stack>
      </Pressable>
      <View>
        <Text style={{ color: 'white' }}>Below Stack</Text>
      </View>
      <Pressable
        onPress={() => {
          setIsExpanded((prev) => !prev);
        }}
        style={{
          backgroundColor: 'purple',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 50,
        }}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>
          {isExpanded ? 'Open' : 'Close'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
    backgroundColor: 'black',
  },
  item: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
