// React & dependencies
import { Dispatch, FC, SetStateAction } from "react";

// Material Components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

// My components
import RatingInput from "./RatingInput";

// Queries & Mutations

// Typescript
interface Props {
  open: boolean;
  handleClose: () => void;
  reviewSaved: boolean;
  reviewScore: number | null;
  setReviewScore: Dispatch<SetStateAction<number | null>>;
  handleChangeName: (e: any) => void;
  handleChangeUserId: (e: any) => void;
  handleChangeReviewMessage: (e: any) => void;
  handleSave: () => Promise<void>;
}
const AddReviewDialog: FC<Props> = ({
  open,
  handleClose,
  reviewSaved,
  reviewScore,
  setReviewScore,
  handleChangeName,
  handleChangeUserId,
  handleChangeReviewMessage,
  handleSave,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      {reviewSaved ? (
        <DialogTitle>Gracias por tu evaluación!</DialogTitle>
      ) : (
        <DialogTitle>Ingresa tu nombre y rut.</DialogTitle>
      )}

      <DialogContent>
        {reviewSaved ? (
          <DialogContentText>
            Constanza toma todos los comentarios como retroalimentación
            constructiva.
          </DialogContentText>
        ) : (
          <DialogContentText>
            Asi podemos validar que las opiniones son de personas reales.
          </DialogContentText>
        )}
        {reviewSaved ? (
          ""
        ) : (
          <>
            <RatingInput
              reviewScore={reviewScore}
              setReviewScore={setReviewScore}
            />
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
            >
              <TextField
                autoFocus
                margin='dense'
                id='name'
                label='Nombre y apellido'
                type='text'
                onChange={handleChangeName}
                variant='standard'
                sx={{
                  padding: "0 2vw",
                }}
              />
              <TextField
                autoFocus
                margin='dense'
                id='userId'
                label='Rut'
                type='text'
                onChange={handleChangeUserId}
                variant='standard'
              />
            </Box>

            <TextField
              autoFocus
              margin='dense'
              id='review'
              label='Ingresa tu comentario'
              type='text'
              onChange={handleChangeReviewMessage}
              variant='standard'
              fullWidth
              minRows={5}
              multiline
            />
          </>
        )}
      </DialogContent>

      <DialogActions>
        {reviewSaved ? (
          <Button onClick={handleClose}>Cerrar</Button>
        ) : (
          <>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleSave}>Guardar</Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default AddReviewDialog;
