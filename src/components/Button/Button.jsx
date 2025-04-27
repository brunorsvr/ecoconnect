const Button = ({ children, onClick, className, href, type = "button" }) => {
  if (href) {
    return (
      <a
        href={href}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;