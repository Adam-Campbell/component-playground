import styled from 'styled-components';

export const Row = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 748px;
    @media (min-width: 960px) {
        width: 920px;
    }
    @media (min-width: 1250px) {
        width: 1210px;
    }
`;

export const SplitLayoutBody = styled.div`
    overflow-x: hidden;
`;

export const SplitLayoutContainer = styled(Row)`
    display: flex;
`;

export const SplitLayoutMain = styled.main`
    position: relative;
    width: 748px;
    flex-shrink: 0;
    min-height: 400px;
    @media (min-width: 960px) {
        width: calc(100% - 260px);
    }
    @media (min-width: 1250px) {
        width: calc(100% - 340px);
    }
`;

export const SplitLayoutAside = styled.aside`
    display: ${({ showAside }) => showAside ? 'initial' : 'none'};
    width: 260px;
    flex-shrink: 0;
    min-height: 400px;
    padding-right: 30px;
    @media (min-width: 960px) {
        display: initial;
    }
    @media (min-width: 1250px) {
        width: 340px;
    }
`;