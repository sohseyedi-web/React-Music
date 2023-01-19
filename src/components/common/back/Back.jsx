import "./Back.scss";

const Back = ({open, setOpen}) => {
    return open && <div className="back" onClick={() => setOpen(!open)}></div>;
};

export default Back;