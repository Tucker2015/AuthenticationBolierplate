import CookieConsent from "react-cookie-consent";

export default function Cookies() {
  return (
    <>
      <CookieConsent
        enableDeclineButton
        buttonText="I Accept"
        declineButtonText="I Decline"
        onDecline=""
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
        <div className="cookieText">
          <h4>This website uses cookies to enhance the user experience. </h4>
          <p>Please Accept if you are ok with this.</p>
        </div>
      </CookieConsent>
    </>
  );
}
