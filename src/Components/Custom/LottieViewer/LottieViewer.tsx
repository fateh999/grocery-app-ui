import React from "react";
import { Modal } from "react-native";
import lottie from "src/Assets/lottie";
import Container from "src/Components/Shared/Container/Container";
import LottieView from "lottie-react-native";

type LottieViewerProps = {
  visible: boolean;
  onDismiss: () => void;
  onAnimationFinish: () => void;
};

function LottieViewer(props: LottieViewerProps) {
  const { visible, onDismiss, onAnimationFinish } = props;

  return (
    <Modal visible={visible} onDismiss={onDismiss}>
      <Container fullScreen>
        <LottieView
          source={lottie.success}
          autoPlay
          hardwareAccelerationAndroid
          loop={false}
          onAnimationFinish={onAnimationFinish}
        />
      </Container>
    </Modal>
  );
}

export default LottieViewer;
