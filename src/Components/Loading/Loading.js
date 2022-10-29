import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react';
const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            {/* <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' />
            </Box> */}

            <img src="https://i.ibb.co/T4X6fMV/loader.gif" alt="" />
        </div>
    );
};

export default Loading;