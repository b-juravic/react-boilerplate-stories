import styled from 'styled-components';

const MessageContainer = styled.div`
  ${'' /* green for success message, red for error message */}
  background-color: ${props => (props.success ? '#adebad' : '#ff9999')};
  border-color: ${props => (props.success ? '#adebad' : '#ff9999')};
  border-style: solid;
  border-radius: 4px;
  color: 'white';
  padding: 2px;
  font-size: 16px;
  height: 25px;
  width: 100%;
  margin-bottom: 1%;
  text-align: center;
`;

export default MessageContainer;
