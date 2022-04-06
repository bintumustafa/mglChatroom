import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function ConnectionButton ({title, color}){ 
    return(
        <TouchableOpacity style={{backgroundColor:{color}, width: "auto", padding:20, borderRadius:30, textAlign:'center', flexDirection:'row'}}>
               <Text style={{fontSize:20, color:'black',}}> {title}</Text>
        </TouchableOpacity>
    )
}