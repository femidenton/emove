import { StyledEditAndDeleteModal } from "./styles/editAndDelete.styled";
import { FaEdit, FaTrash } from "react-icons/fa";

const EditAndDelete = () => {
    return (
        <StyledEditAndDeleteModal>
            <ul>
                <li>
                    <FaEdit className="m-icon" />
                    Edit
                </li>
                <li>
                    <FaTrash className="m-icon" />
                    Delete
                </li>
            </ul>
        </StyledEditAndDeleteModal>
    );
}

export default EditAndDelete;