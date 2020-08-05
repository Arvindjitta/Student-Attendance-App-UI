import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity, Image} from 'react-native';
import { DataTable, Button } from 'react-native-paper';

export default class details extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.table}>
                <DataTable style={{backgroundColor:'#ffff',elevation:10,}}>
                    <DataTable.Header>
                    <DataTable.Title>Names</DataTable.Title>
                    <DataTable.Title numeric>Attendence</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                    <DataTable.Cell>Aravind Reddy jitta</DataTable.Cell>
                    <DataTable.Cell numeric>Present</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                    <DataTable.Cell>Mithu sree</DataTable.Cell>
                    <DataTable.Cell numeric>Present</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                    <DataTable.Cell>Neil Sprunith</DataTable.Cell>
                    <DataTable.Cell numeric>Present</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                    <DataTable.Cell>Rahul Rai</DataTable.Cell>
                    <DataTable.Cell numeric>Present</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                    <DataTable.Cell>Sree Nidhi</DataTable.Cell>
                    <DataTable.Cell numeric>Present</DataTable.Cell>
                    </DataTable.Row>

                
                    <DataTable.Row>
                    <DataTable.Cell>Sai Shankar</DataTable.Cell>
                    <DataTable.Cell numeric>absent</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Pagination
                    page={1}
                    numberOfPages={3}
                    onPageChange={(page) => { console.log(page); }}
                    label="1-2 of 6"
                    />
                </DataTable>
                </View>

                <View style={styles.addperson}>
                <Button
                    mode="contained"
                    >ADD NEW PERSON</Button>
                </View>

                
                <View style={styles.footer}>
                    <View style={styles.done}>
                        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                            <Image
                            // style={{ width: 53, height:17,marginTop:'8%' }}
                            style={{ width: 51, height:16,marginTop:'8%' }}

                            source={require('../assets/Done.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.share}>
                        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                            <Image
                            style={{ width: 57, height:17, marginTop:'8%'}}
                            source={require('../assets/Share.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#ffff'
    },

    table:{
       justifyContent:'flex-end',
       flex:6,
       width:'85%',
    //    backgroundColor:'yellow'
    },
    addperson: {
      marginTop:'1%',
      flex:1,
      width:'85%',
    },

    footer:{
        flex:1,
        width:'85%',
        // backgroundColor:'grey',
        justifyContent:'space-between',
        flexDirection:'row',
    },

    done: {
       width:'25%',
    //    backgroundColor:'yellow',
    
    },

    share: {
       width:'25%',
    //    backgroundColor:'pink',
       alignItems:'flex-end'
    }
})
