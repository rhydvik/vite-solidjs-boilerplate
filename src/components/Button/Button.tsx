import React from 'react';
import { createSignal } from 'solid-js';
import { Button as SButton, Menu, MenuItem } from '@suid/material';

export type Props = {
  className?: string;
  variant: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large' | string;
  label: string;
  icon?: React.ReactNode;
  iconAlignment?: 'start' | 'end' | string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  dropdownItems?: string[]; // List of items for the dropdown
  onDropdownItemClick?: (item: string) => void; // Callback for dropdown item click
};

function Button({
  variant,
  label,
  icon,
  iconAlignment,
  className,
  onClick,
  disabled,
  href,
  dropdownItems,
  onDropdownItemClick,
}: Props) {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLButtonElement>(null);
  const [isDropdownOpen, setDropdownOpen] = createSignal(false);

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
    setDropdownOpen(!isDropdownOpen());
    onClick && typeof onClick === 'function' && onClick(); // Check if onClick is a function before calling it
  };

  const handleDropdownItemClick = (item: string) => {
    setAnchorEl(null);
    setDropdownOpen(false);
    onDropdownItemClick &&
      typeof onDropdownItemClick === 'function' &&
      onDropdownItemClick(item); // Check if onDropdownItemClick is a function before calling it
  };

  return (
    <>
      <SButton
        variant={variant}
        className={className}
        onClick={handleButtonClick}
        disabled={disabled}
        href={href}
        startIcon={iconAlignment === 'start' ? icon : null}
        endIcon={iconAlignment === 'end' ? icon : null}
      >
        <div>{label}</div>
      </SButton>
      {dropdownItems && (
        <Menu
          anchorEl={anchorEl}
          open={isDropdownOpen()}
          onClose={() => setDropdownOpen(false)}
        >
          {dropdownItems.map((item) => (
            <MenuItem key={item} onClick={() => handleDropdownItemClick(item)}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}

export default Button;
