import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="container">
      <h1>Oops!!</h1>
      <h3>Page Not Found!</h3>
      <h5>Please check your Url.</h5>
      <div className="error">
        <span>
          {err.status} : {err.statusText}
        </span>
      </div>
    </div>
  );
};

export default Error;
