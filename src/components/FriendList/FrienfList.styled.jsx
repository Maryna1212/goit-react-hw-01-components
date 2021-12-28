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

// export const FriendSpan = styled.span`
//    background-color: rgb(205, 245, 181);
// `;

export const Avatar = styled.img`
  display: block;
`;  