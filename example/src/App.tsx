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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: 'white' }}>Above Stack</Text>
      </View>
      <Pressable
        onPress={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        <Stack
          animation={{ type: 'spring' }}
          gap={20}
          offset={-80}
          expanded={isOpen}
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
          setIsOpen((prev) => !prev);
        }}
        style={{
          backgroundColor: 'purple',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 50,
        }}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>
          {isOpen ? 'Open' : 'Close'}
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
