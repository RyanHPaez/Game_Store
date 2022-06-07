import styled from 'styled-components';

export const Box = styled.div`



@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`

`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 60px;
`;

export const Row = styled.div`
table-layout: fixed;
// display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: blue;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: red;
margin-bottom: 40px;
font-weight: bold;
`;
