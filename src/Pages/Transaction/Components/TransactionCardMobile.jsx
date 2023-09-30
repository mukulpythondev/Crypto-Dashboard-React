import React from 'react';
import { Box, Text, Tag } from '@chakra-ui/react';

const TransactionCardMobile = ({ item, statusColor }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      boxShadow="md"
      bg="white"
    >
      <Text fontSize="sm" fontWeight="medium">
        Id: {item.id}
      </Text>
      <Text fontSize="sm" fontWeight="medium">
        Date & Time: {item.date} {item.time}
      </Text>
      <Text fontSize="sm" fontWeight="medium">
        Type: {item.type.name} - {item.type.tag}
      </Text>
      <Text fontSize="sm" fontWeight="medium">
        Amount: {item.amount}
      </Text>
      <Tag
        bg={statusColor[item.status]}
        color="white"
        borderRadius="full"
      >
        {item.status}
      </Tag>
    </Box>
  );
};

export default TransactionCardMobile;
