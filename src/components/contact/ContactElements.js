import styled from 'styled-components'

export const Card = styled.div`
  border-bottom: solid 0.5px #34a3a3;
  /* border-radius: 50px; */
  padding: 40px;
  margin: 10px auto;
  width: 50%;
  /* background-image: linear-gradient(to right, cyan, #272343); */
  /* background-color: #e3f6f5; */
  @media all and (max-width: 800px) {
    width: 60%;
  }
`

export const CardTitle = styled.div`
  font-size: 1.5rem;
  color: #272343;
  font-weight: 700;
  /* border-bottom: 0.5px solid; */
  margin-bottom: 15px;
`

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  @media all and (max-width: 900px) {
    padding: 0;
  }
`

export const ListItem = styled.div`
  padding: 10px 0;
  color: #34a3a3;
  font-size: 1.2rem;
`
export const CardBody = styled.div``
export const FormGroup = styled.div``
