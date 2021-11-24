import React from 'react';
import styled from 'styled-components';


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

const ProductAmountContainer = styled.div``;
const ProductAmount = styled.div``;
const ProductPrice = styled.div``;
const Add = styled.div``;
const Remove = styled.div``;
const Summary = styled.div`
flex: 1;
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

              <Image src= "https://assets.ajio.com/medias/sys_master/root/20210403/TCIf/6068daf77cdb8c1f147d2662/-473Wx593H-461866963-blue-MODEL.jpg"/>
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
          <Summary>summary</Summary>
        </Bottom>
        </Wrapper>
   </div>

  );
}

export default Cart;
