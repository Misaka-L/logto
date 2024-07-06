import classNames from 'classnames';
import { useRef, useState } from 'react';
import { ChromePicker } from 'react-color';
import { Trans } from 'react-i18next';

import { onKeyDownHandler } from '@/utils/a11y';

import Dropdown from '../Dropdown';

import * as styles from './index.module.scss';

type Props = {
  readonly value?: string;
  readonly onChange: (value: string) => void;
};

function ColorPicker({ onChange, value }: Props) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      tabIndex={0}
      role="button"
      className={classNames(styles.container, isOpen && styles.highlight)}
      onClick={() => {
        setIsOpen(true);
      }}
      onKeyDown={onKeyDownHandler(() => {
        setIsOpen(true);
      })}
    >
      <span ref={anchorRef} className={styles.brick} style={{ backgroundColor: value }} />
      <span className={classNames(value === undefined && styles.placeholder)}>
        {value?.toUpperCase() ?? <Trans i18nKey="admin_console.general.select_a_color" />}
      </span>
      <Dropdown
        anchorRef={anchorRef}
        isOpen={isOpen}
        horizontalAlign="start"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <ChromePicker
          color={value}
          onChange={({ hex }) => {
            onChange(hex);
          }}
        />
      </Dropdown>
    </div>
  );
}

export default ColorPicker;
