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
      <View>
        <Text style={styles(focused).title}>Home</Text>
      </View>
    );
  }
}

export class TitleCategory extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <View>
        <Text style={styles(focused).title}>Category</Text>
      </View>
    );
  }
}

export class TitleWishlist extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <View>
        <Text style={styles(focused).title}>Wishlist</Text>
      </View>
    );
  }
}

export class TitleProfile extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <View>
        <Text style={styles(focused).title}>Profile</Text>
      </View>
    );
  }
}
