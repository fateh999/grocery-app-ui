import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Appbar } from "react-native-paper";
import Typography from "src/Components/Shared/Typography/Typography";
import CartIcon from "../CartIcon/CartIcon";
import HeaderBlur from "../HeaderBlur/HeaderBlur";

type MainHeaderProps = {
  title: string;
};

function MainHeader(props: MainHeaderProps) {
  const { title } = props;
  const navigation = useNavigation();

  return (
    <Appbar.Header dark>
      <HeaderBlur />
      {/* @ts-ignore */}
      <Appbar.Action icon={"menu"} onPress={navigation.toggleDrawer} />
      <Appbar.Content
        title={
          <Typography variant={"white"} type={"regular"} fontSize={"h5"}>
            {title}
          </Typography>
        }
      />
      <CartIcon />
    </Appbar.Header>
  );
}

export default MainHeader;
