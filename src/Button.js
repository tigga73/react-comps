const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  icon,
}) => {
  const classesBase = [
    { 'border-blue-500 bg-blue-500': primary },
    { 'border-gray-900 bg-gray-900': secondary },
    { 'border-green-500 bg-green-500': success },
    { 'border-yellow-400 bg-yellow-400': warning },
    { 'border-red-500 bg-red-500': danger },
    { 'rounded-full': rounded },
    { 'bg-transparent': outline },
    { 'text-blue-500': outline && primary },
    { 'text-white': !outline && primary },
    { 'text-gray-900': outline && secondary },
    { 'text-white': !outline && secondary },
    { 'text-green-500': outline && success },
    { 'text-white': !outline && success },
    { 'text-yellow-400': outline && warning },
    { 'text-white': !outline && warning },
    { 'text-red-500': outline && danger },
    { 'text-white': !outline && danger },
  ];

  let listaUtilizada = '';

  for (const obj of classesBase) {
    const keys = Object.keys(obj);
    listaUtilizada += keys.filter((key) => obj[key]).join(' ') + ' ';
  }

  return (
    <button
      className={`px-3 py-1.5 border flex items-center ${listaUtilizada}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVaritionValue: ({ primary, secondary, success, warning, danger }) => {
    const countProps =
      Number(primary) +
      Number(secondary) +
      Number(success) +
      Number(warning) +
      Number(danger);

    if (countProps > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning or danger can be true',
      );
    }
  },
};

export default Button;
