import React from "react";
import Container from "./container/Container";
import { SearchArea } from "./searchArea/SearchArea1";



export const BodyContent: React.FC = () => {
  return (
    <div>
      <Container>
        <SearchArea />
      </Container>
    </div>
  );
};
