import React, { useEffect, useMemo, useState } from 'react';

import { colors } from '@/styles/colors';
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styled';

export interface InputCustomProps {
  label?: string;
  message?: string;
  error?: boolean;
}

export type InputProps = InputCustomProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, message, error = false, type, value, ...props }, ref) => {
    const [inputType, setInputType] = useState(type);
    const [inputValue, setInputValue] = useState(String(value || ''));
    const [isFocusing, setIsFocusing] = useState<boolean>(false);
    const isPasswordInput = useMemo(() => type === 'password', [type]);
    const isFocusingOrHasValue = useMemo(
      // input[type="password"]인 경우 포커스 상태에서만 클리어 버튼 렌더링
      // 포커스가 해제된 경우 값이 있더라도 클리어 버튼 대신 패스워드 Visible 버튼 렌더링을 위함
      () => (isPasswordInput ? isFocusing : isFocusing || inputValue !== ''),
      [isFocusing, inputValue, isPasswordInput]
    );

    const handleOnClickVisibleButton = () => {
      setInputType(inputType === 'password' ? 'text' : 'password');
    };

    const handleOnClickClearButton = () => {
      setInputValue('');
    };

    useEffect(() => {
      if (value) setInputType(String(value));
    }, [value]);

    return (
      <S.InputContainer error={error}>
        {label && <S.InputLabel>{label}</S.InputLabel>}
        <S.InputElementWrapper>
          <S.InputElement
            {...props}
            ref={ref}
            type={inputType}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (props.onChange) props.onChange(e);
            }}
            onFocus={() => setIsFocusing(true)}
            onBlur={() => setIsFocusing(false)}
          />

          <S.InputButtonsRelativeContainer>
            <S.InputClearButton
              type="button"
              tabIndex={-1}
              onClick={handleOnClickClearButton}
              // input[type="password"]의 경우만 클리어 버튼 포커스도 Input 포커스로 인식
              // 이렇게 하지 않는 경우, 바로 포커스가 해제되어 패스워드 Visible 버튼이 렌더링됨
              onFocus={() => setIsFocusing((prev) => (isPasswordInput ? true : prev))}
              onBlur={() => setIsFocusing((prev) => (isPasswordInput ? false : prev))}
              isFocusingOrHasValue={isFocusingOrHasValue}
            >
              <FontAwesomeIcon fontSize="1.2rem" icon={faXmark} color={colors.white} />
            </S.InputClearButton>

            {isPasswordInput && (
              <S.InputPasswordVisibleButton
                type="button"
                tabIndex={-1}
                onClick={handleOnClickVisibleButton}
                isFocusingOrHasValue={isFocusingOrHasValue}
              >
                <FontAwesomeIcon
                  fontSize="1.4rem"
                  icon={inputType === 'password' ? faEyeSlash : faEye}
                  color="#595865"
                />
              </S.InputPasswordVisibleButton>
            )}
          </S.InputButtonsRelativeContainer>
        </S.InputElementWrapper>
        {message && <S.InputMessage>{message}</S.InputMessage>}
      </S.InputContainer>
    );
  }
);
