import { Grid } from 'react-loader-spinner';
import { Center } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Center mt="12px">
      <Grid
        height="80"
        width="80"
        color="#3186ce"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Center>
  );
};

export default Loader;
