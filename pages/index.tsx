// React & dependencies
import { FC, useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  setDoc,
  doc,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";

import { useRouter } from "next/router";

// Material Components
import {
  Alert,
  AlertColor,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Fab,
  Snackbar,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// My components
import { db } from "../firebaseConfig";

import Header from "../components/Header";
import ReviewsSummary from "../components/ReviewsSummary";
import ReviewCard from "../components/ReviewCard";
import RatingInput from "../components/RatingInput";
import api from "../pages/api/rut";

// Queries & Mutations

// Typescript
import { fakeReviews } from "../utils/dummyData";
import { Review } from "../interfaces";
import AddReviewDialog from "../components/AddReviewDialog";
import axios from "axios";

// stars color: #f6c3a7
// divider color: #cea99f

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const [reviewsAverage, setReviewsAverage] = useState(0);
  const [reviews, setReviews] = useState<DocumentData[]>([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  const [reviewScore, setReviewScore] = useState<number | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationSeverity, setNotificationSeverity] =
    useState<AlertColor>("info");
  const [confirmingName, setConfirmingName] = useState(false);
  const [nameAndRutMatch, setNameAndRutMatch] = useState(false);
  const [validRut, setValidRut] = useState(false);
  const [reviewSaved, setReviewSaved] = useState(false);

  // handlers
  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleChangeUserId = (e: any) => {
    setUserId(e.target.value);
  };
  const handleChangeReviewMessage = (e: any) => {
    setReviewMessage(e.target.value);
  };

  const resetState = () => {
    setName("");
    setReviewScore(0);
    setReviewMessage("");
    setNameAndRutMatch(false);
    setConfirmingName(false);
  };

  const calculateReviewsAverage = () => {
    if (reviews.length) {
      let reviewsTotal = 0;
      const reviewsCount = reviews.length;

      reviews.map((rev) => {
        reviewsTotal = reviewsTotal + rev.reviewScore;
      });

      setReviewsAverage(() => reviewsTotal / reviewsCount);
    } else {
      getReviews();
    }
  };

  // let reviews: DocumentData[] = [];

  const getReviews = () => {
    setLoading(true);
    const collectionRef = collection(db, "reviews");

    const q = query(collectionRef, orderBy("creation_date", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setReviews(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    });

    setLoading(false);

    return unsubscribe;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddReviewCTA = () => {
    setOpen(true);
  };

  const verifyRut = async (userId: string) => {
    if (userId.length > 6) {
      try {
        const validateRut = await axios.get(
          `https://api.libreapi.cl/rut/activities?rut=${userId}`
        );
        console.log(validateRut);

        setName(validateRut.data.data.name);
        setConfirmingName(true);
        console.log(validateRut);
        setValidRut(true);
      } catch (error) {
        console.log(error);

        setReviewSaved(false);
        setNotificationSeverity("error");
        setNotificationMessage("Revisa tu rut.");
        setShowNotification(true);
      }
    }
  };

  const handleSave = async () => {
    if (userId.length > 3 && name.length > 3 && reviewMessage.length > 8) {
      verifyRut(userId);

      const newReview = {
        name,
        userId,
        reviewMessage,
        reviewScore,
        creation_date: Date.now(),
      };

      try {
        await setDoc(doc(db, "reviews", userId), newReview, {
          merge: true,
        });

        setNotificationSeverity("success");
        setNotificationMessage("Su evaluación fue guardada exitosamente.");
        setShowNotification(true);
        setReviewSaved(true);
        resetState();
        getReviews();
        setTimeout(() => {
          setOpen(false);
          setReviewSaved(false);
        }, 3500);
      } catch (error) {
        console.log(error);
        setReviewSaved(false);
        setNotificationSeverity("error");
        setNotificationMessage(
          "Algo salió mal. Por favor intentalo nuevamente."
        );
        setShowNotification(true);
      }
    } else {
      setReviewSaved(false);
      setNotificationSeverity("error");
      setNotificationMessage(
        "Por favor ingresa un nombre y rut válidos además de un comentario"
      );
      setShowNotification(true);
    }
  };

  useEffect(() => {
    getReviews();
  }, [reviewSaved]);

  useEffect(() => {
    calculateReviewsAverage();
  }, [reviews]);

  if (loading) {
    return (
      <Box display='flex' flexDirection='column' alignItems='center'>
        <CircularProgress />
      </Box>
    );
  } else
    return (
      <>
        {/* Main container */}
        <Box display='flex' flexDirection='column' justifyContent='center'>
          <Header />
          <ReviewsSummary reviewsAverage={reviewsAverage} />

          {/* ADD REVIEW CTA */}
          <Divider>
            <Fab
              sx={{ backgroundColor: "#8fc4c8", color: "gray" }}
              aria-label='add'
              onClick={() => handleAddReviewCTA()}
            >
              <AddIcon />
            </Fab>
          </Divider>

          {/* ADD REVIEW FORM */}
          <AddReviewDialog
            setConfirmingName={setConfirmingName}
            userId={userId}
            nameAndRutMatch={nameAndRutMatch}
            setNameAndRutMatch={setNameAndRutMatch}
            confirmingName={confirmingName}
            verifyRut={verifyRut}
            name={name}
            open={open}
            handleClose={handleClose}
            reviewSaved={reviewSaved}
            reviewScore={reviewScore}
            setReviewScore={setReviewScore}
            handleChangeName={handleChangeName}
            handleChangeUserId={handleChangeUserId}
            handleChangeReviewMessage={handleChangeReviewMessage}
            handleSave={handleSave}
          />

          <Box>
            {/* Reviews with comments map */}

            {reviews.length > 0 &&
              reviews.map((rev) => {
                return (
                  <ReviewCard
                    key={rev.userId + rev.reviewMessage}
                    name={rev.name}
                    rut={rev.userId}
                    text={rev.reviewMessage}
                    rating={rev.reviewScore}
                  />
                );
              })}
          </Box>
          <Snackbar
            open={showNotification}
            onClose={() => setShowNotification(false)}
            autoHideDuration={4000}
          >
            <Alert severity={notificationSeverity}>{notificationMessage}</Alert>
          </Snackbar>
        </Box>
      </>
    );
};
export default HomeScreen;
