import styled from '@emotion/styled'

export const StyledModalContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledModalBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
`

export const StyledModalContent = styled.div`
  z-index: 1;
  background-color: white;
  border-radius: 4px;
`
