import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import { Alert, Row, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function PromptSignInPage() {
  const location = useLocation();

  const setRedirect = () => {
    sessionStorage.setItem("redirect", location.pathname);
  };

  return (
    <BasicLayout>
      <Row className="p-3">
        <Alert variant={"danger"}>
          Please sign in before accessing this page.
        </Alert>
      </Row>
      <Row className="p-3">
        <Button
          href="/oauth2/authorization/google"
          onClick={setRedirect}
        >
          Log In with Google
        </Button>
      </Row>
    </BasicLayout>
  );
}
