import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  //destructuing the props

  const onClick = () => {
    console.log("Click");
  };
 
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  //if nothing sent by props this will be the default
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired, //makes the title prop of type string and requierd
};

export default Header;
