import colors from "configs/colors";
import React, { memo, useEffect, useState, useCallback } from "react";
import { View } from "react-native";

import Text from "../Text/Text";

interface Props {
  minute: number;
  second: number;
  onPress?: () => void;
}

const Component = ({ minute, second, onPress }: Props) => {
  const [minutes, setMinutes] = useState(minute);
  const [seconds, setSeconds] = useState(second || 0);

  const _updateTime = useCallback(() => {
    if (seconds === 0 && minutes > 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else if (seconds > 0) {
      setSeconds(seconds - 1);
    }
  }, [seconds, minutes]);
  // const _updateTime = () => {
  //   if (seconds === 0 && minutes > 0) {
  //     setMinutes(minutes - 1);
  //     setSeconds(59);
  //   } else if (seconds > 0) {
  //     setSeconds(seconds - 1);
  //   }
  // };

  useEffect(() => {
    const token = setTimeout(_updateTime, 1000);

    return () => {
      clearTimeout(token);
    };
  }, [_updateTime]);

  return (
    <View>
      {seconds === 0 && minutes === 0 ? (
        <Text
          size={14}
          color={colors.primary500}
          onPress={() => {
            onPress && onPress();
            setSeconds(second);
            setMinutes(minute);
          }}
        >
          Kirim Ulang
        </Text>
      ) : (
        <Text size={14} color={colors.primary500}>
          {`${minutes > 9 ? minutes : `0${minutes}`}:${
            seconds > 9 ? seconds : `0${seconds}`
          }`}
        </Text>
      )}
    </View>
  );
};

Component.defaultProps = {
  second: 0,
};

export default memo(Component);
