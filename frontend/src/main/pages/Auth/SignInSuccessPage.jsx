import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import { useNavigate } from "react-router-dom";

export default function SignInSuccessPage() {
  const storedReturn = sessionStorage.getItem("redirect");
  const navigation = useNavigate();

  if (storedReturn) {
    sessionStorage.removeItem("redirect"); // Clear it after reading
    navigation(storedReturn);
  } else {
    navigation("/");
  }

  return (
    <BasicLayout>
      <h1>Redirecting...</h1>
    </BasicLayout>
  );
}
