import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DeleteUser } from "../services/UserService";
import { toast } from "react-toastify";
const ModalConfirm = (props) => {
  const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } =
    props;

  const confirmDelete = async (id) => {
    let res = await DeleteUser(dataUserDelete.id);
    if (res && +res.statusCode === 204) {
      toast.success("Delete user success!!!");
      handleClose();
      handleDeleteUserFromModal(dataUserDelete);
    } else {
      toast.error("Error delete user!!!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="body-add-new">
          Are you sure to delete this user? <br />
          email = <b>{dataUserDelete.email}</b>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={confirmDelete}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalConfirm;
