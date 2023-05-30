import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Relavance
      </MenuButton>
      <MenuList>
        {/* {data.map((platform) => ( */}
        <MenuItem>Relavance</MenuItem>
        <MenuItem>Relavance</MenuItem>
        <MenuItem>Relavance</MenuItem>
        {/* ))} */}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
