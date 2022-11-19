import { ExampleSkeleton } from "assets";
import { ButtonExample } from "components";
import React, { useState } from "react";
import { Text, TextInput, View, Alert } from "react-native";
import { exampleValidation } from "utils/validations/ValidationService";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullname, setFullname] = useState("");

  const [fullnameErr, setFullnameErr] = useState("");
  const [lastnameErr, setLastnameErr] = useState("");
  const [firstnameErr, setFirstnameErr] = useState("");

  const fullNameHandler = (value: string) => {
    setFullname(value);
  };

  const firstNameHandler = (value: string) => {
    setFirstName(value);
  };

  const lastNameHandler = (value: string) => {
    setLastName(value);
  };

  const example = () => {
    exampleValidation({
      fullname: fullname,
      lastName: lastName,
      firstName: firstName,
    }).then((validation: any) => {
      switch (validation.type) {
        case "fullname":
          setFullnameErr(validation.message);
          break;
        case "firstname":
          setFullnameErr("");
          setFirstnameErr(validation.message);
          break;
        case "lastname":
          setFullnameErr("");
          setFirstnameErr("");
          setLastnameErr(validation.message);
          break;
        default:
          setFullnameErr("");
          setFirstnameErr("");
          setLastnameErr("");
          Alert.alert("Success input");
      }
    });
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text>RegisterScreennn</Text>

      <View style={{ paddingVertical: 20 }}>
        <Text style={{ paddingTop: 20 }}>Fullname</Text>
        <TextInput
          value={fullname}
          underlineColorAndroid="transparent"
          onChangeText={fullNameHandler}
          keyboardType={"default"}
          style={{ borderBottomColor: "red", borderBottomWidth: 1 }}
        />
        <Text>{fullnameErr}</Text>
        <Text style={{ paddingTop: 20 }}>Firstname</Text>
        <TextInput
          value={firstName}
          underlineColorAndroid="transparent"
          onChangeText={firstNameHandler}
          keyboardType={"default"}
          style={{ borderBottomColor: "red", borderBottomWidth: 1 }}
        />
        <Text>{firstnameErr}</Text>
        <Text style={{ paddingTop: 20 }}>Lastname</Text>
        <TextInput
          value={lastName}
          underlineColorAndroid="transparent"
          onChangeText={lastNameHandler}
          keyboardType={"default"}
          style={{ borderBottomColor: "red", borderBottomWidth: 1 }}
        />
        <Text>{lastnameErr}</Text>
      </View>
      <ButtonExample title="Submit" onPress={example} />
      <View style={{ paddingTop: 30 }}>
        <ExampleSkeleton />
      </View>
    </View>
  );
};

export default RegisterScreen;
