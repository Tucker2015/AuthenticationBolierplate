import CookieConsent from "react-cookie-consent";

export default function Cookies() {
  return (
    <>
      <CookieConsent
        enableDeclineButton
        buttonText="I Accept"
        cookieName="myAwesomeCookieName2"
        disableStyles={true}
        expires={150}
        containerClasses="cookieJar"
        buttonClasses="btnJar"
        declineButtonClasses="btnJar"
        flipButtons
        onDecline={() => {
          alert("nay!");
        }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}
