import { PropTypes } from "prop-types";
import { useEffect } from "react";

export default function Home(props) {
  const { name, time, active, setSearchState } = props;
  const activeStyle = { color: "green" };
  const inactiveStyle = { color: "red" };

  let nms = Array.isArray(name) ? name.join(" and ") : name;

  useEffect(() => {
    setSearchState(true);
  });

  return (
    <div>
      <h2>Welcome {nms} to the Home page</h2>
      <p>
        The time is {new Date(time).toLocaleTimeString()} and the website is{" "}
        <strong>
          <span style={active ? activeStyle : inactiveStyle}>
            {active ? "active" : "NOT active"}
          </span>
        </strong>
      </p>
      <br />
      {props.children}
    </div>
  );
}
Home.defaultProps = {
  time: Date.now(),
};
Home.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  time: PropTypes.number,
  active: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
