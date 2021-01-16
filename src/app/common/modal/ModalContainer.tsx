import { RootState } from "app/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "semantic-ui-react";
import { closeModal } from "feature/modal/modalSlice";

const ModalContainer = () => {
  const { body, size, open } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  return (
    <Modal
      open={open}
      onClose={() => dispatch(closeModal())}
      size={size ? size : "mini"}
    >
      <Modal.Content>{body}</Modal.Content>
    </Modal>
  );
};

export default ModalContainer;
