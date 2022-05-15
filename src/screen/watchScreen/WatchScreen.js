/** @format */

import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import "./_watchScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import VideoHorizontal from "../../components/videoHorizontal/videoHorizontal";
import Comments from "../../components/comments/comments";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  getRelatedVideos,
  getVideoById,
} from "../../redux/actions/video.action";
const WatchScreen = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { videos, loading: relatedVideoLoading } = useSelector(
    (state) => state.relatedVideos
  );

  const { video, loading } = useSelector((state) => state.selectedVideo);
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder={0}
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading...</h6>
        )}

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!relatedVideoLoading ? (
          videos
            ?.filter((video) => video.snippet)

            .map((video, index) => (
              <VideoHorizontal video={video} key={index} />
            ))
        ) : (
          <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="130px" count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
