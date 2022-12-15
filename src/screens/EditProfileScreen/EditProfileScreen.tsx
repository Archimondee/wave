import { Text, Space, Input, Button, ModalAlert } from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React, { useState } from "react";
// import Modal from "react-native-modal";
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  // ScrollView,
  // Alert,
  StatusBar,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { useForm, Controller } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import height from "utils/HeightPercent";
import width from "utils/WidthPercent";
// import api from "configs/api";
import { scaledVertical } from "utils/ScaledService";
import NavigationService from "utils/NavigationService";
import { isTablet, scale } from "utils/Responsive";
// import { wait } from "utils/Utils";
// import { widthPercentage } from "utils/PercentageService";

const EditProfileScreen = () => {
  // const token = useToken();
  // const dispatch: any = useDispatch();
  // const realm = useRealm();

  // const userData = useSelector(
  //   (state: StoreStateType) => state.persist.userData,
  // );

  // const [showModal, setShowModal] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  // const [code, setCode] = useState(userData?.data?.data?.phone_code ?? "+62");
  // const [, setProfilePictureField] = useState({} as ImageType);
  // const [uploadLink, setUploadLink] = useState(
  //   userData?.data?.data?.photo_profile || "",
  // );
  // const [dataUpload, setDataUpload] = useState({} as any);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
    },
  });

  // const datas = [
  //   {
  //     id: 1,
  //     title: "+62",
  //     desc: "+62 (Indonesia)",
  //   },
  // ];

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      writeTempFile: true,
    });
    // .then(result => {
    //   if (result?.size >= 2000000) {
    //     Alert.alert("Upload Foto Gagal", "Ukuran Foto melebihi 2MB", [
    //       { text: "OK" },
    //     ]);
    //   } else {
    //     const formData = new FormData();
    //     formData.append("slug", "image-profile");
    //     formData.append("image", {
    //       type: result.mime,
    //       uri: result.path,
    //       name: `avatar${result.modificationDate}.jpg`,
    //     } as unknown as Blob);
    //     api.postProfileImage(formData, token).then(res => {
    //       setProfilePictureField(result as ImageType);
    //       setUploadLink(res.data.data.url);
    //       setDataUpload(res.data.data);
    //     });
    //   }
    // })
    // .catch(err => window.console.log("err image picker", err));
  };

  const onSubmit = () => {
    // const formData = new FormData();
    // formData.append("fullname", data.fullname);
    // formData.append("email", data.email);
    // formData.append("phone", data.phone);
    // formData.append("phone_code", code);

    // if (!(Object.keys(dataUpload).length === 0)) {
    //   formData.append("photo_profile_path", dataUpload.path);
    //   formData.append("photo_profile_filename", dataUpload.filename);
    // }

    // dispatch(
    //   postEditProfile(formData, token, () => {
    //     setModalSuccess(true);
    //   }),
    // );
    setModalSuccess(true);
  };

  // const logout = () => {
  //   dispatch(
  //     deleteAccount(token, () => {
  //       dispatch(
  //         userLogout(token, () => {
  //           try {
  //             wait(1000)
  //               .then(async () => {
  //                 realm.write(() => {
  //                   realm.schema.forEach(os => {
  //                     const objs = realm.objects(os.name);

  //                     realm.delete(objs);
  //                   });
  //                 });
  //               })
  //               .finally(async () => {
  //                 NavigationService.reset();
  //               });
  //           } catch (err) {
  //             window.console.log("Error", err);
  //           }
  //         }),
  //       );
  //     }),
  //   );
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar animated barStyle="dark-content" />
      <View
        style={{ paddingHorizontal: 16, paddingVertical: 16, marginTop: 16 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => NavigationService.back()}
            >
              <Image
                source={icons.arrowLeft}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
            <Text type="bold" size={16} style={{ marginLeft: 16 }}>
              Ubah Profil
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setShowModalConfirm(true)}>
              <Text size={14} color={colors.neutral400}>
                Hapus Akun
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Space height={16} />
        <View>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={openImagePicker}
          >
            <View style={{ width: 140, height: 140 }}>
              <Image
                // source={uploadLink ? { uri: uploadLink } : images.man}
                source={images.profilePicture}
                style={{ width: 140, height: 140, borderRadius: 70 }}
              />
              <View
                style={{
                  position: "absolute",
                  height: 32,
                  width: 32,
                  borderRadius: 16,
                  backgroundColor: colors.primary500,
                  bottom: 0,
                  right: 8,
                  borderWidth: 1,
                  borderColor: colors.neutral50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.pencilSimple}
                  style={{ width: 18, height: 18 }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Space height={24} />
          <Controller
            control={control}
            name="fullname"
            rules={{
              required: {
                value: true,
                message: "Ini wajib diisi.",
              },
              minLength: {
                value: 3,
                message: "Min 3 Karakter.",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Masukkan Nama Lengkap Kamu"
                title="Nama Lengkap"
                onChange={onChange}
                value={value}
                error={errors.fullname && errors.fullname.message}
              />
            )}
          />
          <Text size={14}>Nomor Telepon</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: isTablet() ? scale(110) : 107,
                height: isTablet() ? 51 : 49,
                borderWidth: 1,
                borderColor: colors.neutral300,
                borderRadius: 10,
                paddingTop: 15,
                paddingHorizontal: 12,
                paddingBottom: 16,
                justifyContent: "space-between",
              }}
              // onPress={() => setShowModal(true)}
            >
              <Image
                source={icons.flag.indonesia}
                style={{ width: 18, height: 18 }}
              />
              <Text size={14}>{"+62"}</Text>
              <Image
                source={icons.arrowSmallDown}
                style={{ width: 18, height: 18 }}
              />
            </TouchableOpacity>
            <Controller
              control={control}
              name="phone"
              // rules={{
              //   required: {
              //     value: true,
              //     message: "This is required.",
              //   },
              //   minLength: {
              //     value: 3,
              //     message: "Min 10 Character.",
              //   },
              // }}
              render={({ field: { onChange, value } }) => (
                <Input
                  keyboardType="number-pad"
                  width={width(60)}
                  placeholder="81X-XXX-XXX"
                  onChange={onChange}
                  value={value}
                  error={errors.phone && errors.phone.message}
                />
              )}
            />
          </View>
          <Controller
            control={control}
            name="email"
            rules={{
              required: {
                value: true,
                message: "Ini wajib diisi.",
              },
              minLength: {
                value: 3,
                message: "Min 3 Karakter.",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Alamat email tidak valid.",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                editable={false}
                placeholder="Masukkan Email Kamu"
                title="Email"
                onChange={onChange}
                value={value}
                error={errors?.email && errors?.email?.message}
              />
            )}
          />
          <Space height={scale(45)} />
          <Button
            type="dark"
            title="Simpan Perubahan"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
      <ModalAlert
        containerStyle={{ minHeight: scaledVertical(188) }}
        showModal={modalSuccess}
        onBackdropPress={() => setModalSuccess(false)}
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
          minHeight: 188,
          width: 280,
          alignSelf: "center",
        }}
        hideModal={() => setModalSuccess(false)}
        description={"Perubahan Berhasil Disimpan!"}
        singleButton
        icon={images.check}
      />
      <ModalAlert
        containerStyle={{ minHeight: scaledVertical(188) }}
        showModal={showModalConfirm}
        onBackdropPress={() => setShowModalConfirm(false)}
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
          minHeight: 141,
          width: 280,
          alignSelf: "center",
        }}
        hideModal={() => setShowModalConfirm(false)}
        description={
          "Yakin hapus akun? Jika kamu ingin kembali maka daftar akun baru mungkin diperlukan"
        }
        singleButton={false}
        // icon={icons.hah}
        // onPress={logout}
      />
    </SafeAreaView>
  );
};

export default EditProfileScreen;
