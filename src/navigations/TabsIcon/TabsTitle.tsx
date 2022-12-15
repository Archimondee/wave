import React, { PureComponent } from "react";
import { Text, View } from "react-native";

import styles from "./TabsStyles";

interface Props {
  focused: boolean;
}

export class TitleHome extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <View style={styles(focused).borderStyle}>
        <Text style={styles(focused).title}>Home</Text>
      </View>
    );
  }
}

export class TitleExplore extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <View style={styles(focused).borderStyle}>
        <Text style={styles(focused).title}>Eksplor</Text>
      </View>
    );
  }
}

export class TitleDiamond extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <View style={styles(focused).borderStyle}>
        <Text style={styles(focused).title}>Berlian</Text>
      </View>
    );
  }
}

export class TitleProfile extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <View style={styles(focused).borderStyle}>
        <Text style={styles(focused).title}>Profile</Text>
      </View>
    );
  }
}
