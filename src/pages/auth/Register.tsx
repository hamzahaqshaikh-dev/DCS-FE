import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

// components
import { VerticalForm, FormInput } from "@/components";

import AuthLayout from "./AuthLayout";

/* bottom links */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-white-50">
          {t("Already have account?")}{" "}
          <Link to={"/auth/login"} className="text-white ms-1">
            <b>{t("Sign In")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

/* social links */
const SocialLinks = () => {
  const socialLinks = [
    {
      variant: "primary",
      icon: "facebook",
    },
    {
      variant: "danger",
      icon: "google",
    },
    {
      variant: "info",
      icon: "twitter",
    },
    {
      variant: "secondary",
      icon: "github",
    },
  ];
  return (
    <>
      <ul className="social-list list-inline mt-3 mb-0">
        {(socialLinks || []).map((item, index) => {
          return (
            <li key={index} className="list-inline-item">
              <Link
                to="#"
                className={classNames(
                  "social-list-item",
                  "border-" + item.variant,
                  "text-" + item.variant
                )}
              >
                <i className={classNames("mdi", "mdi-" + item.icon)}></i>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Register = () => {
  const { t } = useTranslation();

  return (
    <>
      <AuthLayout
        heading="Set up your Password"
      >

        <VerticalForm
          onSubmit={() => { }}
          defaultValues={{}}
        >
          <FormInput
            label={t("Email address")}
            type="email"
            name="email"
            placeholder={t("Enter your email")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("Password")}
            type="password"
            name="password"
            placeholder={t("Enter your password")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("Confirm Password")}
            type="password"
            name="confirmPassword"
            placeholder={t("Re-Enter your password")}
            containerClass={"mb-5"}
          />
          <div className="text-center d-grid">
            <Button variant="primary" type="submit" className="fs-4 fw-bold">
              {t("Set up Password")}
            </Button>
          </div>
        </VerticalForm>

        <div className="text-center">
          <p className="mt-3 text-muted">{t("Need assistance? ")}<a href="#" className="text-muted underscore">Contact support</a></p>
          {/* <SocialLinks /> */}
        </div>
      </AuthLayout>
    </>
  );
};

export default Register;
