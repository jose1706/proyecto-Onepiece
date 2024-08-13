import { useRouteError } from "react-router-dom";
import '../Styles/ErrorPage.css'
import { useEffect } from "react";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
    return () => {
        document.body.style.background = "inherit";;
    };
  }, []);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}