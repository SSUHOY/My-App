import styled from "styled-components"

export const CenterBlockFilter = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
margin-bottom: 51px;
`
export const DropdownMenu = styled.div`
position: relative;
display: inline-block;
border-radius: 12px;
`

export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
`

export const FieldSetRadio = styled.fieldset`
border: none;
`

export const InputRadio = styled.input`
appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  cursor:pointer;
`

export const DropdownList = styled.ul`
  overflow-y: scroll;
  cursor: pointer;
  &::-webkit-scrollbar {
    background: #2E2E2E;
    width: 2px;
}
&::-webkit-scrollbar-thumb{
    background: #f2f2f2;
  }
  display: flex;
  max-height: 237px;
  flex-direction: column;
  gap: 28px;
  & li:hover {
    ${(props) => !props.$active && `border-color: #d9b6ff; color: #ad61ff;`}
    text-decoration: underline;
  }
`
export const DropdownListGenres = styled.ul`
  display: flex;
  max-height: 237px;
  flex-direction: column;
  cursor: pointer;
  gap: 28px;
  & li:hover {
    ${(props) => !props.$active && `border-color: #d9b6ff; color: #ad61ff;`}
    text-decoration: underline;
  }
`