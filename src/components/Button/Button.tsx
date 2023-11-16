import { createSignal, JSX } from 'solid-js';
import { Button as SButton, Menu, MenuItem } from '@suid/material';

export type Props = {
  variant: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large' | string;
  label: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  dropdownItems?: string[]; // List of items for the dropdown
  onDropdownItemClick?: (item: string) => void; // Callback for dropdown item click
};

function Button({
  variant,
  label,
  startIcon,
  endIcon,
  onClick,
  disabled,
  href,
  dropdownItems,
  onDropdownItemClick,
}: Props) {
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement>(null);
  const [isDropdownOpen, setDropdownOpen] = createSignal(false);

  const handleButtonClick = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLButtonElement;

    setAnchorEl(target);
    setDropdownOpen(!isDropdownOpen());
    onClick && typeof onClick === 'function' && onClick(); // Check if onClick is a function before calling it
  };

  const handleDropdownItemClick = (item: string) => {
    setDropdownOpen(false);
    onDropdownItemClick &&
      typeof onDropdownItemClick === 'function' &&
      onDropdownItemClick(item); // Check if onDropdownItemClick is a function before calling it
  };

  return (
    <>
      <SButton
        ref={anchorEl}
        variant={variant}
        onClick={handleButtonClick}
        disabled={disabled}
        href={href}
        startIcon={startIcon}
        endIcon={endIcon}
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
            <MenuItem
              value={item}
              onClick={() => handleDropdownItemClick(item)}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}

export default Button;
