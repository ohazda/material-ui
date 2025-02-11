import { OverrideProps } from '@mui/types';
import * as React from 'react';
import { SxProps } from '../styles/defaultTheme';

export type CardCoverSlot = 'root';

export interface CardCoverTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the CardCover if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps;
  };
  defaultComponent: D;
}

export type CardCoverProps<
  D extends React.ElementType = CardCoverTypeMap['defaultComponent'],
  P = { component?: React.ElementType },
> = OverrideProps<CardCoverTypeMap<P, D>, D>;
