import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { updateUser } from "../services/UserService";
const ModalEditUser = (props) => {
  const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleEditUser = async () => {
    let res = await updateUser(name, job);
    if (res && res.updatedAt) {
      handleEditUserFromModal({
        first_name: name,
        id: dataUserEdit.id,
      });
      handleClose();
      toast.success("Update user success!!");
      setJob("");
    }
  };

  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name);
    }
  }, [dataUserEdit]);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="body-add-new">
          <div>
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Job</label>
            <input
              type="text"
              className="form-control"
              value={job}
              onChange={(event) => setJob(event.target.value)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditUser}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalEditUser;
