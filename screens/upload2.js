import  React, {Component} from 'react';
import { View,StyleSheet, Text} from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class MyComponent extends React.Component {
  state = {
    visible1: false,
    visible2: false,

    
    heading: String,
    icons: String,
  };

  constructor(props) { 
    super(props); 
    this.state = {
      heading: 'SELECT COURCE', 
      icons:'chevron-down',
    }; 
} 

  _openMenu1 = () => this.setState({ visible1: true });

  _closeMenu1 = () => this.setState({ visible1: false });

  _openMenu2 = () => this.setState({ visible2: true });

  _closeMenu2 = () => this.setState({ visible2: false });

  render() {
    return (
        
      <Provider>
      
        <View style={styles.continerU}>

          <View style={styles.containerUS}>
           <Text>ddd</Text>
          </View>
          

              <View style={styles.u1}>

                    <View style={styles.u1x}>

                          <View

                                style={{
                                  // flex:1,
                                  // paddingTop: 50,
                                  // paddingLeft:10,
                                  // flexDirection: 'row',
                                  // justifyContent: 'flex-start',
                                  backgroundColor:'lightgreen'
                                  
                                }}>
                                <Menu 
                                  contentStyle={{height:200}}
                                  style={{width:200,}}
                                  visible={this.state.visible1}
                                  onDismiss={this._closeMenu1}
                                  anchor={
                                    <Button 
                                    icon={this.state.icons}
                                    contentStyle={{ height:60 ,width: 170,}} 
                                    mode="outlined" 
                                    style={{flexDirection:"row", backgroundColor:'#ffff',justifyContent:"space-between"}}
                                    onPress={this._openMenu1}>{this.state.heading}</Button>
                                  }
                                >
                                <ScrollView>
                                  <Menu.Item 
                                  // contentStyle={{height:2}}
                                  style={{backgroundColor:'#ffff'}}
                                  onPress={() => {
                                      this.setState({ heading: 'CSE', icons : null })
                                  }} title="CSE" />
                                  <Divider />
                                  <Menu.Item onPress={() => {
                                      this.setState({ heading: 'ECE', icons : null })
                                  }} title="ECE" />
                                  <Divider />
                                  <Menu.Item onPress={() => {
                                      this.setState({ heading: 'CIVIL', icons : null })
                                  }} title="CIVIL" />
                                  <Menu.Item onPress={() => {
                                      this.setState({ heading: 'EEE', icons : null })
                                  }} title="EEE" />
                                  <Menu.Item onPress={() => {
                                      this.setState({ heading: 'MECH', icons : null })
                                  }} title="MECH" />
                                  <Menu.Item onPress={() => {
                                      this.setState({ heading: 'MBA', icons : null })
                                  }} title="MBA" />
                                  <Menu.Item onPress={() => {
                                      this.setState({ heading: 'B-PHARM', icons : null })
                                  }} title="B-PHARM" />
                                  <Menu.Item onPress={() => {
                                      this.setState({ heading: 'PHARM-D', icons : null })
                                  }} title="PHARM-D" />

                                  </ScrollView>    
                                </Menu>

                          </View>


                      {/* 0000000000000000000000000000000000000000000000000000000000000000 */}

                          <View
                        
                                  style={{
                                    // flex:1,
                                    // paddingTop: 50,
                                    // paddingLeft:10,
                                    // flexDirection: 'row',
                                    // justifyContent: 'flex-start',
                                    backgroundColor:'skyblue'
                                    
                                  }}>
                                  <Menu 
                                    contentStyle={{height:200}}
                                    style={{width:200,}}
                                    visible={this.state.visible2}
                                    onDismiss={this._closeMenu2}
                                    anchor={
                                      <Button 
                                      icon={this.state.icons}
                                      contentStyle={{ height:60 ,width: 170,}} 
                                      mode="outlined" 
                                      style={{flexDirection:"row", backgroundColor:'#ffff',justifyContent:"space-between"}}
                                      onPress={this._openMenu2}>{this.state.heading}</Button>
                                    }
                                  >
                                  <ScrollView>
                                    <Menu.Item 
                                    // contentStyle={{height:2}}
                                    style={{backgroundColor:'#ffff'}}
                                    onPress={() => {
                                        this.setState({ heading: 'A', icons : null })
                                    }} title="A" />
                                    <Divider />
                                    <Menu.Item onPress={() => {
                                        this.setState({ heading: 'B', icons : null })
                                    }} title="B" />
                                    <Divider />
                                    <Menu.Item onPress={() => {
                                        this.setState({ heading: 'C', icons : null })
                                    }} title="C" />
                                    <Menu.Item onPress={() => {
                                        this.setState({ heading: 'D', icons : null })
                                    }} title="D" />
                                    <Menu.Item onPress={() => {
                                        this.setState({ heading: 'IT', icons : null })
                                    }} title="IT" />
                                  </ScrollView>    
                                  </Menu>

                          </View>

                  </View>
                {/* 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */}

                  <View style={styles.u1y}>

                            <View

                                    style={{
                                      // flex:1,
                                      // paddingTop: 50,
                                      // paddingLeft:10,
                                      // flexDirection: 'row',
                                      // justifyContent: 'flex-start',
                                      backgroundColor:'coral'
                                      
                                    }}>
                                    <Menu 
                                      contentStyle={{height:200}}
                                      style={{width:200,}}
                                      visible={this.state.visible2}
                                      onDismiss={this._closeMenu2}
                                      anchor={
                                        <Button 
                                        icon={this.state.icons}
                                        contentStyle={{ height:50 ,width: 200,}} 
                                        mode="outlined" 
                                        style={{flexDirection:"row", backgroundColor:'#ffff',justifyContent:"space-between"}}
                                        onPress={this._openMenu2}>{this.state.heading}</Button>
                                      }
                                    >
                                    <ScrollView>
                                      <Menu.Item 
                                      // contentStyle={{height:2}}
                                      style={{backgroundColor:'#ffff'}}
                                      onPress={() => {
                                          this.setState({ heading: 'FIRST', icons : null })
                                      }} title="FIRST" />
                                      <Divider />
                                      <Menu.Item onPress={() => {
                                          this.setState({ heading: 'SECOND', icons : null })
                                      }} title="SECOND" />
                                      <Divider />
                                      <Menu.Item onPress={() => {
                                          this.setState({ heading: 'THIRD', icons : null })
                                      }} title="THIRD" />
                                      <Menu.Item onPress={() => {
                                          this.setState({ heading: 'FOURTH', icons : null })
                                      }} title="FOURTH" />
                                      <Menu.Item onPress={() => {
                                          this.setState({ heading: 'FIFTH', icons : null })
                                      }} title="FIFTH" />
                                    </ScrollView>    
                                    </Menu>

                            </View>
                            
                    

              
              
                        <View

                                  style={{
                                    // flex:1,
                                    // paddingTop: 50,
                                    // paddingLeft:10,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    backgroundColor:'violet'
                                    
                                  }}>
                                  <Menu 
                                    contentStyle={{height:200}}
                                    style={{width:200,}}
                                    visible={this.state.visible2}
                                    onDismiss={this._closeMenu2}
                                    anchor={
                                      <Button 
                                      icon={this.state.icons}
                                      contentStyle={{ height:50 ,width: 200,}} 
                                      mode="outlined" 
                                      style={{flexDirection:"row", backgroundColor:'#ffff',justifyContent:"space-between"}}
                                      onPress={this._openMenu2}>{this.state.heading}</Button>
                                    }
                                  >
                                  <ScrollView>
                                    <Menu.Item 
                                    // contentStyle={{height:2}}
                                    style={{backgroundColor:'#ffff'}}
                                    onPress={() => {
                                        this.setState({ heading: 'SEM-1', icons : null })
                                    }} title="SEM-1" />
                                    <Divider />
                                    <Menu.Item onPress={() => {
                                        this.setState({ heading: 'SEM-2', icons : null })
                                    }} title="SEM-2" />
                                  </ScrollView>    
                                  </Menu>

                        </View>

                  </View>

              </View>

            
          </View>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({

    containerU: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'pink',
    },
    
    containerUS: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },


    u1: {
      flex:2,
      width:'90%',
      height:'100%',
       flexDirection: 'row',
      backgroundColor:'pink'
    },

    u1x: {
      flex:1,
      backgroundColor:'yellow',

      
      
      
    },

    u1y: {
      flex:1,
      backgroundColor:'red'
    },


})