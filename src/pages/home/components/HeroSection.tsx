import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { heroimg } from "assets/images";
import { Col } from "components/elements";
import AppImage from "components/elements/AppImage";
import { PAGES } from "constants/app";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "redux/root-reducer";
import { AppDispatch } from "redux/root-store";
import { setShowAuthModal } from "redux/ui/slice";
import request from "utils/request";
import TripCard from "./TripCard";
import ExportResultModal from "components/ExportResultModal";
import ConfirmDeleteModal from "components/ConfirmDeleteModal";
import { setCurrentPlanId } from "redux/apps/slice";
import { toast } from "react-toastify";

const HeroSection = () => {
  const currentUser =
    useSelector((state: RootState) => state.apps.userInfo) || false;
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  const [trips, setTrips] = useState([]);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteExportModal] =
    useState(false);
  const [currentExportData, setCurrentExportData] = useState({
    speadTitle: "",
    spreadsheetId: "",
    spreadsheetUrl: "",
  });
  const [deletingTripId, setDeletingTripId] = useState();

  const handleCreateNewTrip = () => {
    if (!currentUser) {
      dispatch(setShowAuthModal(true));
    } else {
      history.push(`${PAGES.NEWTRIP_PAGE}`);
    }
  };

  const fetchTrip = useCallback(async () => {
    const response = await request.get(`/plan/user/${currentUser.userId}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    setTrips(response.data);
  }, [currentUser.userId]);

  useEffect(() => {
    fetchTrip();
  }, [fetchTrip]);

  useEffect(() => {
    if (!currentUser) {
      setTrips([]);
    }
  }, [currentUser]);

  const handleExportTrip = async (tripId: any) => {
    const response = await request.post(`/plan/export/${tripId}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    setCurrentExportData(response.data);
    setShowExportModal(true);
  };

  const handleDeleteTrip = async (tripId: any) => {
    try {
      await request.delete(`/plan/${tripId}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      setShowConfirmDeleteExportModal(false);
      fetchTrip();
      toast.success("Trip deleted successfully!");
    } catch (error) {
      console.error("Error deleting trip:", error);
      toast.error("Failed to delete trip. Please try again later.");
    }
  };

  const handleClickTripCard = async (tripId: any) => {
    await dispatch(setCurrentPlanId(tripId));
    history.push(`${PAGES.PLAN_DETAILS}/${tripId}`);
  };

  return (
    <Col
      height={{ base: "max-content", "2xl": "calc(100vh - 80px)" }}
      alignItems="center"
    >
      <ConfirmDeleteModal
        visible={showConfirmDeleteModal}
        onClose={() => setShowConfirmDeleteExportModal(false)}
        onConfirm={() => handleDeleteTrip(deletingTripId)}
      />
      <ExportResultModal
        visible={showExportModal}
        onClose={() => setShowExportModal(false)}
        exportData={currentExportData}
      />
      <Text fontSize="68px" fontWeight="900" textAlign="center" mt={14} mb={6}>
        Your Next Journey, Optimized
      </Text>
      <Text
        color="#616161"
        fontSize="20px"
        fontWeight={400}
        textAlign="center"
        width={{ base: "100%", lg: "60%" }}
      >
        Build, personalize, and optimize your itineraries with our free AI trip
        planner. Designed for vacations, workations, and everyday adventures.
      </Text>
      <Button
        background="#ffdf80"
        color="black"
        borderRadius={30}
        marginTop={10}
        onClick={handleCreateNewTrip}
      >
        Create a new trip
      </Button>
      <Col width="80%" mt={20}>
        {trips.length === 0 ? (
          <AppImage url={heroimg} />
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {trips?.map((trip) => (
              <TripCard
                key={trip.id}
                title={trip.startDate}
                description={trip.types}
                onClickTrip={() => handleClickTripCard(trip.id)}
                onExport={() => handleExportTrip(trip.id)}
                onDelete={() => {
                  setDeletingTripId(trip.id);
                  setShowConfirmDeleteExportModal(true);
                }}
              />
            ))}
          </SimpleGrid>
        )}
      </Col>
    </Col>
  );
};

export default HeroSection;
