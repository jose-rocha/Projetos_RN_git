import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import connect from './src/connectdb';
import MySqlConnection from 'react-native-my-sql-connection';

const mysql = require('mysql');
const sql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejs',
  password: '',
  port: 3306
});
sql.query("use nodejs");

const app = () => {




  return (
    <View style={styles.Container}>
      <Text>MD</Text>
    </View>
  )
}

export default app;


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})