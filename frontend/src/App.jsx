import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDescriptionIndexPage from "main/pages/CourseDescriptions/CourseDescriptionIndexPage";
import ProfilePage from "main/pages/ProfilePage";
import AdminUsersPage from "main/pages/Admin/AdminUsersPage";
import AdminUpdatesPage from "main/pages/Admin/AdminUpdatesPage";
import AdminLoadSubjectsPage from "main/pages/Admin/AdminLoadSubjectsPage";
import AdminJobsPage from "main/pages/Admin/AdminJobsPage";
import AdminJobLogPage from "main/pages/Admin/AdminJobLogPage";
import DeveloperPage from "main/pages/DeveloperPage"; // route from /developer to DeveloperPage

import { useCurrentUser } from "main/utils/currentUser";

import "bootstrap/dist/css/bootstrap.css";

import ProtectedPage from "main/pages/Auth/ProtectedPage";
import NotFoundPage from "main/pages/Auth/NotFoundPage";
import SignInSuccessPage from "main/pages/Auth/SignInSuccessPage";

import PersonalSchedulesIndexPage from "main/pages/PersonalSchedules/PersonalSchedulesIndexPage";
import PersonalSchedulesCreatePage from "main/pages/PersonalSchedules/PersonalSchedulesCreatePage";
import PersonalSchedulesEditPage from "main/pages/PersonalSchedules/PersonalSchedulesEditPage";
import PersonalSchedulesDetailsPage from "main/pages/PersonalSchedules/PersonalSchedulesDetailsPage";
import PersonalSchedulesWeeklyViewPage from "main/pages/PersonalSchedules/PersonalSchedulesWeeklyViewPage";
import SectionSearchesIndexPageLoggedIn from "main/pages/SectionSearches/SectionSearchesIndexPageLoggedIn";
import SectionSearchesIndexPageNotLoggedIn from "main/pages/SectionSearches/SectionSearchesIndexPageNotLoggedIn";

import CourseOverTimeIndexPage from "main/pages/CourseOverTime/CourseOverTimeIndexPage";
import CourseOverTimeInstructorIndexPage from "main/pages/CourseOverTime/CourseOverTimeInstructorIndexPage";
import CourseOverTimeBuildingsIndexPage from "main/pages/CourseOverTime/CourseOverTimeBuildingsIndexPage";

import GeneralEducationSearchPage from "main/pages/GeneralEducation/Search/GeneralEducationSearchPage";
import CourseDetailsIndexPage from "main/pages/CourseDetails/CourseDetailsIndexPage";

function App() {
  const currentUser = useCurrentUser();

  const homePage = currentUser.loggedIn ? (
    <SectionSearchesIndexPageLoggedIn />
  ) : (
    <SectionSearchesIndexPageNotLoggedIn />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={homePage} />
        <Route
          path="/profile"
          element={
            <ProtectedPage
              component={<ProfilePage />}
              enforceRole={"ROLE_USER"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/login/success"
          element={
            <ProtectedPage
              component={<SignInSuccessPage />}
              enforceRole={"ROLE_USER"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedPage
              component={<AdminUsersPage />}
              enforceRole={"ROLE_ADMIN"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/admin/updates"
          element={
            <ProtectedPage
              component={<AdminUpdatesPage />}
              enforceRole={"ROLE_ADMIN"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/admin/loadsubjects"
          element={
            <ProtectedPage
              component={<AdminLoadSubjectsPage />}
              enforceRole={"ROLE_ADMIN"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/admin/jobs"
          element={
            <ProtectedPage
              component={<AdminJobsPage />}
              enforceRole={"ROLE_ADMIN"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/admin/jobs/logs/:id"
          element={
            <ProtectedPage
              component={<AdminJobLogPage />}
              enforceRole={"ROLE_ADMIN"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/developer"
          element={
            <ProtectedPage
              component={<DeveloperPage />}
              enforceRole={"ROLE_ADMIN"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/personalschedules/list"
          element={
            <ProtectedPage
              component={<PersonalSchedulesIndexPage />}
              enforceRole={"ROLE_USER"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/personalschedules/create"
          element={
            <ProtectedPage
              component={<PersonalSchedulesCreatePage />}
              enforceRole={"ROLE_USER"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/personalschedules/edit/:id"
          element={
            <ProtectedPage
              component={<PersonalSchedulesEditPage />}
              enforceRole={"ROLE_USER"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/personalschedules/details/:id"
          element={
            <ProtectedPage
              component={<PersonalSchedulesDetailsPage />}
              enforceRole={"ROLE_USER"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/personalschedules/weekly/:id"
          element={
            <ProtectedPage
              component={<PersonalSchedulesWeeklyViewPage />}
              enforceRole={"ROLE_USER"}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/coursedescriptions/search"
          element={<CourseDescriptionIndexPage />}
        />
        <Route
          path="/courseovertime/search"
          element={<CourseOverTimeIndexPage />}
        />
        <Route
          path="/courseovertime/buildingsearch/classrooms"
          element={<CourseOverTimeBuildingsIndexPage />}
        />
        <Route
          path="/courseovertime/instructorsearch"
          element={<CourseOverTimeInstructorIndexPage />}
        />
        <Route
          path="/coursedetails/:qtr/:enrollCode"
          element={<CourseDetailsIndexPage />}
        />
        <Route
          path="/generaleducation/search"
          element={<GeneralEducationSearchPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
