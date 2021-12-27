import styled from '@emotion/styled'

export const Prof = styled.div`
  background-color: #72d8e4;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  max-width: 300px;
  padding: 30px 20px;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  background-position: center;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  margin-bottom: 15px;
`;

export const Stats = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  width: 300px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  background-color: rgb(217, 249, 250);
  border: 1px solid rgb(139, 179, 212);
  padding: 10px;  
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;