import React, {useState} from 'react';
import { AlertColor, Snackbar as Cont} from '@mui/material';
import Alert from './Alert';

type SnackbarProps = {
  open: boolean,
  message: string,
  hide: number,
  severity ?: AlertColor,
}
export default function Snackbar(props: SnackbarProps) {
  const [open, setOpen] = useState<boolean>(props.open)

  const handleClose = ()=>{
    setOpen(false);
}

return (
<Cont open={open} autoHideDuration={props.hide * 1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity ? props.severity : 'success'} sx={{ width: '100%' }}>
          {props.message}
        </Alert>
</Cont>

  )
}
