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

    return <Image source={icons.home} style={[styles(focused).icon]} />;
  }
}

export class IconExplore extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return <Image source={icons.explore} style={styles(focused).icon} />;
  }
}

export class IconDiamond extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return <Image source={icons.diamond} style={styles(focused).icon} />;
  }
}

export class IconProfile extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return <Image source={icons.user} style={styles(focused).icon} />;
  }
}
