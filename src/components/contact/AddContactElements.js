import styled from 'styled-components'

export const Card = styled.div`
  border: solid 0.5px #34a3a3;
  border-radius: 5px;
  padding: 20px;
  margin: 10px auto;
  width: 50%;
  /* background-image: linear-gradient(to right, cyan, #272343); */
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.8);
  @media all and (max-width: 800px) {
    width: 60%;
  }
`

export const CardTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
  /* border-bottom: 0.5px solid #34a3a3; */
  margin-bottom: 15px;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
`
export const FormGroup = styled.div`
  padding: 10px 0;
`
export const Label = styled.label`
  color: #c5ecfd;
  font-size: 1.2rem;
`
export const Input = styled.input`
  padding: 10px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #34a3a3;
  color: #c5ecfd;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: #c5ecfd;
  }
`
export const InputButton = styled.input`
  background: #272343;
  border: 0;
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  width: 30%;
  margin: 0 auto;
  @media all and (max-width: 800px) {
    width: 55%;
  }
`
