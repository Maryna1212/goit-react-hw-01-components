import styled from '@emotion/styled'



export const FriendListContainer = styled.ul`
  list-style-type: none;
  background-color: rgb(233, 241, 163);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const FriendItem = styled.li`
  background-color: rgb(205, 245, 181);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  width: 150px;
  border: 1px solid #9e9e9e;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
;`

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: block;
  margin-right: 15px;
  margin-left: 10px;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  display: block;
`;  

