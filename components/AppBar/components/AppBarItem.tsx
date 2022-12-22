import { Box } from '@mui/material';
import { ReactElement } from "react";

interface AppBarItemProps {
  itemTitle: string;
  index: number,
}

const AppBarItem = (props: AppBarItemProps): ReactElement => {
  return <Box sx={{
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: '0.875rem',
    ml: props.index > 0 ? 3 : 0
  }}>{props.itemTitle}</Box>;
};

export default AppBarItem;