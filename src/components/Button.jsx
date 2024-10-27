const Button = ({ name,icon, isBeam = false, containerClass,iconClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
      <p className={`${iconClass}`}>{icon}</p>
    </button>
  );
};

export default Button;
