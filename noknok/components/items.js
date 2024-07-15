import { StyleSheet, Image, View, Text } from "react-native";

export default function ItemView({ name, Item, cost, LBP }) {
  return (
    <View>
      <View>
        <Image source={Item} style={styles.img}></Image>
        <Text style={styles.currencyText}>
          <Text style={[styles.currencyText, { fontWeight: "bold" }]}>
            ${cost}
          </Text>
          <Text style={(styles.currencyText, { fontWeight: "bold" })}>
            (LBP
          </Text>
          {Math.floor(cost * LBP)})
        </Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  currencyText: {
    fontSize: 13,
    color: "black",
  },
  img: {
    width: 100,
    height: 180,
  },
});
