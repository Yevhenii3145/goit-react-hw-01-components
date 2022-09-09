const getBgColor = isOnline => {
  switch (isOnline) {
    case true:
      return 'online';
    case false:
      return 'offline';
    default:
      return 'offline';
  }
};
export default getBgColor;
