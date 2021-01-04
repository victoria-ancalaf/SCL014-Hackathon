import React, {useState} from 'react';
import { ThemeProvider, withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import themeGeo from '../Form/ThemeGeo'

const useStyle = makeStyles({
  contentGeo: {
    borderRadius: 25,
  },
  
})


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(5),

  },
 
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1), 
  },
}))(MuiDialogActions);

export default function Geolocation() {

  const classesGeo = useStyle()
  const [open, setOpen] = useState(true);

  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={themeGeo}> 
     
   
      <Dialog className={classesGeo.contentGeo}onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      
        <DialogContent>
            <h3> Vamos donde tu vayas</h3>
          <Typography gutterBottom>
            Queremos ofrecerte los mejores servicios en funcion de tu ubicacion, por lo que es necesario accedes a tu ubicacion incluso cuando la aplicacion esta cerrada o no esta en uso
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Activar
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
  
    </ThemeProvider>  
  );
}


