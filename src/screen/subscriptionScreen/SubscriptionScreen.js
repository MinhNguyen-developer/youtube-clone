/** @format */

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import VideoHorizontal from "../../components/videoHorizontal/videoHorizontal";
import { getSubScribeChannels } from "../../redux/actions/video.action";
import "./_subscription.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const SubscriptionScreen = () => {
  const dispatch = useDispatch();
  const { loading, videos } = useSelector((state) => state.subscriptionChannel);
  useEffect(() => {
    dispatch(getSubScribeChannels());
  }, [dispatch]);
  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionScreen;
