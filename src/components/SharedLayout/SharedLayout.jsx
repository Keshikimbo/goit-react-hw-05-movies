import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "shared/Loader/Loader";
import { Container, Header, Link } from "./SharedLayout.styled";

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};