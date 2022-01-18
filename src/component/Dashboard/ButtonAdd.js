import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './StyleButtonAdd';

export default function ButtonAdd() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textActivityContainer}>
        <Text style={styles.textActivity}>Activity</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="activity-add-button">
          <Text style={styles.textButton}>+ Tambah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
