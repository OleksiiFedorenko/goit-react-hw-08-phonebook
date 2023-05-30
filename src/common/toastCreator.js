const basicProps = {
  variant: 'subtle',
  position: 'top',
  isClosable: true,
};

export const success = message => {
  return {
    title: message,
    status: 'success',
    ...basicProps,
  };
};

export const error = message => {
  return {
    title: message,
    status: 'error',
    ...basicProps,
  };
};

export const warning = message => {
  return {
    title: message,
    status: 'warning',
    ...basicProps,
  };
};
