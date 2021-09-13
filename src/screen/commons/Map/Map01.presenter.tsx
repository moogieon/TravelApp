
import React, { useState,useEffect } from 'react';
import MapView, {Callout, MapEvent, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Alert, Dimensions, Image, TouchableOpacity,View,Text, ToastAndroid,Button, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import { useRef } from 'react';
export default function Map01UI(props:any) {
 
  interface ILocation {
    latitude: number;
    longitude: number;
  }
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  const [region, setRegion] = useState({locality:'',country:''})
  const [currentAddress, setCurrentAddress] = useState("");
  

  

  useEffect(() => {
    handleUser()

    
  }, []);
  const markerRef = useRef(null);


  const handleUser =()=> {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      
      error => {
        console.log(error.code, error.message);
      },
      
      {enableHighAccuracy: true, timeout: 30000, maximumAge: 1000},
      
    );
  }

const getAddress = async(lat,lng)=>{
      // simply add your google key
Geocoder.fallbackToGoogle("AIzaSyBkMey_lmmugJu0wO8z1MIitQ3GwtZXPk4");
 try {
  let res = await Geocoder.geocodePosition({lat, lng})
  let addr =(res[0].formattedAddress)
  let locality =(res[0].locality )
  let country =( res[0].country)
  setCurrentAddress(addr)
  setRegion({locality:locality,country:country})



 } catch (error) {
   console.log(error)
 }

  }
  function onChangeValue(location){
    if (markerRef && markerRef.current && markerRef.current.showCallout) {
      markerRef.current.showCallout();
    }
    getAddress(location.latitude,location.longitude)
    ToastAndroid.show(JSON.stringify(currentAddress),ToastAndroid.SHORT)
        // alert(JSON.stringify(location))
        setLocation(location)
      console.log(currentAddress)
        
  }
const  styles = StyleSheet.create({
    container: {
      display: "flex",
      height: Dimensions.get("screen").height,
      width: Dimensions.get("screen").width
    },
    map: {
      flex: 1
    },
    mapMarkerContainer: {
      left: '47%',
      position: 'absolute',
      top: '42%'
    },
    mapMarker: {
      fontSize: 40,
      color: "red"
    },
    deatilSection: {
      // flex: 1,
      height: 200,
      backgroundColor: "#fff",
      padding: 10,
      display: "flex",
      justifyContent: "flex-start"
    },
    spinnerView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    btnContainer: {
      width: Dimensions.get("window").width - 20,
      position: "absolute",
      bottom: 100,
      left: 10
    }
  });

  
  return (
    <>
    <View style={{flex: 1,width:"100%" ,height:"100%" ,backgroundColor:"#00000099"}}>
      <View style={{flexDirection:"row",justifyContent:"flex-end",paddingRight:20,paddingTop:20,paddingLeft:20}}>
        <TouchableOpacity onPress={()=>props.setMap(false)}>
        <Image source={require("../../../Assets/Images/IconClose_W.png")} style={{width:13,height:13,}}/>
        </TouchableOpacity>
         
      </View>
      <View style={{flex: 1, paddingTop:20,}}>
        {location && <MapView
        
         customMapStyle={props.mapStyle}
         provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={{flex: 1}}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: Dimensions.get('window').width /  Dimensions.get('window').width
        }}
        onRegionChange={region => {
          setLocation({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}
        onRegionChangeComplete={onChangeValue}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          ref={markerRef}
          title={"나라: "+region.country}
          description={"도시: "+region.locality}
        />
 

      </MapView>}
      <View style={styles.deatilSection}>
            <Text style={{ fontSize: 16, fontWeight: "bold", fontFamily: "roboto", marginBottom: 20 }}>Move map for location</Text>
            <Text style={{ fontSize: 10, color: "#999" }}>LOCATION</Text>
            <Text numberOfLines={2} style={{ fontSize: 14, paddingVertical: 10, borderBottomColor: "silver", borderBottomWidth: 0.5 }}> 
           </Text>
            <View style={styles.btnContainer}>
              <Button
                title="지역 선택" 
              
              >
              </Button>
            </View>
          </View>
     
      </View>
      </View>
    </>
  );
}

