import React, { useState } from "react";
import { View, Text, Image, TextInput,Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Icons from "@expo/vector-icons/MaterialIcons"
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  const [focusedInput, setFocusedInput] = useState('');
  return (
  
    <View style={{ flex:1,backgroundColor: "white", padding:24,}} >
      <View
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:60,
          padding:40
          
        }}
      >
        <Image
          source={require("@/assets/images/crossLogo.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>Sign In</Text>
        <Text style={{ fontSize: 15, color: "#666", marginTop: 10 }}>
          Let's experience the joy of telecare AI.
        </Text>
      </View>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 20 }}>
        Email Address
      </Text>

      <View style={{flexDirection:'row',alignItems:'center',borderRadius:15,paddingHorizontal:15,height:60,borderWidth:1, borderColor: focusedInput==='email'?"#9BE000" : "#E5E5E5",margin:10,cursor:"pointer",}}> 
     <Icons name="email" size={20} color="#2e2d2d"/>
      <TextInput
        
        placeholder="elementary221b@gmail.com"
        onFocus={() => setFocusedInput('email')}
        onBlur={() => setFocusedInput('')}
        placeholderTextColor={"#9E9E9E"}
        style={{
          flex:1,
          width: "100%",
          height: 55,
          margin:10
        }}
      ></TextInput></View>
     
         <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 20 }}>
        Password
      </Text>

      <View style={{flexDirection:'row',alignItems:'center',borderRadius:15,paddingHorizontal:15,height:60,borderWidth:1, borderColor: focusedInput==='password' ? "#9BE000" : "#E5E5E5",margin:10,cursor:"pointer",}}> 
     <Icons name="enhanced-encryption" size={24} color="black" />
       <TextInput
    
      
        placeholder="Enter your password... "
        onFocus={() => setFocusedInput('password')}
        onBlur={() => setFocusedInput('')}
        secureTextEntry={true}
        placeholderTextColor={"#9E9E9E"}
        style={{
          flex:1,
          width: "100%",
          height: 55,
         margin:10,
        }}
      ></TextInput><AntDesign name="eye-invisible" size={24} color="#747373" /></View>


      <Pressable style={{  backgroundColor: "#b4e73c", alignItems:"center", borderRadius:15 ,paddingVertical:15,marginTop:20}}> 
         <Text style={{color:"#ffffff",fontSize:16,fontWeight:"bold", display:"flex",alignItems:"center",gap:10}}>Sign In<FontAwesome name="arrow-right" size={10} color="#ffffff" /></Text>
      </Pressable>

     <View style={{display:"flex",alignItems:"center", justifyContent:"center",flexDirection:"row",marginTop:30, gap:10,}}>
      <FontAwesome name="google" size={20} color="#2e2d2d" style={{borderColor:"#e5dfdf",borderWidth:1,borderRadius:14,padding:12}} />
      <FontAwesome name="facebook" size={18} color="#2e2d2d" style={{borderColor:"#e5dfdf",borderWidth:1,borderRadius:14,padding:12,paddingLeft:15,paddingRight:15}} />
      <FontAwesome name="instagram" size={20} color="#2e2d2d" style={{borderColor:"#e5dfdf",borderWidth:1,borderRadius:14,padding:12}} />
     </View>
      
      <View style={{alignItems:"center",margin:20,padding:20,gap:10}}>   
        <Text><Text style={{color:"#2e2d2d"}}>Don't have an account?</Text><Text  style={{color:"#b4e73c"}}> Sign Up</Text></Text>
     <Text style={{color:"#b4e73c",textDecorationLine:"underline"}} onPress={()=>alert('Forget password clicked')}>Forgot your password?</Text>
</View>
   
     
    </View>
  );
}
  