import React from 'react';
import PropTypes from 'prop-types';
import TouchRipple, {
  TouchRippleActions,
} from '@mui/material/ButtonBase/TouchRipple';
import { CardRoot, M3CardProps } from './CardParts';

const Card = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<M3CardProps>
>(function Card(props, ref) {
  const rippleRef = React.useRef<TouchRippleActions | null>(null);
  // eslint-disable-next-line react/prop-types
  const { children, clickable, ...other } = props;
  const ownerState = { ...other, clickable };

  if (clickable) {
    const onRippleStart = (e: React.SyntheticEvent) => {
      rippleRef.current?.start(e);
    };
    const onRippleStop = (e: React.SyntheticEvent) => {
      rippleRef.current?.stop(e);
    };
    return (
      <CardRoot
        onMouseDown={onRippleStart}
        onMouseUp={onRippleStop}
        ref={ref}
        ownerState={ownerState}
        {...other}
      >
        <TouchRipple ref={rippleRef} center={false} />
        {children}
      </CardRoot>
    );
  }
  return (
    <CardRoot ref={ref} ownerState={ownerState} {...other}>
      {children}
    </CardRoot>
  );
}) as React.ForwardRefExoticComponent<M3CardProps>;

Card.defaultProps = {
  clickable: false,
};

Card.propTypes = {
  clickable: PropTypes.bool,
};

export default Card;
