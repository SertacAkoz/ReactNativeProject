import * as React from 'react';
import {View, Text} from 'react-native';
import SvgUri  from 'react-native-svg';
import Logo from '../../svgs/search_icon.svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Header, Login} from '../../components';

class Home extends React.Component{
    static navigationOptions = {
        header: null,
        };
    render(){
        return(
            <View >
                {/* <Header /> */}
                <Login />
                {/* <Icon name='search'/> */}
                {/* <Logo width={120} height={40} fill={"black"} /> */}
                {/* <FontAwesome5 name={'question-circle'} color={"blue"} size={50} style={{marginTop:25}} /> */}
            </View>
        );
    }
}

export default Home;