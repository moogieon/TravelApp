// import React, { useState } from "react"
// import { Text, View } from "react-native"
// export default function SearchDropDown(props:any){
// const {dataSource} = props
//     return(
//         <View style={{ backgroundColor: 'red'}}>
//             {dataSource.map(item => {
//                 return(
//                 <Text style={{   paddingHorizontal:10, backgroundColor:'red'  
//                 }}>
//                  {item}
//                 </Text>
//                 )}
//             )}
//         </View>
//     )
// }


import React  from "react"
import { Text, View } from "react-native"

export default function SearchDropDown(props:any){
    return(
        <View style={{ backgroundColor: 'red'}}>
            {props.data.fetchBoards.map((data) => {
                <Text 
                key={props.data.id}
                    style={{ 
                        paddingHorizontal:10, backgroundColor:'red', 
                        margin:5  }}>
                 {data.title}
                </Text>
                }
            )}
        </View>
    )
}