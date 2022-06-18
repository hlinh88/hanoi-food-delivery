import Modal from "react-native-modal";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const SubmitAlert = ({ isVisible = false, setIsVisibleFunction }) => {
  const toggleModal = () => {
    setIsVisibleFunction(!isVisible);
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
    >
      <View style={styles.alertContainer}>
        <View style={styles.alertModal}>
          <View
            style={{
              width: "100%",
            }}
          >
            <View style={styles.headerContainer}>
              <AntDesign name="checkcircle" size={24} color="#25AE88" />
              <Text style={styles.headerText}>SUCCESS</Text>
            </View>

            <Text style={styles.text}>Your review has been submitted!</Text>

            <TouchableOpacity
              onPress={() => toggleModal()}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SubmitAlert;
