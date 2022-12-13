import {
  Space,
  TextInput,
  Text,
  StarRatingWidget,
  Button,
  ModalAlert,
} from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import NavigationService from "utils/NavigationService";
import { scaledFontSize, scaledVertical } from "utils/ScaledService";
// import { useDispatch } from "react-redux";
// import { wait } from "utils/Utils";
import { isTablet } from "utils/Responsive";
// import { logEvent } from "utils/Analytic";

// import { useToken } from "../../../hooks";
// import {
//   getCommentNovelData,
//   postNovelComment,
// } from "../../../store/comment/actions";
// import { getNovelDetailData } from "../../../store/novel/actions";
// import { useRealm } from "../../../realm";

import styles from "./ReviewModalStyles";

interface ReviewModalProps {
  id: number;
  novel_title?: string;
  typeReview?: "normal" | "incoming" | "claim";
  freebies_id?: number;
  updated_at?: string;
}

const ReviewModal = ({}: ReviewModalProps) => {
  const [review, setReview] = useState("" as any);
  const [rating, setRating] = useState(4 as number);
  const [error, setError] = useState("");
  const [showAlert, setAlert] = useState(false);
  // const dispatch: any = useDispatch();
  // const token = useToken();
  // const realm = useRealm();

  const onChangeText = (text: string) => {
    setReview(text);
  };

  const onCloseReview = () => {
    setAlert(true);
  };

  const submitReview = () => {
    if (review.length >= 5) {
      setError("");
      // wait(1500)
      //   .then(() => {
      //     dispatch(
      //       postNovelComment(
      //         token,
      //         id,
      //         rating,
      //         review,
      //         () => {
      //           wait(100)
      //             .then(() => {
      //               logEvent("user_add_review", {
      //                 novel: novel_title || "",
      //               });
      //             })
      //             .finally(() => {
      //               dispatch(
      //                 getNovelDetailData(token, Number(id), realm, () => {
      //                   dispatch(
      //                     getCommentNovelData(
      //                       token,
      //                       realm,
      //                       Number(id),
      //                       "get",
      //                       1,
      //                       10,
      //                     ),
      //                   );
      //                 }),
      //               );
      //             });
      //         },
      //         () => {
      //           setError("Kamu sudah memberikan ulasan di novel ini.");
      //         },
      //       ),
      //     );
      //   })
      //   .finally(() => {
      //     NavigationService.back();
      //   });
    } else {
      setError("Kamu harus memberikan ulasan minimal 5 karakter.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text size={16} type={"bold"}>
          Tulis Ulasan
        </Text>
        <TouchableOpacity onPress={onCloseReview}>
          <FastImage
            source={icons.xmark}
            resizeMode={"contain"}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: scaledVertical(20) }}>
        <View style={{ alignSelf: "center", paddingBottom: 10 }}>
          <StarRatingWidget
            rating={rating}
            onChange={selectedRating => {
              setRating(selectedRating);
            }}
            size={30}
          />
        </View>

        <TextInput
          type="textarea"
          placeholder="Bagaimana ceritanya ?"
          maxLength={120}
          onChange={onChangeText}
          value={review}
        />
        {error !== "" ? (
          <Text
            size={scaledFontSize(20)}
            color="#DC5D52"
            style={{
              marginBottom: scaledVertical(12),
              marginTop: isTablet() ? -5 : -10,
            }}
          >
            {error}
          </Text>
        ) : null}

        <View style={styles.containerText}>
          <Text size={12}>Maksimum 120 karakter</Text>
          <Text size={12} color={colors.secondary500}>
            {review.length}/120
          </Text>
        </View>
        <Button
          title="Kirim"
          style={{ marginTop: scaledVertical(40) }}
          onPress={submitReview}
        />
        <Space height={15} />
      </View>
      <ModalAlert
        containerStyle={{ minHeight: scaledVertical(188) }}
        showModal={showAlert}
        onBackdropPress={() => setAlert(false)}
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
          minHeight: 141,
          width: 280,
          alignSelf: "center",
        }}
        hideModal={() => setAlert(false)}
        description={
          "Ulasan kamu belum terkirim Apakah kamu yakin ingin batal menulis ulasan?"
        }
        singleButton={false}
        onPress={() => NavigationService.back()}
      />
    </View>
  );
};

export default ReviewModal;
