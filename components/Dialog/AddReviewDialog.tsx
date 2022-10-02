// React & dependencies
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

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
  Typography,
} from "@mui/material";

// My components
import RatingInput from "../RatingInput";

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
  resetState: () => void;
  nameFound: boolean;
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
  resetState,
  nameFound,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{ color: "#f6c3a7" }}>
        {reviewSaved
          ? "Gracias por tu evaluación!"
          : confirmingName
          ? "Confirma tu nombre"
          : nameAndRutMatch
          ? "Ingresa tu evaluación"
          : "Ingresa tu rut"}
      </DialogTitle>

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
              // disabled={name.length > 3 ? true : false}
              sx={{
                color: "#8fc4c8",
              }}
              variant='outlined'
              value={userId}
            />
            {name.length > 3 && nameFound ? (
              <>
                {!nameAndRutMatch && (
                  <DialogContentText>¿Es este tu nombre?</DialogContentText>
                )}
                <DialogContentText>{name}</DialogContentText>
              </>
            ) : (
              !nameFound &&
              confirmingName && (
                <>
                  <DialogContentText>
                    Al parecer{" "}
                    <Typography
                      variant='body1'
                      color='secondary'
                      sx={{ display: "inline" }}
                    >
                      no pudimos encontrarte por tu rut
                    </Typography>
                    . Por favor, ingresa tu nombre completo.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Nombres y apellidos'
                    type='text'
                    onChange={handleChangeName}
                    variant='standard'
                    sx={{
                      pr: "2vw",
                    }}
                    value={name}
                    fullWidth
                  />
                </>
              )
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
        {confirmingName && !reviewSaved && nameFound ? (
          <>
            <Button
              onClick={() => {
                setConfirmingName(false);
                setNameAndRutMatch(false);
                resetState();
              }}
            >
              No, es mi nombre.
            </Button>
            <Button
              onClick={() => {
                setConfirmingName(false);
                setNameAndRutMatch(true);
              }}
            >
              Si, es mi nombre.
            </Button>
          </>
        ) : nameAndRutMatch ? (
          <>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleSave}>Publicar</Button>
          </>
        ) : !reviewSaved && !nameFound && !confirmingName ? (
          <>
            <Button
              onClick={() => {
                verifyRut(userId);
              }}
              disabled={userId.length < 6}
            >
              Validar rut
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                setNameAndRutMatch(true);
                setConfirmingName(false);
              }}
              disabled={userId.length < 6}
            >
              Siguiente
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default AddReviewDialog;
