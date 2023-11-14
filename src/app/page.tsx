'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Modal, Pressable, SafeAreaView, Text, View, useColorScheme } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

declare global {
  interface Window {
    nham24: any;
  }
}

export default function Home() {
  const theme = useColorScheme();
  useEffect(() => {
    console.log(JSON.stringify(theme));
  }, [theme])
  const [modalVisible, setModalVisible] = useState(false);

  const [value, setValue] = useState(dayjs());
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View >
        <Text>HELLO</Text>
        <Link href={"/next"}><Text>Next</Text></Link>

        <Pressable style={{ marginVertical: 20 }} onPress={() => setModalVisible(true)}>
          <Text>Open Modal</Text>
        </Pressable>

        <Pressable style={{ marginVertical: 20 }} onPress={() => {
          window.nham24.request("app/close", {});
        }}>
          <Text>Close app</Text>
        </Pressable>


        <DateTimePicker
          value={value}
          onValueChange={(date: any) => setValue(date)}
        />
        <Modal visible={modalVisible} animationType='fade'>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'red' }}>
              <Pressable onPress={() => setModalVisible(false)}>
                Close Modal
              </Pressable>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  )
}
