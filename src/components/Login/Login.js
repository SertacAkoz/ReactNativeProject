import { string } from 'prop-types';
import * as React from 'react';
import { View, Text, TextInput,ImageBackground, Button, ToastAndroid } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {loginStyles as styles} from './styles';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName:String,
            password:String
        };
    }
    clickFunction=()=>{

        if(this.state.userName == "seto" && this.state.password == "123123"){
            alert("Logged in succesfully");
        }else{
            alert("Invalid User");
        }
        
    }
    render(){
        //const [input, setInput] = React.useState("");
        const myImage = { uri: "http://gseii.org/site/wp-content/uploads/2014/05/blue-gradient-wallpaper-1024x640.jpg" };
        return(
            <View style={{display:"flex",alignItems:"center",backgroundColor:"#0077c2",height:"100%"}}>
                <ImageBackground source={myImage} resizeMode="cover" style={styles.image}>
                    <View style={{width:"100%",flex:1,alignItems:"center"}}>
                        <View style={styles.topContainer}>
                            <FontAwesome5 name={'house-user'} color={"white"} size={100}/>
                        </View>
                        <Text style={{fontSize:30,color:"white",marginTop:15}}>Username / Password</Text>
                        <TextInput style={styles.input} placeholder={"Please enter your username!"} onChangeText={userName=>this.setState({userName})} placeholderTextColor={"white"}/>
                        {/* <Text style={{fontSize:30,color:"white",marginTop:15}}>Password</Text> */}
                        <TextInput style={styles.input} placeholder={"Please enter your password!"} onChangeText={password=>this.setState({password})} placeholderTextColor={"white"} secureTextEntry={true}/>
                    </View>
                    <Button title="press" onPress={this.clickFunction}></Button>
                </ImageBackground>
                
            </View>
        );
    }
}

export default Login;