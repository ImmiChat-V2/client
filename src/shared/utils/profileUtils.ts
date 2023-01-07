export const getRandomColor = (string: string) => {
  let hash = 0;

  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

export const getInitials = (name: string) => {
  return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`.toUpperCase();
};

export const getAvatarProps = (name: string) => {
  return {
    sx: {
      bgcolor: getRandomColor(name),
    },
    children: getInitials(name),
  };
};
