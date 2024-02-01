import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  flex-wrap: inherit;
  align-items: inherit;
  justify-content: inherit;
`;
export const BaseContentBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;
  background-color: ${({ theme }) => theme.colors.greyLight};
  flex-direction: row;
  padding-top: ${({ theme }) => theme.spacing.medium};
  padding-bottom: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  //border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

export const ContentBoxContainer = styled(BaseContentBoxContainer)``;

export const ContentBoxContainerPrimary = styled(BaseContentBoxContainer)``;

export const ContentBoxContainerSecondary = styled(BaseContentBoxContainer)``;
