import { Alert, Col, Row } from "antd";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CardContent } from "../card/content-card";
import { CardsPlaceholder } from "../loader/cards-placeholder";

interface Props {
  isLoading: boolean;
  publication: Array<any>;
  avatar: string;
  username: string;
  isProfile: boolean;
}

export function PublicationProfile({
  isLoading,
  publication,
  avatar,
  username,
  isProfile,
}: Props) {
  return (
    <>
      <Row justify="center">
        <Col xs={23} md={21}>
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            dataLength={publication.length}
            next={() => false}
            hasMore={true}
            loader={<CardsPlaceholder isLoading={isLoading} count={5} />}
          >
            {publication.length ? (
              publication.map((photo) => (
                <CardContent
                  avatar={avatar}
                  username={username}
                  isProfile={isProfile}
                  Photo={photo}
                  key={photo.id}
                >
                  <LazyLoadImage
                    alt={photo.alt_description}
                    height="auto"
                    src={photo.urls.small}
                    effect="blur"
                    loading="lazy"
                    width="100%"
                  />
                </CardContent>
              ))
            ) : (
              <Alert
                type="info"
                message={`No hay publicaciones de: ( ${username} )`}
              />
            )}
          </InfiniteScroll>
        </Col>
      </Row>
    </>
  );
}
