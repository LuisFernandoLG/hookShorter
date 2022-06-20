import styled, { css } from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flex_dc }) => (flex_dc ? 'column' : 'row')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  gap: ${({ gap }) => gap};
  max-width: ${({ mxWidth }) => mxWidth};

  ${({ pd }) => `padding: ${pd}`};
  ${({ mg }) => mg ? `margin: ${mg}` : null};
  ${({ bg }) => `background: ${bg}`};
  ${({ w }) => `width:${w}`};
  ${({ overflow_h }) =>
    overflow_h
      ? css`
          overflow: hidden;
        `
      : null}

  /* New type of props */
  ${({ fd_c }) => fd_c && 'flex-direction:column;'}
  ${({ jc_c }) => jc_c && 'justify-content : center'};
  ${({ jc_fs }) => jc_fs && 'justify-content : flex-start'};
  ${({ jc_fe }) => jc_fe && 'justify-content : flex-end'};
  ${({ jc_sb }) => jc_sb && 'justify-content : space-between'};
  ${({ jc_sa }) => jc_sa && 'justify-content : space-around'};
  ${({ jc_se }) => jc_se && 'justify-content : space-evenly'};

  ${({ ai_c }) => ai_c && 'align-items : center;'};
  ${({ ai_fs }) => ai_fs && 'align-items : flex-start;'};
  ${({ ai_fe }) => ai_fe && 'align-items : flex-end'};
  ${({ ai_st }) => ai_st && 'align-items : streth'};

  align-content: ${({ ac_c }) => ac_c && 'alignContent : center'};
`