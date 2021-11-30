import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { postData } from "../../componentAPI";

const GridControls = (props) => {
  const navigate = useNavigate();

  const deleteCandidate = () => {
    const selectedIds = props.selectedCandidatesValues.map((val) => val.id);
    const data = {
      selectedIds,
    };

    postData("deleteCandidates", data).then(() => {
      props.getCandidates();
    });
  };

  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          endIcon={<AddCircleOutlineIcon />}
          onClick={() => {
            navigate("/registerCandidates");
          }}
        >
          Register
        </Button>
        <Button variant="contained" endIcon={<EditIcon />}>
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={deleteCandidate}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Stack>
    </div>
  );
};

export default GridControls;
