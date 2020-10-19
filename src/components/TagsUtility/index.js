import React from "react";
import { Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const TagsStyleResolver = (id) => {
  if (id === "5f86bc611488fc001eea51ae") {
    return { backgroundColor: "red", color: "white" };
  }
  if (id === "5f8a7e4a11e139001eb1d5d2") {
    return { backgroundColor: "blue", color: "white" };
  }
  if (id === "5f7f519ecbab9f001ede0c9b") {
    return { backgroundColor: "green", color: "white" };
  }
  if (id === "5f8a7f6d11e139001eb1d5d6") {
    return { backgroundColor: "purple", color: "white" };
  }
};

export const TagsBuilder = ({tags}) => {
  return (
    <>
      {tags.length > 0 ? (
          <small className="text-muted pb-2" style={{ marginLeft: "1.25rem" }}>
            {tags.map(({ name, slug, id }) => (
              <LinkContainer style={TagsStyleResolver(id)} key={id} to={`/blog/topics/${slug}`}>
                <Badge className="mr-2 p-1 cursor-pointer">
                  {name}
                </Badge>
              </LinkContainer>
            ))}
          </small>
      ) : (
        <></>
      )}
    </>
  );
};
