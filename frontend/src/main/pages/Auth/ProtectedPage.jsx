import { hasRole } from "main/utils/currentUser";
import AccessDeniedPage from "main/pages/Auth/AccessDeniedPage";
import PromptSignInPage from "main/pages/Auth/PromptSignInPage";

export default function ProtectedPage({ component, currentUser, enforceRole }) {
  // Handle loading state - show nothing while checking auth
  if (currentUser.initialData) {
    return null;
  }

  // Check if user has required role
  if (hasRole(currentUser, enforceRole)) {
    return <>{component}</>;
  } else if (!currentUser.loggedIn) {
    // Not logged in - prompt to sign in
    return <PromptSignInPage />;
  } else {
    // Logged in but insufficient permissions
    return <AccessDeniedPage />;
  }
}
