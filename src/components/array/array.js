import React from 'react';
import "./array.css";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WarningIcon from '@material-ui/icons/Warning';

export default function Array() {
  const [data, setData] = React.useState([
    {
      id: 11,
      name: 'Naveen',
      school: 'vasavi'
    },
    {
      id: 12,
      name: 'siva',
      school: 'chinmaya'
    },
    {
      id: 13,
      name: 'satish',
      school: 'cri'
    }
  ])


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);


  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log(index);
    let allItems = [...data];
    allItems.splice(index, 1);
    setData(allItems);
    setOpen(false);
  }

  const handleOpen = (index) => {
    setOpen(true);
    setIndex(index);
  }


  return (
    <div>
      <h3>Array Task</h3>

      {data.map((item, index) => {
        return (
          <div key={item.id} className="array">
            <h3>{item.name}</h3>
            <p>{item.school}</p>
            <button onClick={() => handleOpen(index)}>Delete</button>
          </div>
        )
      })}

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"><WarningIcon style={{ color: "red", marginBottom: -4 }} /> {"Warning !"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure to delete
            </DialogContentText>
          </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="action" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}