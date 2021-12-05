import React from 'react';
import styled from 'styled-components';
import { Add, Remove } from "@material-ui/icons";


const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
text-decoration: underline;
cersor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex:2;
display: flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props => props.color)}
`;

const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;

const Hr = styled.hr`
background-color: lightgray; 
border: none;
height: 1px;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemPrice = styled.span``;

const SummaryItemText = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weigth: 600; 
`;


const Cart = () => {
  return (
  <div>

      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type = "filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
          <Product>
            <ProductDetail>
              <Image src= "https://my-live-05.slatic.net/p/3e85123f8cb1bb1a455d0991f9b1c6ce.jpg_720x720q80.jpg_.webp"/>
              <Details>
                <ProductName><b>Product:</b> CUTE BOY</ProductName>
                <ProductId><b>ID:</b> #123</ProductId>
                <ProductColor color = "darkblue"/>
              </Details>
            </ProductDetail>
            <PriceDetail>
             <ProductAmountContainer>
               <Add/>
               <ProductAmount>2</ProductAmount>
               <Remove/>
             </ProductAmountContainer>
             <ProductPrice>$150</ProductPrice>
            </PriceDetail>
          </Product>
          <Hr/>
          <Product>
            <ProductDetail>
              <Image src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtQAqo8s8Ogr3Y-6HTbrBCkX7d6LMLqWfsR247C1ofk8J9lVOafdZSIZc2ZiASrrw8Fo&usqp=CAU"/>
              <Details>
                <ProductName><b>Product:</b> CUTE BOY</ProductName>
                <ProductId><b>ID:</b> #123</ProductId>
                <ProductColor color = "darkblue"/>
              </Details>
            </ProductDetail>
            <PriceDetail>
             <ProductAmountContainer>
               <Add/>
               <ProductAmount>2</ProductAmount>
               <Remove/>
             </ProductAmountContainer>
             <ProductPrice>$150</ProductPrice>
            </PriceDetail>
          </Product>
         </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 60</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 6.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -6.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 60</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
        </Wrapper>
   </div>

  );
}

export default Cart;
