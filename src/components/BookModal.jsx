import LoginModal from "./LoginModal";

export default function BookModal() {
  return (
    /* Need to implement Authentication and Authorization to book.If not logged in load the LoginModal else show BookModel By using Conditional rendering.
    We can initialise authentication state from cookie and use redux slice to initialize the state from cookies.Then check if
     user logged in  */
    <LoginModal />
  );
}
