import { InputHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

export type TextInputRootProps = {
  children: React.ReactNode;
};

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export type TextInputIconProps = {
  children: React.ReactNode;
};

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = 'TextInput.Icon';

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...rest}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
