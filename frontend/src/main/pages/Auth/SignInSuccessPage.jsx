import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function SignInSuccessPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const refetchAndRedirect = async () => {
      // Invalidate and refetch the current user query
      await queryClient.invalidateQueries({ queryKey: ["current user"] });
      await queryClient.refetchQueries({ queryKey: ["current user"] });

      // navigate after the user data is updated
      const storedReturn = sessionStorage.getItem("redirect");
      if (storedReturn) {
        sessionStorage.removeItem("redirect");
        navigate(storedReturn);
      } else {
        navigate("/");
      }
    };

    refetchAndRedirect();
  }, [navigate, queryClient]);

  return (
    <BasicLayout>
      <h1>Redirecting...</h1>
    </BasicLayout>
  );
}
