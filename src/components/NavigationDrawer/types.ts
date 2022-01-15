import { SvgIconProps } from '@mui/material';

type M3NavigationDrawerProps = {
  items: NavigationDrawerItems[];
  open?: boolean;
  onClose?: () => void;
};

type NavigationDrawerItems = {
  headline: string;
  items: NavigationDrawerItem[];
} & DividerItem;

type DividerItem = '/';

type BadgeLabelTextProps = {
  text: string | number;
};

interface NavigationDrawerItem {
  label: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  active?: boolean;
  badgeLabel?: string;
  divider?: boolean;
}

export {
  M3NavigationDrawerProps,
  NavigationDrawerItems,
  NavigationDrawerItem,
  DividerItem,
  BadgeLabelTextProps,
};
