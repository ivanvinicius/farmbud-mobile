/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */

import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {Container, Icon, TextInput} from './styles';

interface IInputRef {
  focus(): void;
}

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholder: string;
}

interface IInputValueRef {
  value: string;
}

const Input: React.ForwardRefRenderFunction<IInputRef, IInputProps> = (
  {name, icon, placeholder, ...rest},
  ref,
) => {
  const {registerField, defaultValue, fieldName, error} = useField(name);
  const inputValueRef = useRef<IInputValueRef>({value: defaultValue});
  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container isFocused={isFocused} hasError={!!error}>
      <Icon name={icon} isFocused={isFocused} isFilled={isFilled} />
      <TextInput
        ref={inputElementRef}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        placeholder={placeholder}
        placeholderTextColor="#9C98A6"
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
