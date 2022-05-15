/** @format */

import React, { useEffect } from "react";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/video.action";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import SkeletonVideos from "../../components/skeleton/SkeletonVideos";
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );
  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };
  return (
    <Container>
      <CategoriesBar />
      <Row>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          className="row"
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
        >
          {!loading
            ? videos.map((video, index) => {
                return (
                  <Col key={index} lg={3} md={4}>
                    <Video video={video} key={video.id} />
                  </Col>
                );
              })
            : [
                ...Array(20).map(() => {
                  return (
                    <Col lg={3} md={4}>
                      <SkeletonVideos />
                    </Col>
                  );
                }),
              ]}
        </InfiniteScroll>
      </Row>
    </Container>
  );
};

export default HomeScreen;
