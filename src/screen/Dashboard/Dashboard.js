import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useDispatch} from 'react-redux';

//action
import {getAllActivity} from '../../redux/Dashboard/DashboardAction';

//component
import ButtonAdd from '../../component/Dashboard/ButtonAdd';

export default function Dashboard(props) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllActivity());
  // }, [dispatch]);

  return (
    <View style={styles.global}>
      <ButtonAdd />
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
