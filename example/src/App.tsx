import * as React from 'react';
import { useState } from 'react';

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Stack } from 'react-native-expandable-stack';

const Item: React.FC<{ color: string }> = ({ color }) => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        backgroundColor: color,
        borderRadius: 20,
        shadowColor: 'black',
        shadowRadius: 20,
        shadowOpacity: 0.7,
      }}
    />
  );
};

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Item color="#AA336A" />
        <View style={{ height: 10 }} />
      </View>
      <Pressable
        onPress={() => {
          setIsExpanded((prevState) => !prevState);
        }}
      >
        <Stack
          // animation={{ type: 'timing', options: { duration: 250 } }}
          gap={10}
          offset={-70}
          expanded={isExpanded}
          onExpandStart={() => { }}
          onExpandEnd={() => { }}
          firstItemOnTop
        >
          <Item color="#9F2B68" />
          <Item color="#BF40BF" />
          <Item color="#800020" />
        </Stack>
        <View>
          <View style={{ height: 10 }} />
          <Item color="#702963" />
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          setIsExpanded((prev) => !prev);
        }}
        style={{
          backgroundColor: '#301934',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          marginTop: 'auto',
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 24,
          }}
        >
          {isExpanded ? 'Close' : 'Open'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 120,
    paddingBottom: 30,
  },
});
