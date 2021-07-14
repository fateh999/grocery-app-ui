import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Checkbox, Chip, FAB, List, Surface } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackHeader from "src/Components/Custom/BackHeader/BackHeader";
import Logo from "src/Components/Custom/Logo/Logo";
import Center from "src/Components/Shared/Center/Center";
import Container from "src/Components/Shared/Container/Container";
import Padding from "src/Components/Shared/Padding/Padding";
import Row from "src/Components/Shared/Row/Row";
import Spacer from "src/Components/Shared/Spacer/Spacer";
import Typography from "src/Components/Shared/Typography/Typography";
import { useAddressValue } from "src/HookState/addressState";
import { Address, useDataHandler } from "src/Utils/DataHandler";

function AddressListScreen() {
  const insets = useSafeAreaInsets();
  const { setPrimaryAddress } = useDataHandler();
  const addresses = useAddressValue();
  const keyExtractor = (item: any) => `${item.id}`;

  return (
    <Container fullScreen>
      <BackHeader title={"My Addresses"} />

      <FlatList
        data={addresses}
        renderItem={({ item }: { item: Address }) => (
          <Padding size={[0, 20, 0, 20]}>
            <Surface
              style={{ marginBottom: 15, elevation: 5, borderRadius: 10 }}
            >
              <Padding size={[10, 10, 10, 10]}>
                <List.Item
                  onPress={async () => {
                    setPrimaryAddress(item.id);
                  }}
                  left={() => (
                    <Center vertical>
                      <Checkbox.Android
                        status={item.primary ? "checked" : "unchecked"}
                      />
                    </Center>
                  )}
                  title={<Typography fontSize={"h5"}>{item.name}</Typography>}
                  description={`${item.houseNo}, ${item.street}, ${item.city}, ${item.state}, ${item.pincode}`}
                ></List.Item>
                <Row>
                  <Chip>{item.isWork ? "WORK" : "HOME"}</Chip>
                  <Spacer size={5} horizontal />
                  <Chip>{item.phoneNumber}</Chip>
                </Row>
              </Padding>
            </Surface>
          </Padding>
        )}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={() => (
          <Center allAxis>
            <Logo />
            <Typography fontSize={"h4"}>No Address Added</Typography>
          </Center>
        )}
        ListHeaderComponent={() => <Spacer size={30} />}
      />

      <FAB
        icon={"plus"}
        style={{ position: "absolute", bottom: insets.bottom + 30, right: 30 }}
      />
    </Container>
  );
}

export default AddressListScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
});
