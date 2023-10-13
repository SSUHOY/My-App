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

export const DropdownContentBox = styled.div`
display: none;
position: absolute;
background-color: rgb(49, 49, 49);
max-width: 280px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
z-index: 1;
`
export const DropdownMenu = styled.div`
position: relative;
display: inline-block;
border-radius: 12px;
`

export const DropDownBtn = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #FFFFFF;
  border-radius: 60px;
  padding: 6px 20px;
  margin-right: 10px;
  color: white;
  background-color: transparent;
  &:hover{ 
    border-color: rgb(154, 72, 241);
  }
  &:focus {
    border-color: rgb(154, 72, 241);
  }
  &:active{
    border: 1px solid rgb(154, 72, 241);
    border-color: rgb(154, 72, 241);
    color: rgb(154, 72, 241);
  }
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
    ${(props) => !props.active && `border-color: #d9b6ff; color: #ad61ff;`}
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
    ${(props) => !props.active && `border-color: #d9b6ff; color: #ad61ff;`}
    text-decoration: underline;
  }
`