import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import LogoDark from "@/assets/dsc-images/auth-logo.png";
import LogoLight from "@/assets/images/logo-light.png";

interface AccountLayoutProps {
  helpText?: string;
  bottomLinks?: any;
  isCombineForm?: boolean;
  children?: any;
  heading?: string;
}

const AuthLayout = ({
  helpText,
  bottomLinks,
  heading,
  children,
  isCombineForm,
}: AccountLayoutProps) => {
  useEffect(() => {
    if (document.body)
      document.body.classList.add(
        "authentication-bg",
        "authentication-bg-pattern"
      );

    return () => {
      if (document.body)
        document.body.classList.remove(
          "authentication-bg",
          "authentication-bg-pattern"
        );
    };
  }, []);

  return (
    <>
      <div className="account-pages">
        <div className="container-fluid">
          <Row className="justify-content-between vh-100">   {/* Left Section */}
            <Col md={6} xl={7} className="left-section p-3 p-lg-5 d-flex flex-column justify-content-between text-center text-md-start align-items-center align-items-md-start">
              <img src={LogoDark} alt="Logo" className="mb-0 md-mb-4" width={200} />
              <div>
                <h1 className="welcome-heading">
                  Welcome to <span className="highlighted-text">DCS</span>
                </h1>
                <p className="subtitle">
                  From Vision to Venue <br />
                  <span className="highlight-text2">Streamlined & Impactful.</span>
                </p>
              </div>
            </Col>
            <Col
              md={6}
              lg={6}
              xl={isCombineForm ? 9 : 4}
              className="d-flex flex-column justify-content-center align-items-center me-auto"
            >
              <Card className="bg-pattern">
                <Card.Body className="py-3 px-4">
                  <div className="text-start">
                    <span className="logo-lg">
                      <h1 className="heading">{heading}</h1>
                    </span>
                    <p className="fs-5 mb-4">{helpText}</p>
                  </div>
                  {children}
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </div>
      </div>

      {/* <footer className="footer footer-alt">
        2015 - {new Date().getFullYear()} &copy; UBold theme by{" "}
        <Link to="#" className="text-white-50">
          Coderthemes
        </Link>
      </footer> */}
    </>
  );
};

export default AuthLayout;
