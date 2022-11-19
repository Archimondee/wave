import React, { PureComponent } from "react";
import { Image } from "react-native";
import icons from "configs/icons";
import styles from "./TabsStyles";

interface Props {
  focused: boolean;
}

export class IconHome extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <Image
        source={icons.logoHome}
        style={[styles(focused).icon, { height: 35, width: 35 }]}
      />
    );
  }
}

export class IconCategory extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return <Image source={icons.searchHome} style={styles(focused).icon} />;
  }
}

export class IconWishlist extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return <Image source={icons.loveHome} style={styles(focused).icon} />;
  }
}

export class IconProfile extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return <Image source={icons.userHome} style={styles(focused).icon} />;
  }
}
