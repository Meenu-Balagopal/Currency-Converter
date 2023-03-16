import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryPicker from 'react-native-country-picker-modal';

const App = () => {
  const [currency, setCurrency] = useState(0);
  const [result, setResult] = useState(0);
  const [From, setFrom] = useState();
  const [To, setTo] = useState();
  const [switchA, setSwitchA] = useState(false);

  const swichButton = () => {
    setTo(From);
    setFrom(To);
    // setSwitchA(!switchA);
  };

  const convert = () => {
    if (To === 'USD' && From === 'INR') {
      if (From !== 0) {
        setResult(currency / 80);
      }
    } else {
      setResult(currency * 80);
    }
  };
  console.log('To', To, 'From', From);
  console.log('result', result, 'currency', currency);

  return (
    <View style={{paddingHorizontal: 22}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.exchange}>Exchange Rate</Text>
        <Text style={styles.cur}>
          {result}
          {To === 'USD' ? '$' : ' INR'}
        </Text>
      </View>

      <View>
        <Text style={{fontWeight: 'bold'}}>Amount</Text>
        <TextInput
          style={styles.amount}
          placeholder="Enter the Amount"
          onChangeText={txt => setCurrency(txt)}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {
            <View>
              <Text style={{fontWeight: 'bold'}}>From</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={From}
                  onValueChange={(itemValue, itemIndex) => setFrom(itemValue)}>
                  <Picker.Item label="INR" value="INR" />
                  <Picker.Item label="USD" value="USD" />
                </Picker>
              </View>
            </View>
          }
          {/* <Icon name="arrows-rotate" size={30} color="#900" /> */}
          <View style={{marginTop: 29, width: 35}}>
            <Ionicons onPress={swichButton} name="repeat-outline" size={21} />
          </View>
          <View>
            <Text style={{fontWeight: 'bold'}}>To</Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={To}
                onValueChange={(itemValue, itemIndex) => setTo(itemValue)}>
                <Picker.Item label="INR" value="INR" />
                <Picker.Item label="USD" value="USD" />
              </Picker>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 50}}>
        <Button
          title="Convert"
          color="#841584"
          onPress={convert}
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
    width: '99%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
  },
  picker: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
  },
  exchange: {marginTop: 40, fontWeight: 'bold', fontSize: 15},
});
