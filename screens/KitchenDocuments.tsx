import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import Input from "../components/common/Input";
import { FONTS } from "../constants/FONTFAMILY";
import { SM, XL } from "../constants/SPACING";
import Button from "../components/common/Button";
import CustomUploadImage from "../components/common/CustomUploadImage";

const KitchenDocuments = ({navigation}:any) => {

    const handleSignInPress =()=>{
        navigation.push("AddMeals")
    }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text style={styles.heading}>Pan and GSTIN Details</Text>

        <View style={{ paddingTop: SM }}>
          <Input label="Pan Details*" placeholder="Pan Details" />
        </View>

        <View style={{ paddingTop: SM }}>
          <Input label="GSTIN Details*" placeholder="GSTIN Details" />
        </View>

        <Text style={styles.address}>Official Bank Details</Text>

        <View style={{ paddingTop: SM }}>
          <Input label="IFSC Code*" placeholder="IFSC Code" />
        </View>

        <View style={{ paddingTop: SM }}>
          <Input label="Banck Account NUmber*" placeholder="Account Number" />
        </View>

        <Text style={styles.address}>FSSAI Details</Text>

        <View style={{ paddingTop: SM }}>
          <Input
            label="FSSAI Certificate Number*"
            placeholder="FSSAI Certificate Number"
          />
        </View>

        <Text style={styles.address}>Upload KYC Documents</Text>

        <View style={{paddingTop:SM}} >
          <CustomUploadImage label={"Pan Card*"} />
        </View>

        <View  style={{paddingTop:SM}}>
          <CustomUploadImage label={"FSSAI Certificate*"} />
        </View>

        <View  style={{paddingTop:SM}}>
          <CustomUploadImage label={"Debit Card"} />
        </View>

        <View style={{ paddingBottom: 50, paddingTop: 150 }}>
          <Button
            title={"Save and Proceed"}
            handleSignInPress={handleSignInPress}
            isActive={false}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  addressContainer: {
    width: "100%",
    height: 50,
    borderWidth: 1.5,
    borderColor: "#6C727F",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    fontFamily: FONTS.SemiBold,
    marginTop: 10,
  },

  heading: {
    fontFamily: FONTS.SemiBold,
    fontSize: 14,
    paddingTop: XL,
  },
  address: {
    fontFamily: FONTS.SemiBold,
    fontSize: 14,
    paddingTop: SM,
  },
  checkContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 50,
    borderWidth: 1.5,
    borderColor: "#6C727F",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    fontFamily: FONTS.SemiBold,
    marginTop: 10,
  },
});

export default KitchenDocuments;
