import * as React from 'react';
import {View, Text} from 'react-native';
import Icons from '../../assets/icons';
import PropTypes from 'prop-types';

class Icon extends React.Component{
    render(){
        const {name, tintColor} = this.props;
        const TargetIcon = Icons[name];
        return(
            <TargetIcon name={name} {...this.props}/>
        );
    }
}

Icon.propTypes = {
    name: PropTypes.string,
    tintColor: PropTypes.string,
}

export default Icon;