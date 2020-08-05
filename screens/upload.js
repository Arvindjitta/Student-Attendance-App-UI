import  React, {Component} from 'react';
import { View,StyleSheet, Text, Image} from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { ProgressBar, Colors} from 'react-native-paper';




export default class MyComponent extends React.Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
    heading1: String,
    icons1: String,
    heading2: String,
    icons2: String,
    heading3: String,
    icons3: String,
    heading4: String,
    icons4: String,
  };
  

  constructor(props) { 
    super(props); 
    this.state = {
      heading1: 'BRANCH',
      heading2: 'YEAR',
      heading3: 'SECTION',
      heading4: 'SEMISTER',
      icons1:'chevron-down',
      icons2:'chevron-down',
      icons3:'chevron-down',
      icons4:'chevron-down',
      icons5:'cloud_upload',
    }; 
} 

  _openMenu1 = () => this.setState({ visible1: true });
  _closeMenu1 = () => this.setState({ visible1: false });
  _openMenu2 = () => this.setState({ visible2: true });
  _closeMenu2 = () => this.setState({ visible2: false });
  _openMenu3 = () => this.setState({ visible3: true });
  _closeMenu3 = () => this.setState({ visible3: false });
  _openMenu4 = () => this.setState({ visible4: true });
  _closeMenu4 = () => this.setState({ visible4: false });

 
  
  render() {
    const { navigation } = this.props;
    return (
      <Provider>
        <View style={styles.conatinerU}>
          <View style={styles.extraspace}>
          </View>

          <View style={styles.enterdetails}>
              <Title>Enter details</Title>
          </View>

          <View style={styles.dropdown}>
            <View style={styles.upperpart}>

              {/* branch */}

              <View
                style={{
                  flex:1,
                  marginRight:'5%',
                  marginTop:'10%',
                  backgroundColor:'#ffff',
                  
              
                }}>
                <Menu
                  style={{width:'40%',marginTop:'-8%'}}
                  visible={this.state.visible1}
                  onDismiss={this._closeMenu1}
                  anchor={
                    <Button 
                    style={{backgroundColor:'#ffff',}}
                    icon={this.state.icons1}
                    contentStyle={{height:'100%'}}
                    mode="outlined"
                    onPress={this._openMenu1}><Text style={{fontSize:15}}>{this.state.heading1}</Text></Button>
                  }
                >
                  <Menu.Item onPress={() => {   
                    this.setState({ heading1: 'CSE', visible1: false })
                     }} title="CSE" />
                  <Divider />
                  <Menu.Item onPress={() => {
                    this.setState({ heading1: 'ECE', visible1: false  })
                  }} title="ECE" />
                  <Divider />
                  <Menu.Item onPress={() => {
                    this.setState({ heading1: 'CIVIL', visible1: false })
                  }} title="CIVIL" />
                </Menu>
              </View>
             
              {/* year*/}

              <View
                  style={{
                    flex:1,
                    marginTop:'10%',
                    backgroundColor:'#ffff' 
                    
                  }}>
                  <Menu 
                   style={{width:'40%',height:'40%',marginTop:'-8%'}}
                    visible={this.state.visible2}
                    onDismiss={this._closeMenu2}
                    anchor={
                      <Button 
                      
                      icon={this.state.icons2}
                      contentStyle={{height:'100%'}}
                      mode="outlined"
                      onPress={this._openMenu2}><Text style={{fontSize:15}}>{this.state.heading2}</Text></Button>
                    }
                  >
                  <ScrollView>
                    <Menu.Item 
                    style={{backgroundColor:'#ffff'}}
                    onPress={() => {
                        this.setState({ heading2: 'FIRST', visible2: false  })
                    }} title="FIRST" />
                    <Divider />
                    <Menu.Item onPress={() => {
                        this.setState({ heading2: 'SECOND',visible2: false  })
                    }} title="SECOND" />
                    <Divider />
                    <Menu.Item onPress={() => {
                        this.setState({ heading2: 'THIRD', visible2: false })
                    }} title="THIRD" /><Divider />
                    <Menu.Item onPress={() => {
                        this.setState({ heading2: 'FOURTH',visible2: false })
                    }} title="FOURTH" /><Divider />
                    <Menu.Item onPress={() => {
                        this.setState({ heading2: 'MBA',  visible2: false })
                    }} title="MBA" />
                  </ScrollView>    
                  </Menu>

                </View>
            </View>

            <View style={styles.lowerpart}>

             {/* section*/}
               
             <View
                style={{
                  flex:1,
                  marginRight:'5%',
                  marginTop:'5%',
                  marginBottom:'5%',
                  // backgroundColor:'pink'
              
                }}>
                <Menu
                  style={{width:'40%',marginTop:'-8%'}}
                  visible={this.state.visible3}
                  onDismiss={this._closeMenu3}
                  anchor={
                    <Button
                    icon={this.state.icons3}
                    contentStyle={{height:'100%'}}
                    mode="outlined"
                    onPress={this._openMenu3}><Text style={{fontSize:15}}>{this.state.heading3}</Text></Button>
                  }
                >
                  <Menu.Item onPress={() => {   
                    this.setState({ heading3: 'A', visible3: false})
                     }} title="A" />
                    <Divider />
                  <Menu.Item onPress={() => {
                    this.setState({ heading3: 'B',visible3: false})
                  }} title="B" />
                  <Divider />
                  <Menu.Item onPress={() => {
                    this.setState({ heading3: 'C',visible3: false })
                  }} title="C" />
                </Menu>
              </View>
             
              
            {/* semister*/}
            <View

                  style={{
                    flex:1,
                    marginTop:'5%',
                    marginBottom:'5%',
                    // backgroundColor:'pink'
                    
                  }}>
                  <Menu 
                    style={{width:'40%',marginTop:'-8%'}}
                    visible={this.state.visible4}
                    onDismiss={this._closeMenu4}
                    anchor={
                      <Button 
                      icon={this.state.icons4}
                      contentStyle={{ height:'100%' }} 
                      mode="outlined" 
                      onPress={this._openMenu4}><Text style={{fontSize:15}}>{this.state.heading4}</Text></Button>
                    }
                  >
                  {/* <ScrollView> */}
                    <Menu.Item 
                  
                    style={{backgroundColor:'#ffff'}}
                    onPress={() => {
                        this.setState({ heading4 : 'SEM-1',visible4: false })
                    }} title="SEM-1" />
                    <Divider />
                    <Menu.Item onPress={() => {
                        this.setState({ heading4 : 'SEM-2',visible4: false })
                    }} title="SEM-2" />
                    
                  {/* </ScrollView>     */}
                  </Menu>

                  </View>
            </View>
          </View>

          <View style={styles.progressbar} >
             <ProgressBar
              style={{height:'55%',width:'96%',marginHorizontal:'2%'}}
              progress={0.4} color='#FFBEBE' />
          </View>

          <View style={styles.uploadbtn} >
            <View style={styles.btnview}>
              <Button 
              contentStyle={{height:'100%'}}
              icon="upload"
              mode="contained" onPress={() => console.log('Pressed')}>
                 upload
              </Button>
              </View>
          </View>

          <View style={styles.nextbtn} >
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Image
                    style={{ width: 61, height:19, marginTop:'8%'}}
                    source={require('../assets/nextarrow.png')}
                    />
                </TouchableOpacity>
          </View>


        </View>
        </Provider>
    )
  }
}

const styles = StyleSheet.create({
  conatinerU: {
    flex:1,
    backgroundColor: '#ffff',
    alignItems:'center',
  },

  extraspace: {
    flex:1,
    width:'85%',
    // backgroundColor:'yellow',
  },

  enterdetails: {
    flex:0.5,
    width:'85%',
    // backgroundColor:'violet',
    justifyContent:'flex-end'
  },

  dropdown: {
    flex:3,
    width:'85%',
    // backgroundColor:'purple',
  },

  upperpart:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#ffff',
  },

  lowerpart: {
    flex:1,
    flexDirection:'row',
    backgroundColor:'#ffff',
  },

  progressbar: {
    flex:1,
    width:'85%',
    backgroundColor:'#fff',
    justifyContent:'flex-end',
  },

  uploadbtn: {
    flex:2,
    width:'85%',
    // backgroundColor:'skyblue',
    justifyContent:'center',
    alignItems:'center',
  },

  btnview: {
    width:'45%',
    height:'50%', 
    // backgroundColor:'red'
  },

  nextbtn: {
    flex:1,
    width:'85%',
    // backgroundColor:'coral',
    justifyContent:'flex-start',
    alignItems:'flex-end'
  },

})