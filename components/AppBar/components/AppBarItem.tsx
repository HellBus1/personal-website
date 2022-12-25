import { Link, SxProps, Theme, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ReactElement } from "react";

interface AppBarItemProps {
  itemTitle: string;
  index: number;
  path: string;
}

const AppBarItem = (props: AppBarItemProps): ReactElement => {
  const router = useRouter()

  return <Link key={props.index} sx={{
    ml: props.index > 0 ? 3 : 0,
    ...classes.appBarItemContainer,
    ...(router.pathname != props.path && {
      '&:hover:before': {
        visibility: 'visible',
        width: '100%',
      }
    })
  }} href={props.path}>
    <Typography sx={{
      ...classes.appBarItemText,
      ...(router.pathname == props.path && {
        color: 'action.selected',
        fontWeight: '600',
        textDecoration: 'underline',
        textUnderlineOffset: '18.8px',
        textUnderlinePosition: 'under',
        textDecorationThickness: '2px'
      }),
    }}>{props.itemTitle}</Typography>
  </Link>;
};

const classes: Record<string, SxProps<Theme>> = {
  appBarItemContainer: {
    color: 'white',
    position: 'relative',

    '&:before': {
      content: "''",
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-9px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: '#323f52',
      transformOrigin: 'center',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
    },
  },
  appBarItemContainerUndescore: {

  },
  appBarItemText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: '0.875rem',
    cursor: 'pointer',
    color: '#323f52'
  },
  appBarItemTextSelected: {

  }
};

export default AppBarItem;