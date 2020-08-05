import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Button } from 'react-native-paper';


export default function home ({ navigation }) {
    return(
        <View style={styles.containerH}>

            {/* container-1 */}
            <View style={styles.h1}></View>

            {/* container-2 */}
            <View style={styles.h2}>
                <View style={styles.h2x}>
                    <Image
                    style={{width:'100%', height:'100%'}}
                    source={require('../assets/imagepic.png')}
                    />
                 </View>
                <View style={styles.h2y}></View>
            </View>

            {/* container-3 */}
            <View style={styles.h3}>
                <View style={styles.h3x}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'#fff'}}>CAMERA</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'#fff'}} >GALLERY</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            {/* container-4 */}
            <View style={styles.h4}>
                <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
                    <Image
                    style={{ width: 61, height: 19,}}
                    source={require('../assets/nextarrow.png')}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerH:{
        flex:1,
        backgroundColor: '#ffff',
        flexDirection:"column", 
        alignItems:'center'      
    },
    
    h1: {
        flex:.4,
        alignItems:"center",
        width:'85%',
        justifyContent:"flex-end",
        backgroundColor:'#ffff',
    },

    h2: {
        alignItems:"center",
        justifyContent:"flex-end",
        width:'85%',
        flex:1,
        backgroundColor:'#ffff',
    },

    h2x: {
        flex:1.26,
        alignItems:"center",
        width:'100%',
        justifyContent:"flex-end",
        backgroundColor:'#ffff',
    },

    h2y: {
        flex:.38,
        alignItems:"center",
        width:'100%',
        justifyContent:"flex-end",
        backgroundColor:'#ffff',
    },

    h3: {
        flex:.5,
        backgroundColor:'#ffff',
        width:'85%',
        alignItems:'center',
    },

    h3x: {
       flexDirection:'row',
       justifyContent:"space-between",
       width:'100%',
       aspectRatio:8/1.7,
       backgroundColor:'#ffff',
    },

    button : {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6202EE',
        borderRadius:5,
        aspectRatio:3.9/1.7,
        height:'100%',
        elevation:5,
    },

    h4: {
        flex:.5,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"flex-end",
        width:'90%',
        backgroundColor:'#ffff',  
    },
})