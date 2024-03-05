import React from "react";
import RBSheet from "@nonam4/react-native-bottom-sheet";

const CustomBottomSheet = ({ children, refRBSheet }: any) => {
  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={600}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        {children}
      </RBSheet>
    </>
  );
};

export default CustomBottomSheet;
