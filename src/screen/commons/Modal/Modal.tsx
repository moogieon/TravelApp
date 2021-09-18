import React, { useState } from "react";
import { Button, Text, View } from "react-native";


function ModalTester(props:any) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    props.setErrorModal(false)
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

 
    </View>
  );
}
export default ModalTester;