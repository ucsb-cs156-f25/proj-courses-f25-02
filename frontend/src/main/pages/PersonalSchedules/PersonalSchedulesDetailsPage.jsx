import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import PersonalSchedulesTable from "main/components/PersonalSchedules/PersonalSchedulesTable";
import PersonalSectionsTable from "main/components/PersonalSections/PersonalSectionsTable";
import { useBackend } from "main/utils/useBackend";
import { Button, Row, Col } from "react-bootstrap";
import { useCurrentUser } from "main/utils/currentUser";
import PersonalSchedulePanel from "main/components/PersonalSchedules/PersonalSchedulePanel";
import { transformToEvents } from "main/utils/dateUtils";

export default function PersonalSchedulesDetailsPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data: currentUser } = useCurrentUser();

  const {
    data: personalSchedule,
    _error,
    _status,
  } = useBackend(
    // Stryker disable all : hard to test for query caching
    [`/api/personalschedules?id=${id}`],
    {
      // Stryker disable next-line all : GET is the default, so changing this to "" doesn't introduce a bug
      method: "GET",
      url: `/api/personalschedules?id=${id}`,
      params: {
        id,
      },
    },
  );

  const { data: personalSection } = useBackend(
    // Stryker disable all : hard to test for query caching
    [`/api/personalSections/all?psId=${id}`],
    {
      method: "GET",
      url: `/api/personalSections/all?psId=${id}`,
      params: {
        id,
      },
    },
  );
  // Stryker restore all

  const backButton = () => {
    return (
      <Button
        variant="primary"
        onClick={() => navigate("/personalschedules/list")}
      >
        Back
      </Button>
    );
  };

  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Personal Schedules Details</h1>

        {personalSchedule && (
          <PersonalSchedulesTable
            personalSchedules={[personalSchedule]}
            showButtons={false}
          />
        )}

        <div className="mt-4">
          {/* Sections Header */}
          <Row className="align-items-center mb-3">
            <Col>
              <h2>Sections in Personal Schedule</h2>
            </Col>
          </Row>

          {/* Sections Table */}
          {personalSection && (
            <PersonalSectionsTable
              personalSections={personalSection}
              psId={id}
              currentUser={currentUser}
            />
          )}

          {/* Weekly Schedule */}
          {personalSection && (
            <>
              <Row className="align-items-center mb-3 mt-5">
                <Col>
                  <h2>Weekly Schedule</h2>
                </Col>
              </Row>

              <div className="mt-4">
                <PersonalSchedulePanel
                  Events={transformToEvents(personalSection)}
                />
              </div>
            </>
          )}
        </div>

        {backButton()}
      </div>
    </BasicLayout>
  );
}
