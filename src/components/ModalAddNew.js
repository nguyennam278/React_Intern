import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createNewUser } from "../services/UserService";
import { ToastContainer, toast } from "react-toastify";

const ModalAddNew = (props) => {
  const { show, handleClose, handleUpdateTable } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSaveUsers = async () => {
    let res = await createNewUser(name, job);
    if (res && res.id) {
      handleClose();
      setJob("");
      setName("");
      toast.success("Add new user success!");
      handleUpdateTable({ first_name: name, id: res.id });
    } else {
      toast.error("Add new user unsuccess!");
    }
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add new user</Modal.Title>
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
        <Button variant="primary" onClick={handleSaveUsers}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalAddNew;
