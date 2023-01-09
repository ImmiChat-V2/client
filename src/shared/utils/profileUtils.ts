export const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

export const getInitials = (name: string) => {
  return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`.toUpperCase();
};

export const getAvatarProps = (name: string) => {
  return {
    sx: {
      bgcolor: getRandomColor(),
    },
    children: getInitials(name),
  };
};
