import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={{paddingHorizontal: 22}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginTop: 40}}>Exchange Rate</Text>
        <Text style={styles.cur}>$300</Text>
      </View>

      <View>
        <Text>Amount</Text>
        <TextInput style={styles.amount} placeholder="Enter the Amount" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text>From</Text>
            <View
              style={{
                height: 40,
                width: 100,
                borderWidth: 1,
                borderRadius: 6,
                justifyContent: 'center',
              }}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <View>
            <Text>To</Text>
            <View
              style={{
                height: 40,
                width: 100,
                borderWidth: 1,
                borderRadius: 6,
                justifyContent: 'center',
              }}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 50}}>
        <Button
          title="Convert"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  cur: {color: 'black', fontSize: 20, fontWeight: 'bold', marginVertical: 10},
  amount: {
    height: 40,
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});
