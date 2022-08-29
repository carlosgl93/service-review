// React & dependencies
import { Dispatch, FC, SetStateAction, useState } from "react";

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
  setConfirmingName: Dispatch<SetStateAction<boolean>>;
  userId: string;
  nameAndRutMatch: boolean;
  setNameAndRutMatch: Dispatch<SetStateAction<boolean>>;
  confirmingName: boolean;
  verifyRut: (userId: string) => Promise<void>;
  name: string;
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
  setConfirmingName,
  userId,
  nameAndRutMatch,
  setNameAndRutMatch,
  confirmingName,
  verifyRut,
  name,
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
      ) : confirmingName ? (
        <DialogTitle>Confirma tu nombre</DialogTitle>
      ) : nameAndRutMatch ? (
        <DialogTitle>Ingresa tu evaluación</DialogTitle>
      ) : (
        <DialogTitle>Ingresa tu rut.</DialogTitle>
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
          // first step enter rut
          // second step, ask user if the name from response is his/her name
          // third step, let the user set a rating and comment
          <>
            <TextField
              autoFocus
              margin='dense'
              id='userId'
              label='Rut: 15.532.234-k'
              type='text'
              onChange={handleChangeUserId}
              variant='standard'
              disabled={name.length > 3 ? true : false}
            />
            {name.length > 3 && (
              <>
                {nameAndRutMatch ? (
                  <DialogContentText>
                    Ingresa tu calificación y un comentario, por favor.
                  </DialogContentText>
                ) : (
                  <DialogContentText>¿Es este tu nombre?</DialogContentText>
                )}

                <TextField
                  autoFocus
                  margin='dense'
                  id='name'
                  label='Nombre y apellido'
                  type='text'
                  onChange={handleChangeName}
                  variant='standard'
                  sx={{
                    pr: "2vw",
                  }}
                  value={name}
                  fullWidth
                  disabled={name.length > 3 ? true : false}
                />
              </>
            )}

            {nameAndRutMatch && confirmingName == false && (
              <>
                <DialogContentText>
                  Por favor, Ingresa una nota y un comentario
                </DialogContentText>
                <RatingInput
                  reviewScore={reviewScore}
                  setReviewScore={setReviewScore}
                />
                <Box
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                ></Box>

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
          </>
        )}
      </DialogContent>

      <DialogActions>
        {confirmingName && !reviewSaved ? (
          <>
            <Button
              onClick={() => {
                setNameAndRutMatch(false);
              }}
            >
              No es mi nombre.
            </Button>
            <Button
              onClick={() => {
                setConfirmingName(false);
                setNameAndRutMatch(true);
              }}
            >
              Si es mi nombre.
            </Button>
          </>
        ) : nameAndRutMatch ? (
          <>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleSave}>Publicar</Button>
          </>
        ) : !reviewSaved ? (
          <>
            <Button
              onClick={() => {
                verifyRut(userId);
              }}
            >
              Validar rut
            </Button>
          </>
        ) : (
          ""
        )}
      </DialogActions>
    </Dialog>
  );
};
export default AddReviewDialog;
